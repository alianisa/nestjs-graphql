import * as graphql from "@nestjs/graphql";
import { TemplateResolverBase } from "./base/template.resolver.base";
import { Template } from "./base/Template";
import { TemplateService } from "./template.service";

@graphql.Resolver(() => Template)
export class TemplateResolver extends TemplateResolverBase {
  constructor(protected readonly service: TemplateService) {
    super(service);
  }
}
