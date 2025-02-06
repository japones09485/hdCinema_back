import app from "./app";
import { config } from "./config/env";
import { logger } from "./config/logger";

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
});
