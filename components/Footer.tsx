import Image from "next/image"
import Link from "next/link"

import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col gap-6">
          <Image 
           src='/logo.svg' 
           alt="logo"
           height={18}
           width={118}
          />
         <div className="text-base text-gray-700">
          Carhub 2024 <br />
          All Rights Reserved &copy;
          </div>
        </div>

        <div className="flex flex-1 w-full md:justify-end flex-wrap max-md:mt-10 gap-20">
          { footerLinks.map((tit)=>(
            <div key={tit.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{tit.title}</h3>
              <div className="flex flex-col gap-5 text-gray-600">
                { tit.links.map((z)=>(
                  <Link 
                  key={z.title}
                  href={z.url}
                  className="text-gray-500"
                  >
                    {z.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="felx w-full justify-between items-center flex-wrap md:px-16 px-6 py-10 mt-10 border-t">
      <p>@2024 CarHub. All rights reserved</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <Link 
        href='/'
        className="text-gray-500"
        >
          Privacy & Policy
        </Link>
        <Link 
        href='/'
        className="text-gray-500"
        >
          Terms & Condition
        </Link>
        
      </div>

      </div>

    </footer>
  )
}

export default Footer