import "reflect-metadata";
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { AppDataSource } from "./config/ormconfig";
import cors from "cors";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { competitionRouter } from "./routes/competitionRoutes";

const app: Application = express();
const PORT: number = 8000;

(async (app) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
})(app);

(async () => {
  const initPostgres = async () => {
    await AppDataSource.initialize();
    console.info("\x1b[34m%s\x1b[0m", "=>   MariaDB connected!");
  };

  const port = parseInt(process.env.APP_PORT as string, 10) || 5432;

  try {
    await initPostgres();
    app.listen(port, () => {
      console.info(
        "\x1b[33m%s\x1b[0m",
        `=> 🚀 Server running on the port: ${port}`
      );
    });
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", `=> ❌  Server error: ${error}`);
  }
})();

app.use(cors());
app.use(express.json());


app.use("/competitions", competitionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
