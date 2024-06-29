import Image from "next/image";
import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <div className="bg-coral-red flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white border-coral-red">
      {label}
      <Image
        className="ml-2 rounded-full"
        alt="Left Arrow"
        src={iconURL}
        width={15}
        height={15}
      />
    </div>
  );
};

export default Button;
