"use client"

import { Fragment } from "react"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { useState } from 'react'
import { CustomfiltersProps } from "@/types"
import { updateSearchParams } from "@/utils"
import { useRouter } from "next/navigation"

import Image from "next/image"

const CustomFilter = ({ title , OptionProps } : CustomfiltersProps) => {
  
  const [selected, setSelected] = useState(OptionProps[0])

  const router = useRouter()
  
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, {scroll: false});
  };


  return (
    <div className="relative z-10 w-fit">
    <Listbox value={selected} onChange={(e)=>
     { setSelected(e)
      handleUpdateParams(e)}
      }>
      <ListboxButton
        className="relative min-w-[172px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border"
      >
      <span className="block truncate">
      {selected.title}
      </span>
      <Image 
       src="/chevron-up-down.svg"
       height={20}
       width={20}
       alt="option"
      />
        
      </ListboxButton>
      <Transition as={Fragment}
      leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <ListboxOptions
          anchor="bottom"
          className="absolute mt-1 max-h-60 min-w-[127px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {OptionProps.map((person) => (
            <ListboxOption
              key={person.value}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
            >
              <div className="text-sm/6 text-black">{person.value}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </Listbox>
  </div>
  )
}

export default CustomFilter