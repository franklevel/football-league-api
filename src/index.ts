import "reflect-metadata";
import 'dotenv/config'
import express, { Application } from "express";
import cors from "cors";
import { server as gqlServer } from "@graphql/server";
import { appDataSource } from "@database/dataSource";
import { shield } from "./middleware/shield";

const app: Application = express();
const PORT: number = 8000;


gqlServer(app);
appDataSource(app)

app.use(cors());
app.use(express.json());

app.use("/graphql", shield)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
