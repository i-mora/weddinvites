import Image from 'next/image'

export function Icon({
  name,
  width = 32,
  height = 32,
  classStyles,
}: {
  name: string
  width?: number
  height?: number
  classStyles?: string
}) {
  return (
    <Image
      width={width}
      height={height}
      className={classStyles}
      src={`/icons/${name}.png`}
      alt={name}
    />
  )
}
