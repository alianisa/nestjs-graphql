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
import { UserProfileController } from "../userProfile.controller";
import { UserProfileService } from "../userProfile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  avatarUrl: "exampleAvatarUrl",
  bio: "exampleBio",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  employeeDismissalAt: new Date(),
  employeeEmploymentAt: new Date(),
  firstName: "exampleFirstName",
  fullName: "exampleFullName",
  fullRegistered: "true",
  hiredDate: new Date(),
  id: "exampleId",
  isAdmin: "true",
  isBarber: "true",
  isEmployee: "true",
  jobTitle: "exampleJobTitle",
  lastName: "exampleLastName",
  loyaltyPoints: 42,
  phone: "examplePhone",
  roles: "exampleRoles",
  updatedAt: new Date(),
  username: "exampleUsername",
  website: "exampleWebsite",
};
const CREATE_RESULT = {
  avatarUrl: "exampleAvatarUrl",
  bio: "exampleBio",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  employeeDismissalAt: new Date(),
  employeeEmploymentAt: new Date(),
  firstName: "exampleFirstName",
  fullName: "exampleFullName",
  fullRegistered: "true",
  hiredDate: new Date(),
  id: "exampleId",
  isAdmin: "true",
  isBarber: "true",
  isEmployee: "true",
  jobTitle: "exampleJobTitle",
  lastName: "exampleLastName",
  loyaltyPoints: 42,
  phone: "examplePhone",
  roles: "exampleRoles",
  updatedAt: new Date(),
  username: "exampleUsername",
  website: "exampleWebsite",
};
const FIND_MANY_RESULT = [
  {
    avatarUrl: "exampleAvatarUrl",
    bio: "exampleBio",
    createdAt: new Date(),
    dateOfBirth: new Date(),
    deletedAt: new Date(),
    email: "exampleEmail",
    employeeDismissalAt: new Date(),
    employeeEmploymentAt: new Date(),
    firstName: "exampleFirstName",
    fullName: "exampleFullName",
    fullRegistered: "true",
    hiredDate: new Date(),
    id: "exampleId",
    isAdmin: "true",
    isBarber: "true",
    isEmployee: "true",
    jobTitle: "exampleJobTitle",
    lastName: "exampleLastName",
    loyaltyPoints: 42,
    phone: "examplePhone",
    roles: "exampleRoles",
    updatedAt: new Date(),
    username: "exampleUsername",
    website: "exampleWebsite",
  },
];
const FIND_ONE_RESULT = {
  avatarUrl: "exampleAvatarUrl",
  bio: "exampleBio",
  createdAt: new Date(),
  dateOfBirth: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  employeeDismissalAt: new Date(),
  employeeEmploymentAt: new Date(),
  firstName: "exampleFirstName",
  fullName: "exampleFullName",
  fullRegistered: "true",
  hiredDate: new Date(),
  id: "exampleId",
  isAdmin: "true",
  isBarber: "true",
  isEmployee: "true",
  jobTitle: "exampleJobTitle",
  lastName: "exampleLastName",
  loyaltyPoints: 42,
  phone: "examplePhone",
  roles: "exampleRoles",
  updatedAt: new Date(),
  username: "exampleUsername",
  website: "exampleWebsite",
};

const service = {
  createUserProfile() {
    return CREATE_RESULT;
  },
  userProfiles: () => FIND_MANY_RESULT,
  userProfile: ({ where }: { where: { id: string } }) => {
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

describe("UserProfile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserProfileService,
          useValue: service,
        },
      ],
      controllers: [UserProfileController],
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

  test("POST /userProfiles", async () => {
    await request(app.getHttpServer())
      .post("/userProfiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        employeeDismissalAt: CREATE_RESULT.employeeDismissalAt.toISOString(),
        employeeEmploymentAt: CREATE_RESULT.employeeEmploymentAt.toISOString(),
        hiredDate: CREATE_RESULT.hiredDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userProfiles", async () => {
    await request(app.getHttpServer())
      .get("/userProfiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          employeeDismissalAt:
            FIND_MANY_RESULT[0].employeeDismissalAt.toISOString(),
          employeeEmploymentAt:
            FIND_MANY_RESULT[0].employeeEmploymentAt.toISOString(),
          hiredDate: FIND_MANY_RESULT[0].hiredDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userProfiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userProfiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userProfiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userProfiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        employeeDismissalAt: FIND_ONE_RESULT.employeeDismissalAt.toISOString(),
        employeeEmploymentAt:
          FIND_ONE_RESULT.employeeEmploymentAt.toISOString(),
        hiredDate: FIND_ONE_RESULT.hiredDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /userProfiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userProfiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        employeeDismissalAt: CREATE_RESULT.employeeDismissalAt.toISOString(),
        employeeEmploymentAt: CREATE_RESULT.employeeEmploymentAt.toISOString(),
        hiredDate: CREATE_RESULT.hiredDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userProfiles")
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
