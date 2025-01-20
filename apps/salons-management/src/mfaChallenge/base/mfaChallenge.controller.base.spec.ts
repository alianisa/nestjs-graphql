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
import { MfaChallengeController } from "../mfaChallenge.controller";
import { MfaChallengeService } from "../mfaChallenge.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  ipAddress: "exampleIpAddress",
  otpCode: "exampleOtpCode",
  verifiedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  ipAddress: "exampleIpAddress",
  otpCode: "exampleOtpCode",
  verifiedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    ipAddress: "exampleIpAddress",
    otpCode: "exampleOtpCode",
    verifiedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  ipAddress: "exampleIpAddress",
  otpCode: "exampleOtpCode",
  verifiedAt: new Date(),
};

const service = {
  createMfaChallenge() {
    return CREATE_RESULT;
  },
  mfaChallenges: () => FIND_MANY_RESULT,
  mfaChallenge: ({ where }: { where: { id: string } }) => {
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

describe("MfaChallenge", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MfaChallengeService,
          useValue: service,
        },
      ],
      controllers: [MfaChallengeController],
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

  test("POST /mfaChallenges", async () => {
    await request(app.getHttpServer())
      .post("/mfaChallenges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        verifiedAt: CREATE_RESULT.verifiedAt.toISOString(),
      });
  });

  test("GET /mfaChallenges", async () => {
    await request(app.getHttpServer())
      .get("/mfaChallenges")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          verifiedAt: FIND_MANY_RESULT[0].verifiedAt.toISOString(),
        },
      ]);
  });

  test("GET /mfaChallenges/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mfaChallenges"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mfaChallenges/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mfaChallenges"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        verifiedAt: FIND_ONE_RESULT.verifiedAt.toISOString(),
      });
  });

  test("POST /mfaChallenges existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mfaChallenges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        verifiedAt: CREATE_RESULT.verifiedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/mfaChallenges")
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
