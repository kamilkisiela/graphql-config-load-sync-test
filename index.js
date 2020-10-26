const { loadConfigSync } = require("graphql-config");
const assert = require("assert");

const config = loadConfigSync({});
const project = config.getDefault();
const schema = project.getSchemaSync();

assert.strictEqual(schema.getQueryType().name, "Query");

console.log('OK')
