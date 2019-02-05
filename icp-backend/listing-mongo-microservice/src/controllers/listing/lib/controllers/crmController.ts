import * as mongoose from "mongoose";
import { FlightSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Flight = mongoose.model("Flight", FlightSchema);
export class FlightController {
  public addNewFlight(req: Request, res: Response) {
    res.setHeader("Content-Type", "application/json");
    let newFlight = new Flight(req.body);
    newFlight.save((err, flight) => {
      if (err) {
        res.status(404).json({ err });
        return;
      }
      res.json(flight);
    });
  }
  public getFlights(req: Request, res: Response) {
    res.setHeader("Content-Type", "application/json");
    Flight.find({}, (err, flight) => {
      if (err) {
        res.status(404).json({ err });
        return;
      } else {
        res.status(200).send(flight);
      }
    });
  }
  public searchFlights(req: Request, res: Response) {
    res.setHeader("Content-Type", "application/json");
    let query = {
      $and:[{
        'Year': req.body.Year,
        'Month': req.body.Month,
        'DayofMonth': req.body.DayOfMonth,
        'Origin': req.body.origin,
        'Dest': req.body.dest
      }]
    };
    Flight.find( query , (err, flight) => {
      if (err) {
        res.status(404).json({ err });
        return;
      } else {
        res.status(200).send(flight);
      }
    });
  }
  public getFlightById(req: Request, res: Response) {
    res.setHeader("Content-Type", "application/json");
    Flight.findById(req.params.ID, (err, flight) => {
      if (err) {
        res.status(404).json({ err });
        return;
      } else {
        res.status(200).send(flight);
      }
    });
  }
  public updateFlight(req: Request, res: Response) {
    res.setHeader("Content-Type", "application/json");
    Flight.findOneAndUpdate(
      { _id: req.params.ID },
      req.body,
      { new: true },
      (err, flight) => {
        if (err) {
          res.status(404).json({ err });
          return;
        }
        res.json(flight);
      }
    );
  }

  public deleteFlight(req: Request, res: Response) {
    res.setHeader("Content-Type", "application/json");
    Flight.deleteOne({ _id: req.params.ID }, err => {
      if (err) {
        res.status(404).json({ err });
        return;
      }
      res.json({ message: "success" });
    });
  }
}
