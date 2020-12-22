// const db = require("./db/connection");
// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLSchema,
//   GraphQLList,
//   GraphQLNonNull,
// } = require("graphql");

// const RegionType = new GraphQLObjectType({
//   name: "RegionType",
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//   }),
// });

// const ScanType = new GraphQLObjectType({
//   name: "ScanType",
//   fields: () => ({
//     id: { type: GraphQLString },
//     created_at: { type: GraphQLString },
//   }),
// });

// const PlatformType = new GraphQLObjectType({
//   name: "PlatformType",
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//   }),
// });

// const SpotStatisticType = new GraphQLObjectType({
//   name: "SpotStatisticsType",
//   fields: () => ({
//     id: { type: GraphQLString },
//     platform_name: { type: GraphQLString },
//   }),
// });

// //Root query
// const RootQuery = new GraphQLObjectType({
//   name: "Query",
//   fields: {
//     // REGIONS
//     regionById: {
//       type: RegionType,
//       args: {
//         id: { type: GraphQLString },
//       },
//       resolve(root, args) {
//         return db.conn
//           .one(`SELECT * FROM looper.regions WHERE id='${args.id}'`)
//           .then((data) => data);
//       },
//     },
//     allRegions: {
//       type: new GraphQLList(RegionType),
//       resolve(root, args) {
//         return db.conn
//           .manyOrNone("SELECT * FROM looper.regions")
//           .then((data) => data);
//       },
//     },
//     // SCANS
//     scanById: {
//       type: ScanType,
//       args: {
//         id: { type: GraphQLString },
//       },
//       resolve(root, args) {
//         return db.conn
//           .one(`SELECT * FROM looper.scans WHERE id='${args.id}'`)
//           .then((data) => data);
//       },
//     },
//     allScans: {
//       type: new GraphQLList(RegionType),
//       resolve(root, args) {
//         return db.conn
//           .manyOrNone("SELECT * FROM looper.scans")
//           .then((data) => data);
//       },
//     },
//     // PLATFORMS
//     platformById: {
//       type: PlatformType,
//       args: {
//         id: { type: GraphQLString },
//       },
//       resolve(root, args) {
//         return db.conn
//           .one(`SELECT * FROM looper.platforms WHERE id='${args.id}'`)
//           .then((data) => data);
//       },
//     },
//     allPlatforms: {
//       type: new GraphQLList(RegionType),
//       resolve(root, args) {
//         return db.conn
//           .manyOrNone("SELECT * FROM looper.platforms")
//           .then((data) => data);
//       },
//     },
//     //SPOT STATISTICS
//     allSpotStatistics: {
//       type: new GraphQLList(SpotStatisticType),
//       resolve(root, args) {
//         return db.conn
//           .manyOrNone("SELECT * FROM looper.spot_statistics")
//           .then((data) => data);
//       },
//     },
//   },
// });
// //Mutation
// const mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     insertToSpotStatistics: {
//       type: GraphQLList(SpotStatisticType),
//       args: {
//         scan_id: { type: GraphQLString },
//       },
//       resolve(root, args) {
//         return db.conn
//           .manyOrNone(
//             `SELECT * FROM insertDataToSpotStatistics('${args.scan_id}')`
//           )
//           .then((data) => data);
//       },
//     },
//   },
// });
// module.exports = new GraphQLSchema({
//   query: RootQuery,
//   mutation: mutation,
// });
