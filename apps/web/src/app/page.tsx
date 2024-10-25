'use client'
import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'
import { Button } from '@autospace/ui/src/components/atoms/Button'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data } = useQuery(CompaniesDocument, {
    variables: {},
  })

  const { data: sessionData } = useSession()

  return (
    <main>
      <main>
        <div>
          {sessionData?.user?.uid ? (
            <Button onClick={() => signOut()}>Signout</Button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
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
    </main>
  )
}
