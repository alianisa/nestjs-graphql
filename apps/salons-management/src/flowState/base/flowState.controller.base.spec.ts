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
import { FlowStateController } from "../flowState.controller";
import { FlowStateService } from "../flowState.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  authCode: "exampleAuthCode",
  authCodeIssuedAt: new Date(),
  authenticationMethod: "exampleAuthenticationMethod",
  codeChallenge: "exampleCodeChallenge",
  createdAt: new Date(),
  id: "exampleId",
  providerAccessToken: "exampleProviderAccessToken",
  providerRefreshToken: "exampleProviderRefreshToken",
  providerType: "exampleProviderType",
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const CREATE_RESULT = {
  authCode: "exampleAuthCode",
  authCodeIssuedAt: new Date(),
  authenticationMethod: "exampleAuthenticationMethod",
  codeChallenge: "exampleCodeChallenge",
  createdAt: new Date(),
  id: "exampleId",
  providerAccessToken: "exampleProviderAccessToken",
  providerRefreshToken: "exampleProviderRefreshToken",
  providerType: "exampleProviderType",
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const FIND_MANY_RESULT = [
  {
    authCode: "exampleAuthCode",
    authCodeIssuedAt: new Date(),
    authenticationMethod: "exampleAuthenticationMethod",
    codeChallenge: "exampleCodeChallenge",
    createdAt: new Date(),
    id: "exampleId",
    providerAccessToken: "exampleProviderAccessToken",
    providerRefreshToken: "exampleProviderRefreshToken",
    providerType: "exampleProviderType",
    updatedAt: new Date(),
    userId: "exampleUserId",
  },
];
const FIND_ONE_RESULT = {
  authCode: "exampleAuthCode",
  authCodeIssuedAt: new Date(),
  authenticationMethod: "exampleAuthenticationMethod",
  codeChallenge: "exampleCodeChallenge",
  createdAt: new Date(),
  id: "exampleId",
  providerAccessToken: "exampleProviderAccessToken",
  providerRefreshToken: "exampleProviderRefreshToken",
  providerType: "exampleProviderType",
  updatedAt: new Date(),
  userId: "exampleUserId",
};

const service = {
  createFlowState() {
    return CREATE_RESULT;
  },
  flowStates: () => FIND_MANY_RESULT,
  flowState: ({ where }: { where: { id: string } }) => {
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

describe("FlowState", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FlowStateService,
          useValue: service,
        },
      ],
      controllers: [FlowStateController],
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

  test("POST /flowStates", async () => {
    await request(app.getHttpServer())
      .post("/flowStates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        authCodeIssuedAt: CREATE_RESULT.authCodeIssuedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /flowStates", async () => {
    await request(app.getHttpServer())
      .get("/flowStates")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          authCodeIssuedAt: FIND_MANY_RESULT[0].authCodeIssuedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /flowStates/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/flowStates"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /flowStates/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/flowStates"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        authCodeIssuedAt: FIND_ONE_RESULT.authCodeIssuedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /flowStates existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/flowStates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        authCodeIssuedAt: CREATE_RESULT.authCodeIssuedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/flowStates")
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
