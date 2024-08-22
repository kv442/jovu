import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PriorityService } from "./priority.service";
import { PriorityControllerBase } from "./base/priority.controller.base";

@swagger.ApiTags("priorities")
@common.Controller("priorities")
export class PriorityController extends PriorityControllerBase {
  constructor(protected readonly service: PriorityService) {
    super(service);
  }
}
