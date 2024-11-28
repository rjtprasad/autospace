import { IsLoggedIn } from '@autospace/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@autospace/ui/src/components/organisms/IsManager'
import { ListGarageBookings } from '@autospace/ui/src/components/templates/ListGarageBookings'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const garageIdParam = Number(searchParams['garageId'])
  const garageId = garageIdParam ? Number(garageIdParam) : NaN

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
