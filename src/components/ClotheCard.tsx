"use client";
import Image from "next/image";
import { useState } from "react";

const ClotheCard = ({
  id,
  name,
  image,
  services,
  price,
  itemQuantity,
  onUpdateQuantity,
}: {
  id: string;
  name: string;
  image: string;
  services: string;
  price: number;
  itemQuantity: number;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(itemQuantity);

  return (
    <div className="w-full flex flex-col xl:flex-row justify-between bg-white rounded-lg shadow-lg p-5">
      <div className="flex flex-col mx-auto xl:flex-row xl:mx-0 gap-4">
        <Image src={image} alt="logo" width={175} height={100} />

        <div className="">
          <h3 className="font-semibold text-xl text-center xl:text-left">
            {name}
          </h3>
          <p className="text-slate-500 text-center xl:text-left">{services}</p>
          <p className="text-center mt-4 xl:text-left xl:mt-11">Rp {price}</p>
        </div>
      </div>

      {/* add quantity of the item, also user can increase or decrease quantity */}
      <div className="mx-auto mt-3 xl:m-0 xl:mt-[130px]">
        <div className="flex flex-row items-center gap-2">
          <div
            className="w-8 h-8 cursor-pointer rounded-full bg-[#4353E4] flex items-center justify-center text-white"
            onClick={() => {
              //   handle decrease quantity if quantity is 0
              if (quantity > 0) {
                onUpdateQuantity(id, quantity - 1);
              }

              // Set quantity to 0 if quantity is 0
              if (quantity === 0) {
                onUpdateQuantity(id, 0);
              }
              
              if (quantity > 0) {
                setQuantity(quantity - 1);
              } else {
                setQuantity(0);
              }
            }}
          >
            -
          </div>
          <p>{quantity}</p>
          <div
            className="w-8 h-8 cursor-pointer rounded-full bg-[#4353E4] flex items-center justify-center text-white"
            onClick={() => {
              onUpdateQuantity(id, quantity + 1);
              setQuantity(quantity + 1);
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClotheCard;
