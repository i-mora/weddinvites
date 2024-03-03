import Image from 'next/image'

export function Icon({
  name,
  width = 32,
  height = 32,
}: {
  name: string
  width?: number
  height?: number
}) {
  return (
    <Image
      width={width}
      height={height}
      src={`/icons/${name}.png`}
      alt={name}
    />
  )
}
