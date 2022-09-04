import { fileURLToPath } from "url";
import path from "path";

import { makeSchema } from "nexus";
import { Query } from "./graphql.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: __dirname + "/schema/schema.graphql",
  },
});
