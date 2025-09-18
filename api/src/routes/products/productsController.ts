import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("The list of products");
}

export function createProduct(req: Request, res: Response) {
  res.send("New product created");
}

export function getProductById(req: Request, res: Response) {
  res.send("A product");
}

export function updateProduct(req: Request, res: Response) {
  res.send("Update Product");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("Delete Product");
}
