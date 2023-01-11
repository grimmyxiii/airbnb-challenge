import { useRouter } from "next/dist/client/router"
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { format } from "date-fns"
import SearchCard from "../components/SearchCard"
import Map from "../components/Map"

function Search({ searchResults }) {
  const router = useRouter()

  const { location, startDate, endDate, noOfGuests } = router.query
  const formattedStartData =
    startDate && format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartData} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm font-semibold mt-2 mb-6">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button active:scale-95 active: bg-gray-100">
              Cancellation Flexibility
            </p>
            <p className="button active:scale-95 active: bg-gray-100">
              Type of Place
            </p>
            <p className="button active:scale-95 active: bg-gray-100">Price</p>
            <p className="button active:scale-95 active: bg-gray-100">
              Rooms and Beds
            </p>
            <p className="button active:scale-95 active: bg-gray-100">
              More filters
            </p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <SearchCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] cursor-pointer">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
