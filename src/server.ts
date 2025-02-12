import "reflect-metadata"
import app from "./app";
import { config } from "./config/env";
import { logger } from "./config/logger";
import { AppDataSource } from "./database/database";

const PORT = config.PORT || 3000;
async function main() {
  try {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main()