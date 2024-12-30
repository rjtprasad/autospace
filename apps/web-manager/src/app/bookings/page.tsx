import { IsLoggedIn } from '@autospace/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@autospace/ui/src/components/organisms/IsManager'
import { ListGarageBookings } from '@autospace/ui/src/components/templates/ListGarageBookings'

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  console.log(searchParams)

  const garageId = Number(searchParams['garageId'])
  console.log(garageId)

  // const garageId = await garageIdParam ? Number(garageIdParam) : NaN

  if (isNaN(garageId)) {
    return <p>Invalid garage ID</p>
  }

  return (
    <main>
      <IsLoggedIn>
        <IsManager>
          <ListGarageBookings garageId={garageId} />
        </IsManager>
      </IsLoggedIn>
    </main>
  )
}
