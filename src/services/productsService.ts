import api from "./api";

export type ProductsType = {
  id: number
  name: string
  brand: string
  description: string
  price: number
  stock: number
  isActive: boolean

  productImages?: { id: number, url: string }[]
}

export const productsService = {
  
  getProducts: async () => {
    const res = await api.get("/products").catch((error) => {
      return error.response
    })
    
    return res.data
  },

  getNewestProducts: async () => {
    const res = await api.get('/products/newest').catch((error) => {
      return error.response
    })

    return res.data
  },

  getProductById: async (id: number | string) => {
    const res = await api.get(`/products/${id}`).catch((error) => {
      return error.response
    })

    return res.data
  }
}