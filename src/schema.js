const typeDefs = `#graphql

  type Student {
    id: ID!
    name: String!
    email: String!

    # Provided relationship example
    courses: [Course!]!
  }

  # TODO: Extend this type with any additional fields/requirements.
  type Course {
    id: ID!
    name: String!
    instructor: String!
  }

  type Query {
    students: [Student!]!
  }

  input AddStudentInput {
    name: String!
    email: String!
  }

  type Mutation {
    addStudent(input: AddStudentInput!): Student!
  }
`;

export default typeDefs;
