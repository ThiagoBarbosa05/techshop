import { Link } from "react-router-dom";
import rating from "./rating.svg";

export default function Card(props) {
  const { id, name, img_url, price } = props.data;
  return (
    <Link
      to={`/product/${id}`}
      className="w-[90%] mx-auto border-[1px] max-w-[18.43rem] border-[#DEE2E7] rounded-md shadow-sm bg-white"
    >
      <div className="flex justify-center border-b-[1px] border-[#DEE2E7] h-[16.25rem]">
        <img className="py-[.93rem] px-[2rem]" src={img_url} />
      </div>

      <div className="pt-[1.06rem] px-[1.25rem]">
        <p className="font-semibold text-lg">${price}</p>
        <img className="w-[6.8rem] py-[.56rem]" src={rating} />
        <p className="pb-[1.12rem] text-[#606060]">{name}</p>
      </div>
    </Link>
  );
}
