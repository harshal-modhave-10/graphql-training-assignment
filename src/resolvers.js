import { students, courses, enrollments } from "./data.js";

const resolvers = {
  Query: {
    students: () => students,
  },

  Student: {
    courses: (student) => {
      return enrollments
        .filter((enrollment) => enrollment.studentId === student.id)
        .map((enrollment) =>
          courses.find((course) => course.id === enrollment.courseId),
        );
    },
  },

  Mutation: {
    addStudent: (_, { input }) => {
      const newStudent = {
        id: `S${students.length + 1}`,
        name: input.name,
        email: input.email,
      };

      students.push(newStudent);

      return newStudent;
    },
  },

  // TODO: Add remaining query resolvers.
  // TODO: Add remaining relationship resolvers.
  // TODO: Add remaining mutation resolvers.
};

export default resolvers;
