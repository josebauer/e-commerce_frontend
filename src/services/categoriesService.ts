import api from "./api";
import { ProductsType } from "./productsService";

export type CategoryType = {
  id: number
  name: string
  products?: ProductsType
}

const categoriesService = {
  getCategories: async () => {
    const res = await api.get("/categories").catch((error) => {
      return error.response
    })

    return res.data
  },

  getProducts: async (id: number) => {
    const res = await api.get(`/categories/${id}`).catch((error) => {
      return error.response
    })

    return res
  }
}

export default categoriesService