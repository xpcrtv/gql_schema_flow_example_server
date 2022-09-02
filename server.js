import { createServer } from "@graphql-yoga/node";

import fs from "fs";

// file contains  generated fake data
const users = fs.readFileSync("./data/users.json", "utf-8");

const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
        users: [User!]!
      }

      type User {
        id: String!
        age: Int!
        name: String!
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello from Yoga!",
        users: () => JSON.parse(users),
      },
    },
  },
});

server.start();
