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
import { EmployeeDailyStatController } from "../employeeDailyStat.controller";
import { EmployeeDailyStatService } from "../employeeDailyStat.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  averageOrderAmount: 42.424242424,
  averageServiceTime: 42,
  avgServiceTimeChangePercent: 42.424242424,
  avgServiceTimeTrend: "exampleAvgServiceTimeTrend",
  bestServiceTime: new Date(),
  canceledOrders: 42,
  cardRevenue: 42.424242424,
  cashRevenue: 42.424242424,
  clientsChangePercent: 42.424242424,
  clientsTrend: "exampleClientsTrend",
  completedOrders: 42,
  createdAt: new Date(),
  dailyRating: 42.424242424,
  date: new Date(),
  efficiencyChangePercent: 42.424242424,
  efficiencyRate: 42.424242424,
  efficiencyTrend: "exampleEfficiencyTrend",
  firstOrderTime: new Date(),
  id: "exampleId",
  lastOrderTime: new Date(),
  monthToDateOrders: 42,
  monthToDateRevenue: 42.424242424,
  newClients: 42,
  offPeakOrders: 42,
  ordersChangePercent: 42.424242424,
  ordersCount: 42,
  ordersTrend: "exampleOrdersTrend",
  overtimeHours: 42.424242424,
  peakHoursOrders: 42,
  performanceScore: 42.424242424,
  prevMonthOrders: 42,
  prevMonthRevenue: 42.424242424,
  ratingChangePercent: 42.424242424,
  ratingTrend: "exampleRatingTrend",
  ratingsCount: 42,
  repeatClients: 42,
  revenue: 42.424242424,
  revenueChangePercent: 42.424242424,
  revenueTrend: "exampleRevenueTrend",
  scheduledHours: 42.424242424,
  servicesCount: 42,
  totalBreaksTime: 42,
  totalClients: 42,
  totalIdleTime: 42,
  totalWorkedHours: 42.424242424,
  updatedAt: new Date(),
  workTime: 42,
  worstServiceTime: new Date(),
};
const CREATE_RESULT = {
  averageOrderAmount: 42.424242424,
  averageServiceTime: 42,
  avgServiceTimeChangePercent: 42.424242424,
  avgServiceTimeTrend: "exampleAvgServiceTimeTrend",
  bestServiceTime: new Date(),
  canceledOrders: 42,
  cardRevenue: 42.424242424,
  cashRevenue: 42.424242424,
  clientsChangePercent: 42.424242424,
  clientsTrend: "exampleClientsTrend",
  completedOrders: 42,
  createdAt: new Date(),
  dailyRating: 42.424242424,
  date: new Date(),
  efficiencyChangePercent: 42.424242424,
  efficiencyRate: 42.424242424,
  efficiencyTrend: "exampleEfficiencyTrend",
  firstOrderTime: new Date(),
  id: "exampleId",
  lastOrderTime: new Date(),
  monthToDateOrders: 42,
  monthToDateRevenue: 42.424242424,
  newClients: 42,
  offPeakOrders: 42,
  ordersChangePercent: 42.424242424,
  ordersCount: 42,
  ordersTrend: "exampleOrdersTrend",
  overtimeHours: 42.424242424,
  peakHoursOrders: 42,
  performanceScore: 42.424242424,
  prevMonthOrders: 42,
  prevMonthRevenue: 42.424242424,
  ratingChangePercent: 42.424242424,
  ratingTrend: "exampleRatingTrend",
  ratingsCount: 42,
  repeatClients: 42,
  revenue: 42.424242424,
  revenueChangePercent: 42.424242424,
  revenueTrend: "exampleRevenueTrend",
  scheduledHours: 42.424242424,
  servicesCount: 42,
  totalBreaksTime: 42,
  totalClients: 42,
  totalIdleTime: 42,
  totalWorkedHours: 42.424242424,
  updatedAt: new Date(),
  workTime: 42,
  worstServiceTime: new Date(),
};
const FIND_MANY_RESULT = [
  {
    averageOrderAmount: 42.424242424,
    averageServiceTime: 42,
    avgServiceTimeChangePercent: 42.424242424,
    avgServiceTimeTrend: "exampleAvgServiceTimeTrend",
    bestServiceTime: new Date(),
    canceledOrders: 42,
    cardRevenue: 42.424242424,
    cashRevenue: 42.424242424,
    clientsChangePercent: 42.424242424,
    clientsTrend: "exampleClientsTrend",
    completedOrders: 42,
    createdAt: new Date(),
    dailyRating: 42.424242424,
    date: new Date(),
    efficiencyChangePercent: 42.424242424,
    efficiencyRate: 42.424242424,
    efficiencyTrend: "exampleEfficiencyTrend",
    firstOrderTime: new Date(),
    id: "exampleId",
    lastOrderTime: new Date(),
    monthToDateOrders: 42,
    monthToDateRevenue: 42.424242424,
    newClients: 42,
    offPeakOrders: 42,
    ordersChangePercent: 42.424242424,
    ordersCount: 42,
    ordersTrend: "exampleOrdersTrend",
    overtimeHours: 42.424242424,
    peakHoursOrders: 42,
    performanceScore: 42.424242424,
    prevMonthOrders: 42,
    prevMonthRevenue: 42.424242424,
    ratingChangePercent: 42.424242424,
    ratingTrend: "exampleRatingTrend",
    ratingsCount: 42,
    repeatClients: 42,
    revenue: 42.424242424,
    revenueChangePercent: 42.424242424,
    revenueTrend: "exampleRevenueTrend",
    scheduledHours: 42.424242424,
    servicesCount: 42,
    totalBreaksTime: 42,
    totalClients: 42,
    totalIdleTime: 42,
    totalWorkedHours: 42.424242424,
    updatedAt: new Date(),
    workTime: 42,
    worstServiceTime: new Date(),
  },
];
const FIND_ONE_RESULT = {
  averageOrderAmount: 42.424242424,
  averageServiceTime: 42,
  avgServiceTimeChangePercent: 42.424242424,
  avgServiceTimeTrend: "exampleAvgServiceTimeTrend",
  bestServiceTime: new Date(),
  canceledOrders: 42,
  cardRevenue: 42.424242424,
  cashRevenue: 42.424242424,
  clientsChangePercent: 42.424242424,
  clientsTrend: "exampleClientsTrend",
  completedOrders: 42,
  createdAt: new Date(),
  dailyRating: 42.424242424,
  date: new Date(),
  efficiencyChangePercent: 42.424242424,
  efficiencyRate: 42.424242424,
  efficiencyTrend: "exampleEfficiencyTrend",
  firstOrderTime: new Date(),
  id: "exampleId",
  lastOrderTime: new Date(),
  monthToDateOrders: 42,
  monthToDateRevenue: 42.424242424,
  newClients: 42,
  offPeakOrders: 42,
  ordersChangePercent: 42.424242424,
  ordersCount: 42,
  ordersTrend: "exampleOrdersTrend",
  overtimeHours: 42.424242424,
  peakHoursOrders: 42,
  performanceScore: 42.424242424,
  prevMonthOrders: 42,
  prevMonthRevenue: 42.424242424,
  ratingChangePercent: 42.424242424,
  ratingTrend: "exampleRatingTrend",
  ratingsCount: 42,
  repeatClients: 42,
  revenue: 42.424242424,
  revenueChangePercent: 42.424242424,
  revenueTrend: "exampleRevenueTrend",
  scheduledHours: 42.424242424,
  servicesCount: 42,
  totalBreaksTime: 42,
  totalClients: 42,
  totalIdleTime: 42,
  totalWorkedHours: 42.424242424,
  updatedAt: new Date(),
  workTime: 42,
  worstServiceTime: new Date(),
};

