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
import { EmployeeTaskController } from "../employeeTask.controller";
import { EmployeeTaskService } from "../employeeTask.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualDuration: 42,
  actualStartTime: new Date(),
  completedAt: new Date(),
  createdAt: new Date(),
  estimatedDuration: 42,
  id: "exampleId",
  notes: "exampleNotes",
  scheduledStartTime: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  actualDuration: 42,
  actualStartTime: new Date(),
  completedAt: new Date(),
  createdAt: new Date(),
  estimatedDuration: 42,
  id: "exampleId",
  notes: "exampleNotes",
  scheduledStartTime: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actualDuration: 42,
    actualStartTime: new Date(),
    completedAt: new Date(),
    createdAt: new Date(),
    estimatedDuration: 42,
    id: "exampleId",
    notes: "exampleNotes",
    scheduledStartTime: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actualDuration: 42,
  actualStartTime: new Date(),
  completedAt: new Date(),
  createdAt: new Date(),
  estimatedDuration: 42,
  id: "exampleId",
  notes: "exampleNotes",
  scheduledStartTime: new Date(),
  updatedAt: new Date(),
};

const service = {
  createEmployeeTask() {
    return CREATE_RESULT;
  },
  employeeTasks: () => FIND_MANY_RESULT,
  employeeTask: ({ where }: { where: { id: string } }) => {
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

describe("EmployeeTask", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeTaskService,
          useValue: service,
        },
      ],
      controllers: [EmployeeTaskController],
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

  test("POST /employeeTasks", async () => {
    await request(app.getHttpServer())
      .post("/employeeTasks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualStartTime: CREATE_RESULT.actualStartTime.toISOString(),
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        scheduledStartTime: CREATE_RESULT.scheduledStartTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /employeeTasks", async () => {
    await request(app.getHttpServer())
      .get("/employeeTasks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actualStartTime: FIND_MANY_RESULT[0].actualStartTime.toISOString(),
          completedAt: FIND_MANY_RESULT[0].completedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          scheduledStartTime:
            FIND_MANY_RESULT[0].scheduledStartTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /employeeTasks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeTasks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeTasks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeTasks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actualStartTime: FIND_ONE_RESULT.actualStartTime.toISOString(),
        completedAt: FIND_ONE_RESULT.completedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        scheduledStartTime: FIND_ONE_RESULT.scheduledStartTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /employeeTasks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeTasks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualStartTime: CREATE_RESULT.actualStartTime.toISOString(),
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        scheduledStartTime: CREATE_RESULT.scheduledStartTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeTasks")
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
