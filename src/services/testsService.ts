import testRepository from "../repositories/testsRepository";
import { testService } from "../types/genericTypes";

export async function createTest(test: testService) {
    await testRepository.createTest(test);
}

const testsService = { createTest };

export default testsService;
