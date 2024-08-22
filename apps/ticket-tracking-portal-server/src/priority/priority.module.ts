import { Module } from "@nestjs/common";
import { PriorityModuleBase } from "./base/priority.module.base";
import { PriorityService } from "./priority.service";
import { PriorityController } from "./priority.controller";
import { PriorityResolver } from "./priority.resolver";

@Module({
  imports: [PriorityModuleBase],
  controllers: [PriorityController],
  providers: [PriorityService, PriorityResolver],
  exports: [PriorityService],
})
export class PriorityModule {}
