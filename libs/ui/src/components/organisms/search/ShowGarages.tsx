import { useLazyQuery } from '@apollo/client'
import { SearchGaragesDocument } from '@autospace/network/src/gql/generated'
import { useEffect } from 'react'
import { GarageMarker } from './GarageMarker'
import { FormTypeSearchGarage } from '@autospace/forms/src/searchGarages'
import { useFormContext } from 'react-hook-form'

export const ShowGarages = () => {
  const [searchGarages, { data, loading, error }] = useLazyQuery(
    SearchGaragesDocument,
  )

  const { watch } = useFormContext<FormTypeSearchGarage>()
  const { endTime: end, startTime: start, locationFilter } = watch()

  useEffect(() => {
    searchGarages({ variables: { dateFilter: { end, start }, locationFilter } })
  }, [searchGarages, end, start, locationFilter])

  return (
    <>
      {data?.searchGarages.map((garage) => (
        <GarageMarker key={garage.id} marker={garage} />
      ))}
    </>
  )
}
