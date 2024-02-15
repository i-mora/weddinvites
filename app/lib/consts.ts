import { z } from 'zod'
import { type ActivityLocation, Itinerary } from '../types'
import { NoCameraIcon, NoPhoneIcon } from '@/components/SVGIcons'

export const CreateInvCodeSchema = z.object({
  Code: z.string().min(3).max(4),
})

export const WeddingDate = 'Sat Jun 29 2024 GMT-0600'

export const WeddingPlaces: ActivityLocation[] = [
  {
    id: 'san_antonio_1',
    imageURL: '/san_antonio.jpeg',
    title: 'Templo de San Antonio de Padua',
    address: 'Calle Pedro Parga 252, Zona Centro, 20000 Aguascalientes, Ags.',
    googleMapsURL: 'https://maps.app.goo.gl/FDo4iqi65nMnnz3m8',
    uberURL:
      'https://m.uber.com/?action=setPickup&drop%5B0%5D=%7B%22addressLine1%22:%22Templo%20de%20San%20Antonio%22,%22addressLine2%22:%22Calle%20General%20Ignacio%20Zaragoza%20,%20Aguascalientes%20Centro,%20Aguascalientes,%2020000%20,%20AG%22,%22id%22:%22here:pds:place:4849ezk8-83fcb48526f7f251e6a7448582ccf81e%22,%22source%22:%22SEARCH%22,%22latitude%22:21.88565,%22longitude%22:-102.29155,%22provider%22:%22here_places%22%7D',
    appleMapsURL:
      'https://maps.apple.com/?address=Calle%20Pedro%20Parga%20252,%20Zona%20Centro,%2020000%20Aguascalientes,%20Ags.,%20Mexico&auid=11783824115521850239&ll=21.885366,-102.291653&lsp=9902&q=Templo%20de%20San%20Antonio%20de%20Padua',
    wazeURL:
      'https://ul.waze.com/ul?place=ChIJryi9q2XuKYQRcAhttVWtgEk&ll=21.88552800%2C-102.29172370&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
    latitude: 21.885429,
    longitude: -102.291682,
    date: new Date('Sat Jun 29 2024 17:00:00 GMT-0600'),
  },
  {
    id: 'kalamata_1',
    imageURL: '/kalamata.jpeg',
    title: 'Kalamata (jardín de eventos)',
    address: 'Calle Pedro Parga 252, Zona Centro, 20000 Aguascalientes, Ags',
    googleMapsURL: 'https://maps.app.goo.gl/1mNu3dhT9gsLHVHR9',
    uberURL:
      'https://m.uber.com/?action=setpickup?drop%5B0%5D=%7B%22addressLine1%22:%22KALAMATA%20Jard%C3%ADn%20de%20Eventos%22,%22addressLine2%22:%22Avenida%20del%20Paraiso%20S/N%20Hacienda%20Nueva,%2020010%20Aguascalientes,%20Ags.%22,%22id%22:%22ChIJmwHGuzDpKYQRswhEm5TINIc%22,%22source%22:%22SEARCH%22,%22latitude%22:21.896518,%22longitude%22:-102.3569333,%22provider%22:%22google_places%22%7D',
    appleMapsURL:
      'https://maps.apple.com/?address=20313%20Aguascalientes,%20Ags.,%20Mexico&auid=14511892419971855363&ll=21.895865,-102.356867&lsp=9902&q=Kalamata%20Jard%C3%ADn%20de%20Eventos',
    wazeURL:
      'https://ul.waze.com/ul?place=ChIJmwHGuzDpKYQRswhEm5TINIc&ll=21.89651800%2C-102.35693330&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
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
        activity: 'Asistir a la misa',
        activityTime: new Date(),
        activityIcon: 'church',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
      },
      {
        activity: 'Asistir a la comida',
        activityTime: new Date(),
        activityIcon: 'turkey-dinner',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
      },
      {
        activity: 'Asistir a la fiesta',
        activityTime: new Date(),
        activityIcon: 'disco-ball',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
      },
    ],
  },
  {
    type: 'Padrino',
    activities: [
      {
        activity: 'Asistir a la misa',
        activityTime: new Date(),
        activityIcon: 'church',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
        codesConduct: [
          {
            icon: NoCameraIcon({
              width: '30px',
              height: '30px',
              classStyles: 'h5 w6',
            }),
            name: 'No tomar fotos',
          },
          {
            icon: NoPhoneIcon({
              width: '30px',
              height: '30px',
              classStyles: 'h5 w6',
            }),
            name: 'Asegúrate de tener el teléfono en modo vibrar',
          },
        ],
      },
      {
        activity: 'Asistir a la comida',
        activityTime: new Date(),
        activityIcon: 'turkey-dinner',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
        codesConduct: [
          {
            icon: NoCameraIcon({
              width: '30px',
              height: '30px',
              classStyles: 'h5 w6',
            }),
            name: 'No tomar fotos',
          },
          {
            icon: NoPhoneIcon({
              width: '30px',
              height: '30px',
              classStyles: 'h5 w6',
            }),
            name: 'Asegúrate de tener el teléfono en modo vibrar',
          },
        ],
      },
      {
        activity: 'Asistir a la fiesta',
        activityTime: new Date(),
        activityIcon: 'disco-ball',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
        codesConduct: [
          {
            icon: NoCameraIcon({
              width: '30px',
              height: '30px',
              classStyles: 'h5 w6',
            }),
            name: 'No tomar fotos',
          },
          {
            icon: NoPhoneIcon({
              width: '30px',
              height: '30px',
              classStyles: 'h5 w6',
            }),
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
        activity: 'Session de fotos',
        activityTime: new Date(),
        activityIcon: 'camera',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'kalamata_1') ?? WeddingPlaces[0],
      },
      {
        activity: 'Misa',
        activityTime: new Date(),
        activityIcon: 'turkey-dinner',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
      },
      {
        activity: 'Session de fotos familiar',
        activityTime: new Date(),
        activityIcon: 'disco-ball',
        activityLocation:
          WeddingPlaces.find((p) => p.id === 'san_antonio_1') ??
          WeddingPlaces[0],
      },
    ],
  },
]
