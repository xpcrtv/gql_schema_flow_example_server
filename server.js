import { createServer } from "@graphql-yoga/node";

import { schema } from "./makeSchema.js";

const server = createServer({
  schema,
});

server.start(() => `Server is running on http://localhost:4000`);
