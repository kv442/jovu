import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PriorityServiceBase } from "./base/priority.service.base";

@Injectable()
export class PriorityService extends PriorityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
