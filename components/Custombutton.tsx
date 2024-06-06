"use client"

import { customButtonProps } from "@/types"
import Image from "next/image"

const Custombutton = ({title , isDisabled , customStyles , handleClick , btnType , textStyles , rightIcon  } : customButtonProps) => {
  return (
    <button 
    className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${customStyles}`}
    type={btnType}
    disabled={false}
    onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
    </button>
  )
}

export default Custombutton