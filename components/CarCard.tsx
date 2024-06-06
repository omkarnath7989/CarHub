"use client";
import { useState } from "react";

import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import CarDetails from "./CarDetails";
import Custombutton from "./Custombutton";
import { generateCarImageUrl } from "@/utils";

const CarCard = (car: CarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setisOpen] = useState(false);

  const CarRent = calculateCarRent(city_mpg, year);
  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="flex w-full justify-start gap-2 items-start">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>

      <p className="text-[32px] leading-[32px] flex mt-6 font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {CarRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative my-3 h-40 w-full object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car-img"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="w-full relative mt-2">
        <div className="flex justify-between w-full text-gray">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/steering-wheel.svg"
              alt="Wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="w-full mt-8">
          <Custombutton
            title="View More"
            customStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setisOpen(true)}
          />
        </div>
      </div>

      <div>
        <CarDetails isopen={isOpen} closeModel={()=>setisOpen(false)} car={car}/>
      </div>
    </div>
  );
};

export default CarCard;
