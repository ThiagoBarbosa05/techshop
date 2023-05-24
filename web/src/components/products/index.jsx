import { useEffect, useState } from "react"
import Card from "./Card"
import useProduct from '../../lib/ProductApi'

export default function Products() {
  const [products, setProducts] = useState([])

  const {getProducts} = useProduct()

  const fetchProducts = async () => {
    const response = await getProducts()

    setProducts(response)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)
  
  return (
    
    <section className="w-[90%] mt-[3.5rem] mx-auto pb-[5rem]">
      <section className="flex gap-[1.25rem] flex-wrap justify-items-end">
      {products.map(product => <Card key={product.id} data={product} />)}

      </section>
    </section>
  )
}