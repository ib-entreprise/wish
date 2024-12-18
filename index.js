
import router from "./router/router.js";
import {
  getAllWishes,
  getWishById,
  addWish,
  updateWish,
  deleteWish,
} from "./controller/controller.js";

import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");


app.use("/", router);

router.get("/wish", getAllWishes); 
router.get("/wish/get/:id", getWishById); 
router.post("/wish/send", addWish); 
router.put("/wish/:id", updateWish); 
router.delete("/wish/delete/:id", deleteWish); 

app.listen(3000, () => {
  console.log(`Serveur démarré `);
});