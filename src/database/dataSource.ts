import { AppDataSource } from "../config/ormconfig";

export async function appDataSource(app) {
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
}
