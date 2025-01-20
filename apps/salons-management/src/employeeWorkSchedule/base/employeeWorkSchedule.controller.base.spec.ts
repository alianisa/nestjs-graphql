import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EmployeeWorkScheduleController } from "../employeeWorkSchedule.controller";
import { EmployeeWorkScheduleService } from "../employeeWorkSchedule.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  breakEnd: new Date(),
  breakStart: new Date(),
  id: "exampleId",
  shiftEnd: new Date(),
  shiftStart: new Date(),
};
const CREATE_RESULT = {
  breakEnd: new Date(),
  breakStart: new Date(),
  id: "exampleId",
  shiftEnd: new Date(),
  shiftStart: new Date(),
};
const FIND_MANY_RESULT = [
  {
    breakEnd: new Date(),
    breakStart: new Date(),
    id: "exampleId",
    shiftEnd: new Date(),
    shiftStart: new Date(),
  },
];
const FIND_ONE_RESULT = {
  breakEnd: new Date(),
  breakStart: new Date(),
  id: "exampleId",
  shiftEnd: new Date(),
  shiftStart: new Date(),
};

const service = {
  createEmployeeWorkSchedule() {
    return CREATE_RESULT;
  },
  employeeWorkSchedules: () => FIND_MANY_RESULT,
  employeeWorkSchedule: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("EmployeeWorkSchedule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeWorkScheduleService,
          useValue: service,
        },
      ],
      controllers: [EmployeeWorkScheduleController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /employeeWorkSchedules", async () => {
    await request(app.getHttpServer())
      .post("/employeeWorkSchedules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        breakEnd: CREATE_RESULT.breakEnd.toISOString(),
        breakStart: CREATE_RESULT.breakStart.toISOString(),
        shiftEnd: CREATE_RESULT.shiftEnd.toISOString(),
        shiftStart: CREATE_RESULT.shiftStart.toISOString(),
      });
  });

  test("GET /employeeWorkSchedules", async () => {
    await request(app.getHttpServer())
      .get("/employeeWorkSchedules")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          breakEnd: FIND_MANY_RESULT[0].breakEnd.toISOString(),
          breakStart: FIND_MANY_RESULT[0].breakStart.toISOString(),
          shiftEnd: FIND_MANY_RESULT[0].shiftEnd.toISOString(),
          shiftStart: FIND_MANY_RESULT[0].shiftStart.toISOString(),
        },
      ]);
  });

  test("GET /employeeWorkSchedules/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeWorkSchedules"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeWorkSchedules/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeWorkSchedules"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        breakEnd: FIND_ONE_RESULT.breakEnd.toISOString(),
        breakStart: FIND_ONE_RESULT.breakStart.toISOString(),
        shiftEnd: FIND_ONE_RESULT.shiftEnd.toISOString(),
        shiftStart: FIND_ONE_RESULT.shiftStart.toISOString(),
      });
  });

  test("POST /employeeWorkSchedules existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeWorkSchedules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        breakEnd: CREATE_RESULT.breakEnd.toISOString(),
        breakStart: CREATE_RESULT.breakStart.toISOString(),
        shiftEnd: CREATE_RESULT.shiftEnd.toISOString(),
        shiftStart: CREATE_RESULT.shiftStart.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeWorkSchedules")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
