import { Router } from "express";
import fs from "fs";
import {
  getAllWishes,
  getWishById,
  addWish,
  updateWish,
  deleteWish,
} from "../controller/controller.js";
import path from "path";
import bodyParser from "body-parser";
const router = Router();


router.get("/", (req, res) => {
  res.render("home");
});
 
export default router;
