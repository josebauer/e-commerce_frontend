import Banner from "@/components/banner/Banner";
import { productsService } from "@/services/productsService";
import ProductSlideSection from "@/components/productSlideSection/ProductSlideSection";

export default async function Home() {
  const newProducts = await productsService.getNewestProducts()
  const allProducts = await productsService.getProducts()

  return (
    <main>
      <Banner />
      <ProductSlideSection products={newProducts} title="Novidades" />
      <ProductSlideSection products={allProducts} title="Todos os produtos" />
    </main>
  )
}