const service = {
  createEmployeeDailyStat() {
    return CREATE_RESULT;
  },
  employeeDailyStats: () => FIND_MANY_RESULT,
  employeeDailyStat: ({ where }: { where: { id: string } }) => {
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

describe("EmployeeDailyStat", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmployeeDailyStatService,
          useValue: service,
        },
      ],
      controllers: [EmployeeDailyStatController],
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

  test("POST /employeeDailyStats", async () => {
    await request(app.getHttpServer())
      .post("/employeeDailyStats")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        bestServiceTime: CREATE_RESULT.bestServiceTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        firstOrderTime: CREATE_RESULT.firstOrderTime.toISOString(),
        lastOrderTime: CREATE_RESULT.lastOrderTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        worstServiceTime: CREATE_RESULT.worstServiceTime.toISOString(),
      });
  });

  test("GET /employeeDailyStats", async () => {
    await request(app.getHttpServer())
      .get("/employeeDailyStats")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          bestServiceTime: FIND_MANY_RESULT[0].bestServiceTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          firstOrderTime: FIND_MANY_RESULT[0].firstOrderTime.toISOString(),
          lastOrderTime: FIND_MANY_RESULT[0].lastOrderTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          worstServiceTime: FIND_MANY_RESULT[0].worstServiceTime.toISOString(),
        },
      ]);
  });

  test("GET /employeeDailyStats/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeDailyStats"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employeeDailyStats/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employeeDailyStats"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        bestServiceTime: FIND_ONE_RESULT.bestServiceTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        firstOrderTime: FIND_ONE_RESULT.firstOrderTime.toISOString(),
        lastOrderTime: FIND_ONE_RESULT.lastOrderTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        worstServiceTime: FIND_ONE_RESULT.worstServiceTime.toISOString(),
      });
  });

  test("POST /employeeDailyStats existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employeeDailyStats")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        bestServiceTime: CREATE_RESULT.bestServiceTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        firstOrderTime: CREATE_RESULT.firstOrderTime.toISOString(),
        lastOrderTime: CREATE_RESULT.lastOrderTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        worstServiceTime: CREATE_RESULT.worstServiceTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/employeeDailyStats")
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
