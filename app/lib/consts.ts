import CameraIcon from '@/public/icons/camera.png'
import ChurchIcon from '@/public/icons/church.png'
import DiscoBallIcon from '@/public/icons/disco-ball.png'
import NoCameraIcon from '@/public/icons/no-camera.png'
import NoPhoneIcon from '@/public/icons/no-phone.png'
import TurkeyDinnerIcon from '@/public/icons/turkey-dinner.png'

import type { ActivityLocation, Itinerary } from '@/types/Itinerary'
import { z } from 'zod'

export const CreateInvCodeSchema = z.object({
  Code: z.string().min(3).max(4),
})

export const WeddingDate = 'Sat Jun 29 2024 GMT-0600'

export const WeddingPlaces: ActivityLocation[] = [
  {
    id: 'san_antonio_1',
    title: 'Templo de San Antonio de Padua',
    address: 'Calle Pedro Parga 252, Zona Centro, 20000 Aguascalientes, Ags.',
    assets: {
      image: '/san_antonio.jpeg',
    },
    links: {
      googleMaps: 'https://maps.app.goo.gl/FDo4iqi65nMnnz3m8',
      uber: 'https://m.uber.com/?action=setPickup&drop%5B0%5D=%7B%22addressLine1%22:%22Templo%20de%20San%20Antonio%22,%22addressLine2%22:%22Calle%20General%20Ignacio%20Zaragoza%20,%20Aguascalientes%20Centro,%20Aguascalientes,%2020000%20,%20AG%22,%22id%22:%22here:pds:place:4849ezk8-83fcb48526f7f251e6a7448582ccf81e%22,%22source%22:%22SEARCH%22,%22latitude%22:21.88565,%22longitude%22:-102.29155,%22provider%22:%22here_places%22%7D',
      appleMaps:
        'https://maps.apple.com/?address=Calle%20Pedro%20Parga%20252,%20Zona%20Centro,%2020000%20Aguascalientes,%20Ags.,%20Mexico&auid=11783824115521850239&ll=21.885366,-102.291653&lsp=9902&q=Templo%20de%20San%20Antonio%20de%20Padua',
      waze: 'https://ul.waze.com/ul?place=ChIJryi9q2XuKYQRcAhttVWtgEk&ll=21.88552800%2C-102.29172370&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
    },
    latitude: 21.885429,
    longitude: -102.291682,
    date: new Date('Sat Jun 29 2024 17:00:00 GMT-0600'),
  },
  {
    id: 'kalamata_1',
    title: 'Kalamata (jardín de eventos)',
    address: 'Calle Pedro Parga 252, Zona Centro, 20000 Aguascalientes, Ags',
    assets: {
      image: '/kalamata.jpeg',
    },
    links: {
      googleMaps: 'https://maps.app.goo.gl/1mNu3dhT9gsLHVHR9',
      uber: 'https://m.uber.com/?action=setpickup?drop%5B0%5D=%7B%22addressLine1%22:%22KALAMATA%20Jard%C3%ADn%20de%20Eventos%22,%22addressLine2%22:%22Avenida%20del%20Paraiso%20S/N%20Hacienda%20Nueva,%2020010%20Aguascalientes,%20Ags.%22,%22id%22:%22ChIJmwHGuzDpKYQRswhEm5TINIc%22,%22source%22:%22SEARCH%22,%22latitude%22:21.896518,%22longitude%22:-102.3569333,%22provider%22:%22google_places%22%7D',
      appleMaps:
        'https://maps.apple.com/?address=20313%20Aguascalientes,%20Ags.,%20Mexico&auid=14511892419971855363&ll=21.895865,-102.356867&lsp=9902&q=Kalamata%20Jard%C3%ADn%20de%20Eventos',
      waze: 'https://ul.waze.com/ul?place=ChIJmwHGuzDpKYQRswhEm5TINIc&ll=21.89651800%2C-102.35693330&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
    },
    latitude: 21.89651,
    longitude: -102.356932,
    date: new Date('Sat Jun 29 2024 20:00:00 GMT-0600'),
  },
]

export const Itineraries: Itinerary[] = [
  {
    type: 'guest',
    activities: [
      {
        id: 'asistir-a-la-misa',
        name: 'Asistir a la misa',
        time: new Date(),
        icon: ChurchIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
      },
      {
        id: 'asistir-a-la-comida',
        name: 'Asistir a la comida',
        time: new Date(),
        icon: TurkeyDinnerIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
      },
      {
        id: 'asistir-a-la-fiesta',
        name: 'Asistir a la fiesta',
        time: new Date(),
        icon: DiscoBallIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
      },
    ],
  },
  {
    type: 'Padrino',
    activities: [
      {
        id: 'asistir-a-la-misa',
        name: 'Asistir a la misa',
        time: new Date(),
        icon: ChurchIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
        codesConduct: [
          {
            icon: NoCameraIcon,
            name: 'No tomar fotos',
          },
          {
            icon: NoPhoneIcon,
            name: 'Asegúrate de tener el teléfono en modo vibrar',
          },
        ],
      },
      {
        id: 'asistir-a-la-comida',
        name: 'Asistir a la comida',
        time: new Date(),
        icon: TurkeyDinnerIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
        codesConduct: [
          {
            icon: NoCameraIcon,
            name: 'No tomar fotos',
          },
          {
            icon: NoPhoneIcon,
            name: 'Asegúrate de tener el teléfono en modo vibrar',
          },
        ],
      },
      {
        id: 'asistir-a-la-fiesta',
        name: 'Asistir a la fiesta',
        time: new Date(),
        icon: DiscoBallIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
        codesConduct: [
          {
            icon: NoCameraIcon,
            name: 'No tomar fotos',
          },
          {
            icon: NoPhoneIcon,
            name: 'Asegúrate de tener el teléfono en modo vibrar',
          },
        ],
      },
    ],
  },
  {
    type: 'photograph',
    activities: [
      {
        id: 'session-de-fotos',
        name: 'Session de fotos',
        time: new Date(),
        icon: CameraIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
      },
      {
        id: 'misa',
        name: 'Misa',
        time: new Date(),
        icon: TurkeyDinnerIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
      },
      {
        id: 'session-de-fotos-familiar',
        name: 'Session de fotos familiar',
        time: new Date(),
        icon: DiscoBallIcon,
        location:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
      },
    ],
  },
]
