import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
  console.log(`Your server is started on http://localhost:3000`);
})();
