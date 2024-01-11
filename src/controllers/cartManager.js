import { promises as fs } from "fs";
import { nanoid } from "nanoid";

class CartManager {
  constructor() {
    this.path = "./src/models/carts.json";
  }

  // FUNCION PARA LEER EL ARCHIVO JSON
  async readCart() {
    try {
      const cart = await fs.readFile(this.path, "utf-8");
      return JSON.parse(cart);
    } catch (error) {
      console.log("Error al leer el archivo", error);
    }
  }
  // FUNCION PARA ESCRIBIR CARRITOS AL ARCHIVO JSON
  async writeCart(carts) {
    try {
      await fs.writeFile(this.path, JSON.stringify(carts, null, 2));
    } catch (error) {
      console.log("Error al escribir el archivo", error);
    }
  }

  // FUNCION PARA AGREGAR CARRITOS AL ARCHIVO JSON
  async addCart() {
    try {
      const oCart = await this.readCart();
      const id = nanoid();
      const carts = [{ id: id, products: [] }, ...oCart];
      await this.writeCart(carts);
      return "Carrito Añadido";
    } catch (error) {
      console.log("Error al escribir el archivo", error);
    }
  }
  // FUNCION PARA BUSCAR UN carrito POR ID
  async getCartById(id) {
    try {
      const arrayCart = await this.readFiles();
      const find = arrayCart.find((item) => item.id === id);

      if (!find) {
        console.log("producto no encontrado");
      } else {
        console.log("producto encontrado");
        return find;
      }
    } catch (error) {
      console.log("Error al leer el archivo", error);
    }
  }
}

export default CartManager;
