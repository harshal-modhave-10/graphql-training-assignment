# GraphQL Student Course Management System

This repository provides a starter GraphQL project for the GraphQL training assignment.

The project contains a basic GraphQL server, mock data, a `Student` schema, a sample relationship, a student retrieval query, and an `addStudent` mutation.

Trainees are expected to extend this starter project by implementing the remaining schemas, relationships, queries, resolvers, and mutations as described in the assignment.

---

## Prerequisites

Before starting the assignment, make sure the following is installed on your machine:

- Node.js
- npm

Node.js should already be installed on your machine before setting up this project.

To verify the installation, open a terminal and run:

```bash
node --version
```

and:

```bash
npm --version
```

If both commands return a version number, the required environment is ready.

---

## Getting Started

### 1. Fork and clone the repository

First, fork the provided GitHub repository to your GitHub account.

After forking the repository, clone your forked repository to your local machine:

```bash
git clone <YOUR_FORKED_REPOSITORY_URL>
```
Navigate to the project directory:

```
cd graphql-training-assignment
```
---

### 2. Install dependencies

Run:

```bash
npm install
```

This will install all dependencies defined in `package.json`.

The `node_modules` directory will be created automatically. It is not included in the Git repository.

---

### 3. Start the GraphQL server

Run:

```bash
npm start
```

If the project uses the Node.js entry point directly, you can also start the server using:

```bash
node src/index.js
```

After the server starts successfully, you should see a message indicating that the GraphQL server is running.

---

## Open GraphiQL

Open the GraphQL endpoint in your browser:

```text
http://localhost:4000/graphql
```

GraphiQL will allow you to:

- Explore the GraphQL schema.
- Write and execute queries.
- Write and execute mutations.
- View query results.
- Use GraphQL variables.
- Test relationships and nested queries.

---

## Starter Project

The starter project currently provides:

- Mock student, course, and enrollment data.
- `Student` schema.
- Basic `Course` type required for the provided relationship.
- One `Student → Course` relationship.
- `students` query.
- `addStudent` mutation.
- Resolver for retrieving students.
- Resolver for adding a student.
- Resolver for the provided Student → Course relationship.

The remaining implementation is part of the assignment.

---

## Verify the Starter Project

Before making any changes, verify that the starter project is working correctly.

### Retrieve students

Run the following query in GraphiQL:

```graphql
query {
  students {
    id
    name
    email
  }
}
```

You should receive the existing students from the mock data.

---

### Retrieve students with their courses

The starter project also provides one relationship between `Student` and `Course`.

Run:

```graphql
query {
  students {
    id
    name
    email
    courses {
      id
      name
      instructor
    }
  }
}
```

This query demonstrates how GraphQL can retrieve related data through a nested query.

---

### Add a student

The starter project provides an `addStudent` mutation.

Run:

```graphql
mutation {
  addStudent(input: { name: "Rahul Deshmukh", email: "rahul@example.com" }) {
    id
    name
    email
  }
}
```

After successfully executing the mutation, run the `students` query again to verify that the new student has been added.

---

## Assignment Tasks

After verifying the starter project, complete the following tasks as part of the assignment.

### Task 1: Extend the GraphQL Schema

Define the remaining schemas required for the Student Course Management System.

You should define the appropriate fields and types for:

- Course
- Enrollment
- Other required input types

Use the existing `Student` schema as a reference.

---

### Task 2: Define GraphQL Queries

Add the queries required to retrieve:

- A student by ID.
- All courses.
- A course by ID.
- Enrollment information.
- Other relevant data required by the assignment.

---

### Task 3: Implement Relationships

Implement the required relationships between:

- Student and Course.
- Course and Student.
- Enrollment and Student.
- Enrollment and Course.

Add the appropriate relationship fields to the schema and implement the corresponding resolvers.

---

### Task 4: Implement Resolvers

Implement the resolvers required for the queries and relationships defined in the schema.

Use the provided mock data to retrieve and resolve the requested information.

---

### Task 5: Implement Mutations

Implement the remaining mutations required by the assignment.

After executing each mutation, use a GraphQL query to verify that the expected data has been added or updated.

---

### Task 6: Use Variables

Use GraphQL variables while executing at least one query and/or mutation.

For example:

```graphql
query GetStudentById($studentId: ID!) {
  studentById(id: $studentId) {
    id
    name
    email
  }
}
```

Provide the variable separately in GraphiQL:

```json
{
  "studentId": "S1"
}
```

---

### Task 7: Use Fragments

Create and use at least one GraphQL fragment to retrieve commonly requested fields.

Example:

```graphql
fragment StudentDetails on Student {
  id
  name
  email
}
```

Use the fragment in an appropriate query.

---

### Optional: Advanced GraphQL Concepts

You may optionally implement and demonstrate any of the following:

- `@oneOf` input objects
- Subscription
- `@defer`
- `@stream`

These concepts are optional and are not required for completing the core assignment.

---

## Project Structure

The project is organized approximately as follows:

```text
graphql-training-assignment/
│
├── src/
│   ├── index.js
│   ├── schema.js
│   ├── resolvers.js
│   └── data.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### File Description

**`src/index.js`**

Contains the GraphQL server setup and starts the server.

**`src/schema.js`**

Contains the GraphQL type definitions.

**`src/resolvers.js`**

Contains the resolver functions responsible for retrieving and modifying data.

**`src/data.js`**

Contains the mock data used by the GraphQL server.

---

## Important Notes

- The project uses mock/in-memory data. No external database is required.
- Do not commit the `node_modules` directory.
- Run `npm install` after cloning the repository to install the required dependencies.
- Use GraphiQL to construct and test your GraphQL queries and mutations.
- Keep your implementation within the provided project structure unless otherwise instructed.
- Verify that the GraphQL server starts successfully after making your changes.
- Verify all queries and mutations through GraphiQL before submitting the assignment.

---

## Submission

Follow the submission requirements provided in the GraphQL training assignment document.

### Pull Request Submission

Fork the provided GitHub repository and clone your forked repository to your local machine.

Create a separate branch for the assignment using the following naming convention:

```text
<employee_id>_<name>

For example:
12345_harshal_modhave
```

Complete and test the assignment locally, then commit and push your changes to your forked repository.

Create a Pull Request from your assignment branch to the main branch of the provided training repository.

The Pull Request should follow the following format:
```
<employee_id>_<name> → main
```
In the Pull Request description, provide:

- Employee ID and name.
- Brief summary of the implementation.
- Tasks completed.
- Any assumptions or limitations, if applicable.
- Confirmation that the implementation was tested locally.

Before submitting the Pull Request, make sure that:

- All required tasks have been completed.
- The GraphQL server starts successfully.
- The required queries and mutations execute successfully.
- Relationships return the expected data.
- The Pull Request is created from the correct assignment branch to the **main** branch.
