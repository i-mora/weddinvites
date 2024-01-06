"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

type Place = {
  id: string;
  imageURL: string;
  title: string;
  address: string;
  googleMapsURL: string;
  uberURL: string;
  appleMapsURL: string;
  wazeURL: string;
};

export default function Place() {
  const places: Place[] = [
    {
      id: "san_antonio_1",
      imageURL: "/san_antonio.jpeg",
      title: "Templo de San Antonio de Padua",
      address: "Calle Pedro Parga 252, Zona Centro, 20000 Aguascalientes, Ags.",
      googleMapsURL: "https://maps.app.goo.gl/FDo4iqi65nMnnz3m8",
      uberURL:
        "https://m.uber.com/?action=setPickup&drop%5B0%5D=%7B%22addressLine1%22:%22Templo%20de%20San%20Antonio%22,%22addressLine2%22:%22Calle%20General%20Ignacio%20Zaragoza%20,%20Aguascalientes%20Centro,%20Aguascalientes,%2020000%20,%20AG%22,%22id%22:%22here:pds:place:4849ezk8-83fcb48526f7f251e6a7448582ccf81e%22,%22source%22:%22SEARCH%22,%22latitude%22:21.88565,%22longitude%22:-102.29155,%22provider%22:%22here_places%22%7D",
      appleMapsURL:
        "https://maps.apple.com/?address=Calle%20Pedro%20Parga%20252,%20Zona%20Centro,%2020000%20Aguascalientes,%20Ags.,%20Mexico&auid=11783824115521850239&ll=21.885366,-102.291653&lsp=9902&q=Templo%20de%20San%20Antonio%20de%20Padua",
      wazeURL:
        "https://ul.waze.com/ul?place=ChIJryi9q2XuKYQRcAhttVWtgEk&ll=21.88552800%2C-102.29172370&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
    },
    {
      id: "kalamata_1",
      imageURL: "/kalamata.jpeg",
      title: "Kalamata (jardín de eventos)",
      address: "Calle Pedro Parga 252, Zona Centro, 20000 Aguascalientes, Ags",
      googleMapsURL: "https://maps.app.goo.gl/1mNu3dhT9gsLHVHR9",
      uberURL:
        "https://m.uber.com/?action=setpickup?drop%5B0%5D=%7B%22addressLine1%22:%22KALAMATA%20Jard%C3%ADn%20de%20Eventos%22,%22addressLine2%22:%22Avenida%20del%20Paraiso%20S/N%20Hacienda%20Nueva,%2020010%20Aguascalientes,%20Ags.%22,%22id%22:%22ChIJmwHGuzDpKYQRswhEm5TINIc%22,%22source%22:%22SEARCH%22,%22latitude%22:21.896518,%22longitude%22:-102.3569333,%22provider%22:%22google_places%22%7D",
      appleMapsURL:
        "https://maps.apple.com/?address=20313%20Aguascalientes,%20Ags.,%20Mexico&auid=14511892419971855363&ll=21.895865,-102.356867&lsp=9902&q=Kalamata%20Jard%C3%ADn%20de%20Eventos",
      wazeURL:
        "https://ul.waze.com/ul?place=ChIJmwHGuzDpKYQRswhEm5TINIc&ll=21.89651800%2C-102.35693330&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
    },
  ];
  const [active, setActive] = useState<Place>();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="bg-base-100 shadow-lg">
        <CardHeader floated={false} color="transparent" shadow={false}>
          <Typography variant="h3">Lugar </Typography>
        </CardHeader>
        <CardBody className="card-body items-center text-center">
          <div className="flex flex-col w-full md:flex-row gap-y-8 md:gap-x-8">
            {places.map((place) => {
              return (
                <Card className="flex-grow shadow-lg" key={place.id}>
                  <CardHeader
                    floated={false}
                    color="transparent"
                    className="relative h-56"
                  >
                    <Image
                      className="object-contain"
                      src={place.imageURL}
                      alt={place.title}
                      height={324}
                      width={800}
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography color="blue-gray" variant="h5">
                      {place.title}
                    </Typography>
                    <Typography color="gray">{place.address}</Typography>
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button
                      fullWidth
                      onClick={() => {
                        setOpen(false);
                        setActive(place);
                      }}
                    >
                      ¿Cómo llegar?
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </CardBody>
      </Card>

      <Dialog open={!!active} handler={setActive}>
        <div className="grid p-4 gap-y-4 bg-none">
          <Link href={active?.googleMapsURL || ""} target="_blank">
            <Button
              fullWidth
              className="flex items-center justify-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.75"
                height="24"
                viewBox="0 0 256 367"
              >
                <path
                  fill="#34A853"
                  d="M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"
                />
                <path
                  fill="#FBBC04"
                  d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"
                />
                <path
                  fill="#4285F4"
                  d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"
                />
                <path
                  fill="#1A73E8"
                  d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"
                />
                <path
                  fill="#EA4335"
                  d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"
                />
              </svg>
              Google Maps
            </Button>
          </Link>
          <Link href={active?.uberURL || ""} target="_blank">
            <Button
              fullWidth
              className="flex items-center justify-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path
                  fill="white"
                  d="M15.958.01C7.744.005.864 6.229.047 14.401h11.115V12a.8.8 0 0 1 .797-.797h8c.443 0 .797.359.797.802V20a.797.797 0 0 1-.797.797h-8a.797.797 0 0 1-.797-.797v-2.401H.047c.885 8.792 8.724 15.198 17.51 14.313c8.792-.88 15.198-8.724 14.313-17.51C31.052 6.23 24.172.011 15.959.011z"
                />
              </svg>
              Uber
            </Button>
          </Link>

          <Accordion open={open} icon={<Icon open={open} />}>
            <AccordionHeader
              className="text-center border-b-0"
              onClick={() => setOpen((open) => !open)}
            >
              Más opciones?
            </AccordionHeader>
            <AccordionBody className="grid gap-y-4 p-0">
              <Link href={active?.appleMapsURL || ""} target="_blank">
                <Button
                  fullWidth
                  className="flex items-center justify-center gap-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#888"
                      d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
                    />
                  </svg>
                  Maps
                </Button>
              </Link>
              <Link href={active?.wazeURL || ""} target="_blank">
                <Button
                  fullWidth
                  className="flex items-center justify-center gap-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.54 6.63c.69.94 1.15 2.04 1.35 3.19c.21 1.25.11 2.52-.31 3.72a7.349 7.349 0 0 1-2 3.06a9.1 9.1 0 0 1-2.26 1.58c.41 1.07-.13 2.27-1.2 2.68c-.24.09-.49.14-.74.14a2.08 2.08 0 0 1-2.07-2h-3.07c-.11 1.14-1.13 2-2.27 1.87c-1.06-.1-1.86-.98-1.88-2.04c.01-.19.04-.39.1-.57a8.37 8.37 0 0 1-4-2.85c-.33-.44-.23-1.07.23-1.41c.18-.14.4-.22.63-.22c.72 0 1-.25 1.17-.63c.24-.72.38-1.47.39-2.23c.03-.53.09-1.05.17-1.57A7.307 7.307 0 0 1 7.5 5c1.66-1.3 3.69-2 5.79-2c1.43 0 2.84.35 4.11 1a8.67 8.67 0 0 1 3.14 2.63m-3.82 10.68c1.78-.81 3.18-2.27 3.87-4.1c1.62-4.94-2.59-9.16-7.3-9.16c-.35 0-.71.02-1.06.07C9.36 4.5 6.4 6.5 5.81 9.5c-.38 2 .19 5.29-2.76 5.29C4 16 5.32 16.93 6.81 17.37c.85-.76 2.16-.68 2.93.18c.11.12.2.25.26.39h3.55c.52-1.02 1.78-1.44 2.8-.9c.15.08.25.17.37.27m-5.75-7c-.58.03-1.09-.41-1.12-1c-.03-.58.42-1.08 1-1.12c.58-.03 1.09.42 1.12 1.06a.999.999 0 0 1-.97 1.04zm4.69 0c-.58.03-1.09-.41-1.12-1c-.04-.58.42-1.08 1-1.12c.58-.03 1.09.42 1.12 1.06c.02.55-.41 1.02-1 1.04zm-5.95 1.76c-.06-.28.13-.57.41-.62c.28-.05.56.13.62.41a2.501 2.501 0 0 0 2.58 1.74c1.14.06 2.18-.64 2.57-1.72c.14-.26.46-.38.71-.23c.18.1.29.27.29.47c-.19.71-.63 1.33-1.23 1.76c-.69.48-1.5.75-2.34.76h-.11c-1.63.07-3.1-1-3.53-2.58z"
                    />
                  </svg>
                  Waze
                </Button>
              </Link>
            </AccordionBody>
          </Accordion>
        </div>
      </Dialog>
    </>
  );
}
