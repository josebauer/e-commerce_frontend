"use client"

import { ProductsType } from "@/services/productsService";
import { formatPrice } from "@/utils/formatPrice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import '@splidejs/react-splide/css';

interface Props {
  products: ProductsType[]
}

export default function SlideCards({ products }: Props) {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 4,
        perMove: 1,
        gap: "1rem",
        autoplay: true,
        interval: 4000,
        pauseOnHover: false,
        pagination: false,
        arrows: true,
        breakpoints: {
          1024: { perPage: 3 },
          700: { perPage: 2 },
        },
      }}
      className="mt-8"
    >
      {Array.isArray(products) && products.map((product) => (
        <SplideSlide key={product.id} className="group relative">
          <img
            alt={product.name}
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.productImages?.[0].url}`}
            className={`aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-80 
              ${product.stock === 0 ? 'opacity-50' : 'group-hover:opacity-75'}`}
          />
          {product.stock === 0 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              ESGOTADO
            </div>
          )}
          {product.stock <= 10 && product.stock > 1 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              ÚLTIMAS UNIDADES!
            </div>
          )}
          {product.stock === 1 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              ÚLTIMA UNIDADE!
            </div>
          )}
          <div className="mt-4 flex justify-between flex-col">
            <div>
              <h3 className="text-sm text-gray-700">
                <Link href={`product/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
            </div>
            <p className="text-md font-medium text-gray-900">{formatPrice(product.price)}</p>
            {!product.brand ? (
              <p className="text-sm font-medium text-red-600">Sem marca</p>
            ) : (
              <p className="text-sm font-medium text-red-600">{product.brand}</p> 
            )}
            {product.stock === 0 && (
              <p className="text-sm font-medium mt-2 text-gray-900">Indisponível</p>
            )}
            {product.stock === 1 && (
              <p className="text-sm font-medium mt-2 text-gray-900">{product.stock} Unidade Disponível</p>
            )}
            {product.stock > 1 && (
              <p className="text-sm font-medium mt-2 text-gray-900">{product.stock} Unidades Disponíveis</p>
            )}
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}