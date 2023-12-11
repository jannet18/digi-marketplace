import { Express } from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next.utils";

const app = Express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  // start up CMS
  const payload = await getPayloadClient({
    initOptions: {
      Express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin Url ${cms.getAdminUrl()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info("Next.js started");
    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
