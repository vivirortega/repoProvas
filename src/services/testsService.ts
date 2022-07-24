import testRepository from "../repositories/testsRepository";
import { testService } from "../types/genericTypes";

export async function createTest(test: testService) {
    await testRepository.createTest(test);
}

export async function getTestsByDiscipline(){
    const tests = await testRepository.getTestsByDiscipline();
    return tests;
}

export async function getTestsByTeacher(){
    const tests = await testRepository.getTestsByTeacher();
    return tests;
}

const testsService = { createTest, getTestsByDiscipline, getTestsByTeacher };

export default testsService;
