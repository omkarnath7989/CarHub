import Link from "next/link"
import Image from "next/image"
import Custombutton from "./Custombutton"


const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
            <Link href='/' className="flex justify-center items-center">
                <Image 
                src='/logo.svg'
                alt="Car Hub"
                width={118}
                height={18}
                className="object-contain"
                />
            </Link>

            <Custombutton 
            title="Sign In"
            btnType="button"
            customStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
            />
        </nav>
    </header>
  )
}

export default Navbar