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
import { SalonController } from "../salon.controller";
import { SalonService } from "../salon.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  active: "true",
  address: "exampleAddress",
  barbers: "exampleBarbers",
  closeTime: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  email: "exampleEmail",
  id: "exampleId",
  images: "exampleImages",
  img: "exampleImg",
  logo: "exampleLogo",
  name: "exampleName",
  open: "true",
  openTime: new Date(),
  phone: "examplePhone",
  timezone: "exampleTimezone",
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const CREATE_RESULT = {
  active: "true",
  address: "exampleAddress",
  barbers: "exampleBarbers",
  closeTime: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  email: "exampleEmail",
  id: "exampleId",
  images: "exampleImages",
  img: "exampleImg",
  logo: "exampleLogo",
  name: "exampleName",
  open: "true",
  openTime: new Date(),
  phone: "examplePhone",
  timezone: "exampleTimezone",
  updatedAt: new Date(),
  website: "exampleWebsite",
};
const FIND_MANY_RESULT = [
  {
    active: "true",
    address: "exampleAddress",
    barbers: "exampleBarbers",
    closeTime: new Date(),
    createdAt: new Date(),
    description: "exampleDescription",
    email: "exampleEmail",
    id: "exampleId",
    images: "exampleImages",
    img: "exampleImg",
    logo: "exampleLogo",
    name: "exampleName",
    open: "true",
    openTime: new Date(),
    phone: "examplePhone",
    timezone: "exampleTimezone",
    updatedAt: new Date(),
    website: "exampleWebsite",
  },
];
const FIND_ONE_RESULT = {
  active: "true",
  address: "exampleAddress",
  barbers: "exampleBarbers",
  closeTime: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  email: "exampleEmail",
  id: "exampleId",
  images: "exampleImages",
  img: "exampleImg",
  logo: "exampleLogo",
  name: "exampleName",
  open: "true",
  openTime: new Date(),
  phone: "examplePhone",
  timezone: "exampleTimezone",
  updatedAt: new Date(),
  website: "exampleWebsite",
};

const service = {
  createSalon() {
    return CREATE_RESULT;
  },
  salons: () => FIND_MANY_RESULT,
  salon: ({ where }: { where: { id: string } }) => {
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

describe("Salon", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SalonService,
          useValue: service,
        },
      ],
      controllers: [SalonController],
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

  test("POST /salons", async () => {
    await request(app.getHttpServer())
      .post("/salons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closeTime: CREATE_RESULT.closeTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        openTime: CREATE_RESULT.openTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /salons", async () => {
    await request(app.getHttpServer())
      .get("/salons")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          closeTime: FIND_MANY_RESULT[0].closeTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          openTime: FIND_MANY_RESULT[0].openTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /salons/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salons"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /salons/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/salons"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        closeTime: FIND_ONE_RESULT.closeTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        openTime: FIND_ONE_RESULT.openTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /salons existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/salons")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closeTime: CREATE_RESULT.closeTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        openTime: CREATE_RESULT.openTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/salons")
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
