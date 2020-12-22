const express = require("express");
const { postgraphile } = require("postgraphile");

const myPlugin = require("./plugins/myPlugin");
var cors = require("cors");
const app = express();

app.use(cors());

app.use(
  postgraphile(
    process.env.DATABASE_URL ||
      "postgres://administrator:@localhost:5432/looper_db",
    "looper",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      appendPlugins: [myPlugin],
      exportGqlSchemaPath: "../looper/src/schema.graphql",
    }
  )
);

app.listen(process.env.PORT || 4000);
