// handlers.js
const { rest } = require("msw");

export const handlers = [
  rest.get("/foo", async (request, response, context) =>
    response(context.text("foo"))
  ),
];
