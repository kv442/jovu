import * as graphql from "@nestjs/graphql";
import { PriorityResolverBase } from "./base/priority.resolver.base";
import { Priority } from "./base/Priority";
import { PriorityService } from "./priority.service";

@graphql.Resolver(() => Priority)
export class PriorityResolver extends PriorityResolverBase {
  constructor(protected readonly service: PriorityService) {
    super(service);
  }
}
