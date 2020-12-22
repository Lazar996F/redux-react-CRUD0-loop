const { makeWrapResolversPlugin } = require("graphile-utils");

const logSomething = () => {
  return async (resolve, source, args, context, resolveInfo) => {
    const result = await resolve();
    console.log("AFTER>>>>>>>>>>>>");
    return result;
  };
};

const overwriteScrapeId = () => {
  return async (resolve, source, args, context, resolveInfo) => {
    args.input.scan.scrapeId = "overwriteTest";
    const result = await resolve();
    return result;
  };
};

module.exports = makeWrapResolversPlugin({
  Mutation: {
    createRegion: logSomething(),
    createScan: overwriteScrapeId(),
  },
});
