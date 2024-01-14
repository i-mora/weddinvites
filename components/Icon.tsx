import Image from 'next/image'

export function Icon({ name }: { name: string }) {
  return <Image width='32' height='32' src={`/icons/${name}.png`} alt={name} />
}
