'use client'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data } = useQuery(CompaniesDocument, {
    variables: {},
  })

  return (
    <main className="p-8">
      <div>
        {data?.companies.map((company) => (
          <div className="p-4 rounded" key={company.id}>
            <div>{company.displayName}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
