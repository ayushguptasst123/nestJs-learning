import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "Hi there";
  }
  @Get("/bye12")
  getByeThere() {
    return "Bye there";
  }
}
