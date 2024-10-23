'use client'
import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button } from '@autospace/ui/src/components/atoms/Button'

export default function Home() {
  const { data } = useQuery(CompaniesDocument, {
    variables: {},
  })

  return (
    <main>
      <BrandIcon />
      <Button> Hello </Button>
      Hello {add(10, 100)}
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
