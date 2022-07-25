import prisma from "../config/database";
import { TestService } from "../types/genericTypes";

export async function createTest(test: TestService) {
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

export async function getTestsByTeacher() {
  const test = await prisma.teachers.findMany({
    select: {
      name: true,
      TeacherDiscipline: {
        select: {
          Disciplines: {
            select: { name: true, Terms: { select: { number: true } } },
          },
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
  });

  return test;
}

const testRepository = { createTest, getTestsByDiscipline, getTestsByTeacher };

export default testRepository;
