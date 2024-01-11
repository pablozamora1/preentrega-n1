import { Router } from "express";
import cartManager from "../controllers/cartManager.js";

const router = Router();
const cart = new cartManager();

//agregar productos
router.post("/", async (req, res) => {
  res.send(await cart.addCart());
});

router.get("/", async (req, res) => {
  res.send(await cart.readCart());
});

router.get("/:id", async (req, res) => {
  res.send(await cart.getCartById(req.params.id));
});
export default router;
