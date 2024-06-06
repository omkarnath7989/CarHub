import { CustomFilter, Hero, SearchBar , ShowMore} from "@/components";
import Image from "next/image";
import CarCard from "@/components/CarCard";
import { FilterProps } from "@/types";
import { fuels , yearsOfProduction } from "@/constants"
import { fetchCars } from "@/utils";


export default async function Home({searchParams} : { searchParams : FilterProps }) {
  
  const res = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(res) || !res || res.length < 1 ; 

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 sm:px-16 p-6 py-4 mx-auto max-w-[1440px]" id="discover">
        <div className="flex flex-col gap-y-2.5 items-start justify-start text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="flex justify-between items-center gap-5 w-full flex-wrap">
          <SearchBar />

          <div className="flex flex-wrap gap-2 justify-start items-center">
            <CustomFilter title="fuel" OptionProps={fuels}/>
            <CustomFilter title="year" OptionProps={yearsOfProduction}/>
          </div>
        </div>

        {
          !isDataEmpty ? 
          (
              <section>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:gird-cols-2 grid-cols-1 w-full gap-8 pt-14">
                {res?.map((car) => (<CarCard {...car} />))}
                </div>

                <ShowMore
                  pageNumber={(searchParams.limit || 10) / 10}
                  isNext={(searchParams.limit || 10) > res.length}
                />
              </section>
          ):(
            <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps, no result</h2>
            <p>{res?.message}</p>
          </div>
          )
        }
      </div>
    </main>
  );
}
