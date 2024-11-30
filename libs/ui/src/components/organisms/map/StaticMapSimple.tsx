import Image from 'next/image'

export const StaticMapSimple = ({
  position,
  className = 'w-full shadow-xl aspect-square',
}: {
  position: { lng: number; lat: number }
  className?: string
}) => {
  console.log(position)
  if (!position) {
    return <div className="w-full bg-gray-100 shadow-xl aspect-square" />
  }

  // const url = `https://api.mapbox.com/styles/v1/duded5314/cm2q94lzz000p01qrgva6acwl/static/pin-s(${position.lng},${position.lat})/${position.lng},${position.lat},9,0/600x600?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
  const url = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+555555(${position.lng},${position.lat})/${position.lng},${position.lat},9,0/600x600?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`

  console.log(url)

  return (
    <Image
      src={url}
      alt="Map"
      className={` ${className}`}
      width={200}
      height={200}
    />
  )
}
