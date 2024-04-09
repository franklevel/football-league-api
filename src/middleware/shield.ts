import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 8,
  message: "Too many requests for minutes, please try in 1 minute.",
});

export function shield(req: Request, res: Response, next: NextFunction) {
  if (req.body && req.body.query && req.body.query.includes("importLeague")) {
    console.log(`Validating request`);
    limiter(req, res, next);
  } else {
    next();
  }
}
