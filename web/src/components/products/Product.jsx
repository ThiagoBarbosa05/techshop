import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from '../../lib/ProductApi'
import rating from './rating.svg'

export default function Product() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const {getProductById} = useProduct()

  const fetchProductById = async () => {
    const data = await getProductById(id);

    setProduct(data);
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  console.log(product);

  return (
    <section className="w-[100%] max-w-[73.75rem] mx-auto flex gap-[1.37rem] items-start mt-[4rem] border-[1px] rounded-md p-[1.25rem] bg-white">
      <div className="border-[1px] rounded-md p-[1.18rem]">
        <img className=" w-[100%] max-w-[23.75rem]" src={product?.img_url} />
      </div>
      <div className="flex flex-col  items-start">
        <h3 className="font-semibold text-[1.25rem] mb-[.56rem]">
          {product?.name}
        </h3>
        <p className="text-[#787a80] leading-5 mb-[.56rem]">
          {product?.description}
        </p>
        <img src={rating} />
        <p className="font-bold text-4xl mt-[2rem]">${product.price}</p>
        <button
          className="bg-gradient-to-b from-[#127FFF] to-[#0067FF] transition-opacity text-white py-[.62rem] px-[2.4rem] rounded-md mt-[2rem] hover:opacity-90"
          onClick={() => handleAddToCart({ ...product, qtd: 1 })}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
