"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchButton = ({otherclases}:{otherclases : string } ) =>(

  <button 
   type="submit"
   className={`-ml-3 z-10 ${otherclases}`}
  >
    <Image 
     src = {"/magnifying-glass.svg"}
     height = {40}
     width = {40}
     alt = {"search"}
     className="object-contain"
    />
  </button>
)

const SearchBar = () => {

    const [manufacturer, setManuFacturer ] = useState('')
    const [model, setmodel] = useState('')
    const router = useRouter()

    const handlesubmit = (e : React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()

      if( model === "" && manufacturer === "")
        return alert("Please provide some input")

      UpdateSearchparams( model.toLowerCase() , manufacturer.toLowerCase() )
      
    }
    const UpdateSearchparams = ( model : string , manufacturer : string ) => {
       
      const searchParams = new URLSearchParams(window.location.search)

      if( model.trim() ){
        searchParams.set("model" , model)
      }
      else
      searchParams.delete(model)

      if( manufacturer.trim())
        searchParams.set("manufacturer" , manufacturer)
      else
        searchParams.delete(manufacturer)
      
      const url = `${window.location.pathname}?${searchParams}`

      router.push(url, {scroll: false});
    }
  return (
    <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit={handlesubmit}>
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <SearchManufacturer 
              manufacturer={manufacturer}
              setManuFacturer={setManuFacturer}
             />
        <SearchButton otherclases="sm:hidden" />
        </div>
        <div className="flex flex-1 max-sm:w-full justify-start items-center relative">
          <Image 
           src= '/model-icon.png'
           height={40}
           width={40}
           alt="model-icon"
           className="absolute ml-4 w-[20px] h-[20px]"
          />
          <input 
           type="text"
           name="model"
           value={model}
           onChange={(e)=>setmodel(e.target.value)}
           className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
           placeholder="Tiuguan..."
          />
          <SearchButton otherclases="sm:hidden " />
        </div>
        <SearchButton otherclases="max-sm:hidden border-l-2 border-gray-100 p-1 relative right-9" />
    </form>
  )
}

export default SearchBar