
'use client'

import { productsService, ProductsType } from "@/services/productsService";
import { formatPrice } from "@/utils/formatPrice";
import { useEffect, useState, use } from "react";

export default function Product({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<ProductsType | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = use(params);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);

        const res = await productsService.getProductById(id);

        if (res) {
          setProduct(res);
        }
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) getProduct();
  }, [id]);

  if (loading) {
    return <p>Carregando produto...</p>;
  }

  if (!product) {
    return <p>O produto não existe</p>;
  }

  return (
    <div>
      <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.productImages?.[0].url}`} alt={product.name} width={600}/>
      <p>Produto: {product.name}</p>
      <p>Marca: {product.brand}</p>
      <p>{formatPrice(product.price)}</p>
    </div>
  );
}
