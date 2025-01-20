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
import { MfaFactorController } from "../mfaFactor.controller";
import { MfaFactorService } from "../mfaFactor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  friendlyName: "exampleFriendlyName",
  id: "exampleId",
  lastChallengedAt: new Date(),
  phone: "examplePhone",
  secret: "exampleSecret",
  updatedAt: new Date(),
  webAuthnAaguid: "exampleWebAuthnAaguid",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  friendlyName: "exampleFriendlyName",
  id: "exampleId",
  lastChallengedAt: new Date(),
  phone: "examplePhone",
  secret: "exampleSecret",
  updatedAt: new Date(),
  webAuthnAaguid: "exampleWebAuthnAaguid",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    friendlyName: "exampleFriendlyName",
    id: "exampleId",
    lastChallengedAt: new Date(),
    phone: "examplePhone",
    secret: "exampleSecret",
    updatedAt: new Date(),
    webAuthnAaguid: "exampleWebAuthnAaguid",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  friendlyName: "exampleFriendlyName",
  id: "exampleId",
  lastChallengedAt: new Date(),
  phone: "examplePhone",
  secret: "exampleSecret",
  updatedAt: new Date(),
  webAuthnAaguid: "exampleWebAuthnAaguid",
};

const service = {
  createMfaFactor() {
    return CREATE_RESULT;
  },
  mfaFactors: () => FIND_MANY_RESULT,
  mfaFactor: ({ where }: { where: { id: string } }) => {
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

describe("MfaFactor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MfaFactorService,
          useValue: service,
        },
      ],
      controllers: [MfaFactorController],
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

  test("POST /mfaFactors", async () => {
    await request(app.getHttpServer())
      .post("/mfaFactors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastChallengedAt: CREATE_RESULT.lastChallengedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /mfaFactors", async () => {
    await request(app.getHttpServer())
      .get("/mfaFactors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastChallengedAt: FIND_MANY_RESULT[0].lastChallengedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /mfaFactors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mfaFactors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mfaFactors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mfaFactors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastChallengedAt: FIND_ONE_RESULT.lastChallengedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /mfaFactors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mfaFactors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastChallengedAt: CREATE_RESULT.lastChallengedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/mfaFactors")
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
