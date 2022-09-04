import fs from "fs";

import { queryType, stringArg, list, objectType } from "nexus";

// file contains  generated fake data
const users = fs.readFileSync("./data/users.json", "utf-8");

const User = objectType({
  name: "User",
  definition(t) {
    t.string("id"), t.string("name"), t.int("age");
  },
});

export const Query = queryType({
  definition(t) {
    t.string("hello", {
      args: { name: stringArg() },
      resolve: (_, { name }) => `Hello ${name || "World"}!`,
    }),
      t.field("users", {
        type: list(User),
        resolve: () => JSON.parse(users),
      });
  },
});
