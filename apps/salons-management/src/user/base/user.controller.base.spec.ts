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
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aud: "exampleAud",
  bannedUntil: new Date(),
  confirmationSentAt: new Date(),
  confirmationToken: "exampleConfirmationToken",
  confirmedAt: new Date(),
  createdAt: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  emailChange: "exampleEmailChange",
  emailChangeConfirmStatus: 42,
  emailChangeSentAt: new Date(),
  emailChangeTokenCurrent: "exampleEmailChangeTokenCurrent",
  emailChangeTokenNew: "exampleEmailChangeTokenNew",
  emailConfirmedAt: new Date(),
  id: "exampleId",
  instanceId: "exampleInstanceId",
  invitedAt: new Date(),
  isAnonymous: "true",
  isSsoUser: "true",
  isSuperAdmin: "true",
  lastSignInAt: new Date(),
  password: "examplePassword",
  phone: "examplePhone",
  phoneChange: "examplePhoneChange",
  phoneChangeSentAt: new Date(),
  phoneChangeToken: "examplePhoneChangeToken",
  phoneConfirmedAt: new Date(),
  reauthenticationSentAt: new Date(),
  reauthenticationToken: "exampleReauthenticationToken",
  recoverySentAt: new Date(),
  recoveryToken: "exampleRecoveryToken",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const CREATE_RESULT = {
  aud: "exampleAud",
  bannedUntil: new Date(),
  confirmationSentAt: new Date(),
  confirmationToken: "exampleConfirmationToken",
  confirmedAt: new Date(),
  createdAt: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  emailChange: "exampleEmailChange",
  emailChangeConfirmStatus: 42,
  emailChangeSentAt: new Date(),
  emailChangeTokenCurrent: "exampleEmailChangeTokenCurrent",
  emailChangeTokenNew: "exampleEmailChangeTokenNew",
  emailConfirmedAt: new Date(),
  id: "exampleId",
  instanceId: "exampleInstanceId",
  invitedAt: new Date(),
  isAnonymous: "true",
  isSsoUser: "true",
  isSuperAdmin: "true",
  lastSignInAt: new Date(),
  password: "examplePassword",
  phone: "examplePhone",
  phoneChange: "examplePhoneChange",
  phoneChangeSentAt: new Date(),
  phoneChangeToken: "examplePhoneChangeToken",
  phoneConfirmedAt: new Date(),
  reauthenticationSentAt: new Date(),
  reauthenticationToken: "exampleReauthenticationToken",
  recoverySentAt: new Date(),
  recoveryToken: "exampleRecoveryToken",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const FIND_MANY_RESULT = [
  {
    aud: "exampleAud",
    bannedUntil: new Date(),
    confirmationSentAt: new Date(),
    confirmationToken: "exampleConfirmationToken",
    confirmedAt: new Date(),
    createdAt: new Date(),
    deletedAt: new Date(),
    email: "exampleEmail",
    emailChange: "exampleEmailChange",
    emailChangeConfirmStatus: 42,
    emailChangeSentAt: new Date(),
    emailChangeTokenCurrent: "exampleEmailChangeTokenCurrent",
    emailChangeTokenNew: "exampleEmailChangeTokenNew",
    emailConfirmedAt: new Date(),
    id: "exampleId",
    instanceId: "exampleInstanceId",
    invitedAt: new Date(),
    isAnonymous: "true",
    isSsoUser: "true",
    isSuperAdmin: "true",
    lastSignInAt: new Date(),
    password: "examplePassword",
    phone: "examplePhone",
    phoneChange: "examplePhoneChange",
    phoneChangeSentAt: new Date(),
    phoneChangeToken: "examplePhoneChangeToken",
    phoneConfirmedAt: new Date(),
    reauthenticationSentAt: new Date(),
    reauthenticationToken: "exampleReauthenticationToken",
    recoverySentAt: new Date(),
    recoveryToken: "exampleRecoveryToken",
    updatedAt: new Date(),
    username: "exampleUsername",
  },
];
const FIND_ONE_RESULT = {
  aud: "exampleAud",
  bannedUntil: new Date(),
  confirmationSentAt: new Date(),
  confirmationToken: "exampleConfirmationToken",
  confirmedAt: new Date(),
  createdAt: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  emailChange: "exampleEmailChange",
  emailChangeConfirmStatus: 42,
  emailChangeSentAt: new Date(),
  emailChangeTokenCurrent: "exampleEmailChangeTokenCurrent",
  emailChangeTokenNew: "exampleEmailChangeTokenNew",
  emailConfirmedAt: new Date(),
  id: "exampleId",
  instanceId: "exampleInstanceId",
  invitedAt: new Date(),
  isAnonymous: "true",
  isSsoUser: "true",
  isSuperAdmin: "true",
  lastSignInAt: new Date(),
  password: "examplePassword",
  phone: "examplePhone",
  phoneChange: "examplePhoneChange",
  phoneChangeSentAt: new Date(),
  phoneChangeToken: "examplePhoneChangeToken",
  phoneConfirmedAt: new Date(),
  reauthenticationSentAt: new Date(),
  reauthenticationToken: "exampleReauthenticationToken",
  recoverySentAt: new Date(),
  recoveryToken: "exampleRecoveryToken",
  updatedAt: new Date(),
  username: "exampleUsername",
};

const service = {
  createUser() {
    return CREATE_RESULT;
  },
  users: () => FIND_MANY_RESULT,
  user: ({ where }: { where: { id: string } }) => {
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

describe("User", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: service,
        },
      ],
      controllers: [UserController],
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

  test("POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        bannedUntil: CREATE_RESULT.bannedUntil.toISOString(),
        confirmationSentAt: CREATE_RESULT.confirmationSentAt.toISOString(),
        confirmedAt: CREATE_RESULT.confirmedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        emailChangeSentAt: CREATE_RESULT.emailChangeSentAt.toISOString(),
        emailConfirmedAt: CREATE_RESULT.emailConfirmedAt.toISOString(),
        invitedAt: CREATE_RESULT.invitedAt.toISOString(),
        lastSignInAt: CREATE_RESULT.lastSignInAt.toISOString(),
        phoneChangeSentAt: CREATE_RESULT.phoneChangeSentAt.toISOString(),
        phoneConfirmedAt: CREATE_RESULT.phoneConfirmedAt.toISOString(),
        reauthenticationSentAt:
          CREATE_RESULT.reauthenticationSentAt.toISOString(),
        recoverySentAt: CREATE_RESULT.recoverySentAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /users", async () => {
    await request(app.getHttpServer())
      .get("/users")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          bannedUntil: FIND_MANY_RESULT[0].bannedUntil.toISOString(),
          confirmationSentAt:
            FIND_MANY_RESULT[0].confirmationSentAt.toISOString(),
          confirmedAt: FIND_MANY_RESULT[0].confirmedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          emailChangeSentAt:
            FIND_MANY_RESULT[0].emailChangeSentAt.toISOString(),
          emailConfirmedAt: FIND_MANY_RESULT[0].emailConfirmedAt.toISOString(),
          invitedAt: FIND_MANY_RESULT[0].invitedAt.toISOString(),
          lastSignInAt: FIND_MANY_RESULT[0].lastSignInAt.toISOString(),
          phoneChangeSentAt:
            FIND_MANY_RESULT[0].phoneChangeSentAt.toISOString(),
          phoneConfirmedAt: FIND_MANY_RESULT[0].phoneConfirmedAt.toISOString(),
          reauthenticationSentAt:
            FIND_MANY_RESULT[0].reauthenticationSentAt.toISOString(),
          recoverySentAt: FIND_MANY_RESULT[0].recoverySentAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /users/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /users/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        bannedUntil: FIND_ONE_RESULT.bannedUntil.toISOString(),
        confirmationSentAt: FIND_ONE_RESULT.confirmationSentAt.toISOString(),
        confirmedAt: FIND_ONE_RESULT.confirmedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        emailChangeSentAt: FIND_ONE_RESULT.emailChangeSentAt.toISOString(),
        emailConfirmedAt: FIND_ONE_RESULT.emailConfirmedAt.toISOString(),
        invitedAt: FIND_ONE_RESULT.invitedAt.toISOString(),
        lastSignInAt: FIND_ONE_RESULT.lastSignInAt.toISOString(),
        phoneChangeSentAt: FIND_ONE_RESULT.phoneChangeSentAt.toISOString(),
        phoneConfirmedAt: FIND_ONE_RESULT.phoneConfirmedAt.toISOString(),
        reauthenticationSentAt:
          FIND_ONE_RESULT.reauthenticationSentAt.toISOString(),
        recoverySentAt: FIND_ONE_RESULT.recoverySentAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /users existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        bannedUntil: CREATE_RESULT.bannedUntil.toISOString(),
        confirmationSentAt: CREATE_RESULT.confirmationSentAt.toISOString(),
        confirmedAt: CREATE_RESULT.confirmedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        emailChangeSentAt: CREATE_RESULT.emailChangeSentAt.toISOString(),
        emailConfirmedAt: CREATE_RESULT.emailConfirmedAt.toISOString(),
        invitedAt: CREATE_RESULT.invitedAt.toISOString(),
        lastSignInAt: CREATE_RESULT.lastSignInAt.toISOString(),
        phoneChangeSentAt: CREATE_RESULT.phoneChangeSentAt.toISOString(),
        phoneConfirmedAt: CREATE_RESULT.phoneConfirmedAt.toISOString(),
        reauthenticationSentAt:
          CREATE_RESULT.reauthenticationSentAt.toISOString(),
        recoverySentAt: CREATE_RESULT.recoverySentAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/users")
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
