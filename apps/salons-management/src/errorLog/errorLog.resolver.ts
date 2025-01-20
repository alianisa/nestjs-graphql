import * as graphql from "@nestjs/graphql";
import { ErrorLogResolverBase } from "./base/errorLog.resolver.base";
import { ErrorLog } from "./base/ErrorLog";
import { ErrorLogService } from "./errorLog.service";

@graphql.Resolver(() => ErrorLog)
export class ErrorLogResolver extends ErrorLogResolverBase {
  constructor(protected readonly service: ErrorLogService) {
    super(service);
  }
}
