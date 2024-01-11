import { Router } from "express";
import ProductManager from "../controllers/productManager.js";

const product = new ProductManager();
const router = Router();

//agregar productos
router.post("/", async (req, res) => {
  const newProduct = req.body;
  res.send(await product.addProducts(newProduct));
});
//buscar productos por id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.send(await product.getProductById(id));
});
// traer los productos
router.get("/", async (req, res) => {
  res.send(await product.getProducts());
});
// delete productos
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  res.send(await product.deleteProduct(id));
});
//actualizar el producto
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const productUpdate = req.body;
  res.send(await product.updateProduct(id, productUpdate));
});

export default router;
