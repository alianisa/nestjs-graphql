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
import { DiscountController } from "../discount.controller";
import { DiscountService } from "../discount.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  description: "exampleDescription",
  discountType: "exampleDiscountType",
  endDate: new Date(),
  id: "exampleId",
  isActive: "true",
  maxDiscountAmount: 42.424242424,
  minOrderAmount: 42.424242424,
  name: "exampleName",
  serviceCategories: "exampleServiceCategories",
  startDate: new Date(),
  updatedAt: new Date(),
  usageLimit: 42.424242424,
  userLimit: 42.424242424,
  value: 42.424242424,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  description: "exampleDescription",
  discountType: "exampleDiscountType",
  endDate: new Date(),
  id: "exampleId",
  isActive: "true",
  maxDiscountAmount: 42.424242424,
  minOrderAmount: 42.424242424,
  name: "exampleName",
  serviceCategories: "exampleServiceCategories",
  startDate: new Date(),
  updatedAt: new Date(),
  usageLimit: 42.424242424,
  userLimit: 42.424242424,
  value: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    description: "exampleDescription",
    discountType: "exampleDiscountType",
    endDate: new Date(),
    id: "exampleId",
    isActive: "true",
    maxDiscountAmount: 42.424242424,
    minOrderAmount: 42.424242424,
    name: "exampleName",
    serviceCategories: "exampleServiceCategories",
    startDate: new Date(),
    updatedAt: new Date(),
    usageLimit: 42.424242424,
    userLimit: 42.424242424,
    value: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  description: "exampleDescription",
  discountType: "exampleDiscountType",
  endDate: new Date(),
  id: "exampleId",
  isActive: "true",
  maxDiscountAmount: 42.424242424,
  minOrderAmount: 42.424242424,
  name: "exampleName",
  serviceCategories: "exampleServiceCategories",
  startDate: new Date(),
  updatedAt: new Date(),
  usageLimit: 42.424242424,
  userLimit: 42.424242424,
  value: 42.424242424,
};

const service = {
  createDiscount() {
    return CREATE_RESULT;
  },
  discounts: () => FIND_MANY_RESULT,
  discount: ({ where }: { where: { id: string } }) => {
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

describe("Discount", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DiscountService,
          useValue: service,
        },
      ],
      controllers: [DiscountController],
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

  test("POST /discounts", async () => {
    await request(app.getHttpServer())
      .post("/discounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /discounts", async () => {
    await request(app.getHttpServer())
      .get("/discounts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /discounts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discounts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /discounts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discounts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /discounts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/discounts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/discounts")
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
