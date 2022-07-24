import prisma from "../config/database";
import { testService } from "../types/genericTypes";

export async function createTest(test: testService) {
  return await prisma.tests.create({ data: test });
}

const testRepository = { createTest };

export default testRepository;
