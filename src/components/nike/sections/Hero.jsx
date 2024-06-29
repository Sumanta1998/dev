"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { shoes, statistics } from "../constants";
import Image from "next/image";
import ShoeCard from "../ui/ShoeCard";

const Hero = () => {
  const [selectedShoe, setSelectedShoe] = useState(0);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen gap-10 justify-center max-container "
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="mt-5 text-coral-red inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-16 mb-14 text-lg leading-8 sm:max-w-sm">
          Discover stylish nike arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button
          label={"Shop Now"}
          iconURL="/assets/nike/icons/arrow-right.svg"
        />

        {/* Statistics */}
        <div className="flex justify-start items-start gap-16 w-full mt-20 flex-wrap">
          {statistics?.map((stats, index) => (
            <div key={index}>
              <p className="text-4xl font-montserrat font-bold">
                {stats?.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stats?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={shoes[selectedShoe]?.bigShoe}
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes?.map((shoe, index) => (
            <div key={index} onClick={() => setSelectedShoe(index)}>
              <ShoeCard shoe={shoe} index={index} selectedShoe={selectedShoe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
