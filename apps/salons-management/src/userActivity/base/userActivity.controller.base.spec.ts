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
import { UserActivityController } from "../userActivity.controller";
import { UserActivityService } from "../userActivity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activityDescription: "exampleActivityDescription",
  activityName: "exampleActivityName",
  activitySubText: "exampleActivitySubText",
  activityTime: "exampleActivityTime",
  activityType: "exampleActivityType",
  id: "exampleId",
  otherUser: "exampleOtherUser",
  projectRef: "exampleProjectRef",
  readState: "true",
  targetUserRef: "exampleTargetUserRef",
  taskRef: "exampleTaskRef",
  unreadByUser: "exampleUnreadByUser",
};
const CREATE_RESULT = {
  activityDescription: "exampleActivityDescription",
  activityName: "exampleActivityName",
  activitySubText: "exampleActivitySubText",
  activityTime: "exampleActivityTime",
  activityType: "exampleActivityType",
  id: "exampleId",
  otherUser: "exampleOtherUser",
  projectRef: "exampleProjectRef",
  readState: "true",
  targetUserRef: "exampleTargetUserRef",
  taskRef: "exampleTaskRef",
  unreadByUser: "exampleUnreadByUser",
};
const FIND_MANY_RESULT = [
  {
    activityDescription: "exampleActivityDescription",
    activityName: "exampleActivityName",
    activitySubText: "exampleActivitySubText",
    activityTime: "exampleActivityTime",
    activityType: "exampleActivityType",
    id: "exampleId",
    otherUser: "exampleOtherUser",
    projectRef: "exampleProjectRef",
    readState: "true",
    targetUserRef: "exampleTargetUserRef",
    taskRef: "exampleTaskRef",
    unreadByUser: "exampleUnreadByUser",
  },
];
const FIND_ONE_RESULT = {
  activityDescription: "exampleActivityDescription",
  activityName: "exampleActivityName",
  activitySubText: "exampleActivitySubText",
  activityTime: "exampleActivityTime",
  activityType: "exampleActivityType",
  id: "exampleId",
  otherUser: "exampleOtherUser",
  projectRef: "exampleProjectRef",
  readState: "true",
  targetUserRef: "exampleTargetUserRef",
  taskRef: "exampleTaskRef",
  unreadByUser: "exampleUnreadByUser",
};

const service = {
  createUserActivity() {
    return CREATE_RESULT;
  },
  userActivities: () => FIND_MANY_RESULT,
  userActivity: ({ where }: { where: { id: string } }) => {
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

describe("UserActivity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserActivityService,
          useValue: service,
        },
      ],
      controllers: [UserActivityController],
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

  test("POST /userActivities", async () => {
    await request(app.getHttpServer())
      .post("/userActivities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /userActivities", async () => {
    await request(app.getHttpServer())
      .get("/userActivities")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /userActivities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userActivities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userActivities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userActivities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /userActivities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userActivities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/userActivities")
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
