'use client'
import { useQuery } from '@apollo/client'
import {
  CompaniesDocument,
  SearchGaragesDocument,
} from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data } = useQuery(CompaniesDocument)

  const { data: garages, error } = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '2024-12-14', start: '2024-12-04' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  })

  console.log(garages, error)

  return (
    <main className=" p-8">
      <div>
        {data?.companies.map((company) => (
          <div className="p-4   rounded" key={company.id}>
            <div>{company.description}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
      <div>
        {garages?.searchGarages.map((garage) => (
          <pre key={garage.id}>{JSON.stringify(garage, null, 2)}</pre>
        ))}
      </div>
    </main>
  )
}
