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
import { EmployeeStatController } from "../employeeStat.controller";
import { EmployeeStatService } from "../employeeStat.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  averageOrderAmount: 42.424242424,
  averageOrderDuration: 42,
  averageRating: 42.424242424,
  averageServiceTime: 42,
  canceledOrdersCount: 42.424242424,
  cardPaymentsAmount: 42.424242424,
  cashPaymentsAmount: 42.424242424,
  consistencyScore: 42.424242424,
  conversionRate: 42.424242424,
  createdAt: new Date(),
  currentMonthOrders: 42,
  currentMonthRevenue: 42.424242424,
  efficiencyChangePercent: 42.424242424,
  efficiencyRate: 42.424242424,
  efficiencyScore: 42.424242424,
  efficiencyTrend: "exampleEfficiencyTrend",
  executionRate: 42.424242424,
  fillRate: 42.424242424,
  id: "exampleId",
  lastOrderAt: new Date(),
  negativeReviews: 42,
  ordersChangePercent: 42.424242424,
  ordersGrowthRate: 42.424242424,
  ordersPerDay: 42.424242424,
  ordersTrend: "exampleOrdersTrend",
  overtimeCount: 42,
  peakHoursOrders: 42,
  peakPerformanceRate: 42.424242424,
  performanceChangePercent: 42.424242424,
  performanceScore: 42.424242424,
  performanceTrend: "examplePerformanceTrend",
  positiveReviews: 42,
  prevMonthEfficiencyRate: 42.424242424,
  prevMonthPerformanceScore: 42.424242424,
  prevMonthTotalOrders: 42,
  prevMonthTotalRevenue: 42.424242424,
  previousMonthOrders: 42,
  previousMonthRevenue: 42.424242424,
  qualityScore: 42.424242424,
  rating: 42.424242424,
  ratingChangePercent: 42.424242424,
  ratingTrend: "exampleRatingTrend",
  revenueChangePercent: 42.424242424,
  revenueGrowthRate: 42.424242424,
  revenuePerHour: 42.424242424,
  revenueTrend: "exampleRevenueTrend",
  servicesChangePercent: 42.424242424,
  servicesGrowthRate: 42.424242424,
  servicesPerHour: 42.424242424,
  servicesTrend: "exampleServicesTrend",
  totalDowntimeHours: 42.424242424,
  totalExecutionTime: 42.424242424,
  totalIdleTime: 42.424242424,
  totalOrders: 42,
  totalRatings: 42,
  totalRevenue: 42.424242424,
  totalServices: 42,
  totalWorkTime: 42,
  totalWorkedHours: 42.424242424,
  updatedAt: new Date(),
  utilizationRate: 42.424242424,
  workloadPercentage: 42.424242424,
  yearToDateOrders: 42,
  yearToDateRevenue: 42.424242424,
  yearToDateServices: 42,
};
const CREATE_RESULT = {
  averageOrderAmount: 42.424242424,
  averageOrderDuration: 42,
  averageRating: 42.424242424,
  averageServiceTime: 42,
  canceledOrdersCount: 42.424242424,
  cardPaymentsAmount: 42.424242424,
  cashPaymentsAmount: 42.424242424,
  consistencyScore: 42.424242424,
  conversionRate: 42.424242424,
  createdAt: new Date(),
  currentMonthOrders: 42,
  currentMonthRevenue: 42.424242424,
  efficiencyChangePercent: 42.424242424,
  efficiencyRate: 42.424242424,
  efficiencyScore: 42.424242424,
  efficiencyTrend: "exampleEfficiencyTrend",
  executionRate: 42.424242424,
  fillRate: 42.424242424,
  id: "exampleId",
  lastOrderAt: new Date(),
  negativeReviews: 42,
  ordersChangePercent: 42.424242424,
  ordersGrowthRate: 42.424242424,
  ordersPerDay: 42.424242424,
  ordersTrend: "exampleOrdersTrend",
  overtimeCount: 42,
  peakHoursOrders: 42,
  peakPerformanceRate: 42.424242424,
  performanceChangePercent: 42.424242424,
  performanceScore: 42.424242424,
  performanceTrend: "examplePerformanceTrend",
  positiveReviews: 42,
  prevMonthEfficiencyRate: 42.424242424,
  prevMonthPerformanceScore: 42.424242424,
  prevMonthTotalOrders: 42,
  prevMonthTotalRevenue: 42.424242424,
  previousMonthOrders: 42,
  previousMonthRevenue: 42.424242424,
  qualityScore: 42.424242424,
  rating: 42.424242424,
  ratingChangePercent: 42.424242424,
  ratingTrend: "exampleRatingTrend",
  revenueChangePercent: 42.424242424,
  revenueGrowthRate: 42.424242424,
  revenuePerHour: 42.424242424,
  revenueTrend: "exampleRevenueTrend",
  servicesChangePercent: 42.424242424,
  servicesGrowthRate: 42.424242424,
  servicesPerHour: 42.424242424,
  servicesTrend: "exampleServicesTrend",
  totalDowntimeHours: 42.424242424,
  totalExecutionTime: 42.424242424,
  totalIdleTime: 42.424242424,
  totalOrders: 42,
  totalRatings: 42,
  totalRevenue: 42.424242424,
  totalServices: 42,
  totalWorkTime: 42,
  totalWorkedHours: 42.424242424,
  updatedAt: new Date(),
  utilizationRate: 42.424242424,
  workloadPercentage: 42.424242424,
  yearToDateOrders: 42,
  yearToDateRevenue: 42.424242424,
  yearToDateServices: 42,
};
const FIND_MANY_RESULT = [
  {
    averageOrderAmount: 42.424242424,
    averageOrderDuration: 42,
    averageRating: 42.424242424,
    averageServiceTime: 42,
    canceledOrdersCount: 42.424242424,
    cardPaymentsAmount: 42.424242424,
    cashPaymentsAmount: 42.424242424,
    consistencyScore: 42.424242424,
    conversionRate: 42.424242424,
    createdAt: new Date(),
    currentMonthOrders: 42,
    currentMonthRevenue: 42.424242424,
    efficiencyChangePercent: 42.424242424,
    efficiencyRate: 42.424242424,
    efficiencyScore: 42.424242424,
    efficiencyTrend: "exampleEfficiencyTrend",
    executionRate: 42.424242424,
    fillRate: 42.424242424,
    id: "exampleId",
    lastOrderAt: new Date(),
    negativeReviews: 42,
    ordersChangePercent: 42.424242424,
    ordersGrowthRate: 42.424242424,
    ordersPerDay: 42.424242424,
    ordersTrend: "exampleOrdersTrend",
    overtimeCount: 42,
    peakHoursOrders: 42,
    peakPerformanceRate: 42.424242424,
    performanceChangePercent: 42.424242424,
    performanceScore: 42.424242424,
    performanceTrend: "examplePerformanceTrend",
    positiveReviews: 42,
    prevMonthEfficiencyRate: 42.424242424,
    prevMonthPerformanceScore: 42.424242424,
    prevMonthTotalOrders: 42,
    prevMonthTotalRevenue: 42.424242424,
    previousMonthOrders: 42,
    previousMonthRevenue: 42.424242424,
    qualityScore: 42.424242424,
    rating: 42.424242424,
    ratingChangePercent: 42.424242424,
    ratingTrend: "exampleRatingTrend",
    revenueChangePercent: 42.424242424,
    revenueGrowthRate: 42.424242424,
    revenuePerHour: 42.424242424,
    revenueTrend: "exampleRevenueTrend",
    servicesChangePercent: 42.424242424,
    servicesGrowthRate: 42.424242424,
    servicesPerHour: 42.424242424,
    servicesTrend: "exampleServicesTrend",
    totalDowntimeHours: 42.424242424,
    totalExecutionTime: 42.424242424,
    totalIdleTime: 42.424242424,
    totalOrders: 42,
    totalRatings: 42,
    totalRevenue: 42.424242424,
    totalServices: 42,
    totalWorkTime: 42,
    totalWorkedHours: 42.424242424,
    updatedAt: new Date(),
    utilizationRate: 42.424242424,
    workloadPercentage: 42.424242424,
    yearToDateOrders: 42,
    yearToDateRevenue: 42.424242424,
    yearToDateServices: 42,
  },
];
const FIND_ONE_RESULT = {
  averageOrderAmount: 42.424242424,
  averageOrderDuration: 42,
  averageRating: 42.424242424,
  averageServiceTime: 42,
  canceledOrdersCount: 42.424242424,
  cardPaymentsAmount: 42.424242424,
  cashPaymentsAmount: 42.424242424,
  consistencyScore: 42.424242424,
  conversionRate: 42.424242424,
  createdAt: new Date(),
  currentMonthOrders: 42,
  currentMonthRevenue: 42.424242424,
  efficiencyChangePercent: 42.424242424,
  efficiencyRate: 42.424242424,
  efficiencyScore: 42.424242424,
  efficiencyTrend: "exampleEfficiencyTrend",
  executionRate: 42.424242424,
  fillRate: 42.424242424,
  id: "exampleId",
  lastOrderAt: new Date(),
  negativeReviews: 42,
  ordersChangePercent: 42.424242424,
  ordersGrowthRate: 42.424242424,
  ordersPerDay: 42.424242424,
  ordersTrend: "exampleOrdersTrend",
  overtimeCount: 42,
  peakHoursOrders: 42,
  peakPerformanceRate: 42.424242424,
  performanceChangePercent: 42.424242424,
  performanceScore: 42.424242424,
  performanceTrend: "examplePerformanceTrend",
  positiveReviews: 42,
  prevMonthEfficiencyRate: 42.424242424,
  prevMonthPerformanceScore: 42.424242424,
  prevMonthTotalOrders: 42,
  prevMonthTotalRevenue: 42.424242424,
  previousMonthOrders: 42,
  previousMonthRevenue: 42.424242424,
  qualityScore: 42.424242424,
  rating: 42.424242424,
  ratingChangePercent: 42.424242424,
  ratingTrend: "exampleRatingTrend",
  revenueChangePercent: 42.424242424,
  revenueGrowthRate: 42.424242424,
  revenuePerHour: 42.424242424,
  revenueTrend: "exampleRevenueTrend",
  servicesChangePercent: 42.424242424,
  servicesGrowthRate: 42.424242424,
  servicesPerHour: 42.424242424,
  servicesTrend: "exampleServicesTrend",
  totalDowntimeHours: 42.424242424,
  totalExecutionTime: 42.424242424,
  totalIdleTime: 42.424242424,
  totalOrders: 42,
  totalRatings: 42,
  totalRevenue: 42.424242424,
  totalServices: 42,
  totalWorkTime: 42,
  totalWorkedHours: 42.424242424,
  updatedAt: new Date(),
  utilizationRate: 42.424242424,
  workloadPercentage: 42.424242424,
  yearToDateOrders: 42,
  yearToDateRevenue: 42.424242424,
  yearToDateServices: 42,
};

const service = {
  createEmployeeStat() {
    return CREATE_RESULT;
  },
  employeeStats: () => FIND_MANY_RESULT,
  employeeStat: ({ where }: { where: { id: string } }) => {
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

describe("EmployeeStat", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeStatService,
          useValue: service,
        },
      ],
      controllers: [EmployeeStatController],
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

  test("POST /employeeStats", async () => {
    await request(app.getHttpServer())
      .post("/employeeStats")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastOrderAt: CREATE_RESULT.lastOrderAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /employeeStats", async () => {
    await request(app.getHttpServer())
      .get("/employeeStats")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastOrderAt: FIND_MANY_RESULT[0].lastOrderAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /employeeStats/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeStats"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeStats/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeStats"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastOrderAt: FIND_ONE_RESULT.lastOrderAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /employeeStats existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeStats")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastOrderAt: CREATE_RESULT.lastOrderAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeStats")
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
