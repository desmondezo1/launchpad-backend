import { Router } from "express";
import { ProjectController } from "./controllers/project.controller";
import { AppRoute } from "./app-route";
import { AdminController } from "./controllers/admin.controller";
export class AppRouting {
  constructor(private route: Router) {
    this.route = route;
    this.configure();
  }
  public configure() {
    // Add the routing classes.    
    this.addRoute(new AdminController());
    this.addRoute(new ProjectController());
  }

  private addRoute(appRoute: AppRoute) {
    this.route.use(appRoute.route, appRoute.router);
  }
}