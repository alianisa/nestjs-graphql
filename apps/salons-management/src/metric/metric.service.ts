import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetricServiceBase } from "./base/metric.service.base";

@Injectable()
export class MetricService extends MetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
