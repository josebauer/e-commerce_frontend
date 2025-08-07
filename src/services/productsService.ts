import api from "./api";

export type ProductsType = {
  id: number
  name: string
  brand: string
  description: string
  price: number
  stock: number
  isActive: boolean
}