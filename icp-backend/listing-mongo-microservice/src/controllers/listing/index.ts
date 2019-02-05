import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { FlightController } from "../listing/lib/controllers/crmController";
import "reflect-metadata";
class ListingMongoController {
  public flightController: FlightController = new FlightController();
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get("/healthz", (_, res) => {
      res.status(200).send("ok");
    });

    this.router.get(
      "/listFlights",
      (req: Request, res: Response, next: NextFunction) => {
        next();
      },
      this.flightController.getFlights
    );

    this.router.post(
      "/listFlights",
      (req: Request, res: Response, next: NextFunction) => {
        next();
      },
      this.flightController.addNewFlight
    );

    this.router.post(
      "/searchFlights",
      (req: Request, res: Response, next: NextFunction) => {
        next();
      },
      this.flightController.searchFlights
    );

    this.router.get(
      "/listFlights/:ID",
      (_, res: Response, next: NextFunction) => {
        next();
      },
      this.flightController.getFlightById
    );

    this.router.put(
      "/listFlights/:ID",
      (_, res: Response, next: NextFunction) => {
        next();
      },
      this.flightController.updateFlight
    );

    this.router.delete(
      "/listFlights/:ID",
      (_, res: Response, next: NextFunction) => {
        next();
      },
      this.flightController.deleteFlight
    );
  }
}

export default new ListingMongoController().router;
