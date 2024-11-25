import { Categoria } from "./categoria";

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: Categoria;
  }
  