import { MouseEventHandler } from "react";

export interface customButtonProps {
    title : string ;
    isDisabled?:boolean ; 
    customStyles?:string ; 
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string ; 
    rightIcon?: string ; 
}

export interface SearchManuFacturerProps  {
    manufacturer : string ; 
    setManuFacturer : ( manufacturer : string) => void ; 
}

export interface CarProps{
    city_mpg: number;    
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface OptionProps{
    title : string ; 
    value : string ; 
}

export interface CustomfiltersProps {
    title : string ; 
    OptionProps : OptionProps[] ; 
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }