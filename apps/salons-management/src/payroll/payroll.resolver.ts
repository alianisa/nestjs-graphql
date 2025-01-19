import * as graphql from "@nestjs/graphql";
import { PayrollResolverBase } from "./base/payroll.resolver.base";
import { Payroll } from "./base/Payroll";
import { PayrollService } from "./payroll.service";

@graphql.Resolver(() => Payroll)
export class PayrollResolver extends PayrollResolverBase {
  constructor(protected readonly service: PayrollService) {
    super(service);
  }
}
