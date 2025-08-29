import { ProductsType } from "@/services/productsService"
import SlideCards from "../common/slideCards/SlideCards";

type Props = {
  products: ProductsType[],
  title: string
}

export default function ProductSlideSection({ products, title }: Props) {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-red-600">{title}</h2>
      <SlideCards products={products} />
    </section>
  )
}