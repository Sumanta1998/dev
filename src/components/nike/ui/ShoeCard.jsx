import Image from "next/image";
import React from "react";

const ShoeCard = ({ shoe, index, selectedShoe }) => {
  return (
    <div
      className={`border-2 rounded-xl ${
        selectedShoe == index ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={shoe?.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
