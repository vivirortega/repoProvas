import prisma from "../config/database";
import { testService } from "../types/genericTypes";

export async function createTest(test: testService) {
  return await prisma.tests.create({ data: test });
}

export async function getTestsByDiscipline() {
  const test = await prisma.terms.findMany({
    select: {
      number: true,
      Disciplines: {
        select: {
          name: true,
          TeacherDiscipline: {
            select: {
              Teachers: { select: { name: true } },
              tests: {
                select: {
                  name: true,
                  pdfUrl: true,
                  Categories: { select: { name: true } },
                },
              },
            },
          },
        },
      },
    },
  });

  return test;
}

const testRepository = { createTest, getTestsByDiscipline };

export default testRepository;
