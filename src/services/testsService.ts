import testRepository from "../repositories/testsRepository";
import { testService } from "../types/genericTypes";

export async function createTest(test: testService) {
    await testRepository.createTest(test);
}

export async function getTestsByDiscipline(){
    const tests = await testRepository.getTestsByDiscipline();
    return tests;
}

const testsService = { createTest, getTestsByDiscipline };

export default testsService;
