'use client'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Dialog,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react'
import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (url: any) => fetch(url).then((r) => r.json())

const TABLE_HEAD = ['Invitado', 'Estado', 'Menu', '']
const TABLE_ROWS = [
  {
    name: 'John Michael',
    role: 'principal',
    menu: 'Normal',
    estado: 'confirmado',
    date: '23/04/18',
  },
  {
    name: 'Alexa Liras',
    role: 'acompañante',
    menu: 'Vegetariano',
    estado: 'confirmado',
    date: '23/04/18',
  },
  {
    name: 'Laurent Perrier',
    role: 'acompañante',
    menu: 'Normal',
    estado: 'pendiente',
    date: '19/09/17',
  },
  {
    name: 'Michael Levi',
    role: 'acompañante',
    menu: 'Vegetariano',
    estado: 'confirmado',
    date: '24/12/08',
  },
  {
    name: 'Richard Gran',
    role: 'acompañante',
    menu: 'Infantíl',
    estado: 'rechazado',
    date: '04/10/21',
  },
]

export default function Assistance() {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const { data } = useSWR('/api/notion/ABC', fetcher)

  return (
    <div className='indicator w-full'>
      <Card className='bg-base-100 shadow-lg'>
        <CardHeader color='transparent' shadow={false}>
          <Typography variant='h3'>Asistencia </Typography>
        </CardHeader>

        {data &&
          data[0] &&
          data[0].properties.RSVP.select.name === 'Refused' && (
            <CardBody>
              <div className='card-body items-center text-center'>
                <Typography className='m-0 max-w-[30ch] text-sm opacity-50'>
                  {data[0].properties.Nickname.rich_text[0].text.content},
                  lamentamos mucho que no puedas asistir, pero entendemos que
                  tendrás algún motivo, probablemente de fuerza mayor. También
                  agradecemos que nos lo hayas hecho saber en tiempo y forma, ya
                  que como podrás imaginarte, una boda puede ser muy costosa, de
                  tal manera que nosotros podamos notificar a nuestra wedding
                  planner y poder hacer ajustes con nuestros proveedores.
                </Typography>
              </div>
            </CardBody>
          )}

        {data &&
          data[0] &&
          data[0].properties.RSVP.select.name === 'Pending' && (
            <>
              <CardBody>
                <div className='card-body items-center text-center'>
                  <Typography className='m-0 max-w-[30ch] text-sm opacity-50'>
                    Hola {data[0].properties.Nickname.rich_text[0].text.content}
                    , por favor, confírmanos tu presencia antes del{' '}
                    <span className='font-bold'>26 de Mayo de 2024</span>.
                  </Typography>
                </div>
              </CardBody>

              <CardFooter>
                <div className='card-actions justify-end w-full'>
                  <Button onClick={() => setConfirmOpen(true)} fullWidth>
                    Confirmar
                  </Button>
                </div>
              </CardFooter>

              <Dialog open={confirmOpen} handler={setConfirmOpen}>
                <div className='grid p-4 gap-y-4 glass bg-none'>
                  <div className='overflow-scroll'>
                    <table className='table bg-base-100 text-left'>
                      {/* head */}
                      <thead>
                        <tr>
                          {' '}
                          {TABLE_HEAD.map((head) => (
                            <th
                              key={head}
                              className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'
                            >
                              <Typography
                                variant='small'
                                color='blue-gray'
                                className='font-normal leading-none opacity-70'
                              >
                                {head}
                              </Typography>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {TABLE_ROWS.map(
                          ({ name, role, estado, menu }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1
                            const classes = isLast
                              ? 'p-4'
                              : 'p-4 border-b border-blue-gray-50'

                            return (
                              <tr key={name}>
                                <td className={classes}>
                                  <div className='flex items-center gap-3'>
                                    <div className='flex flex-col'>
                                      <Typography
                                        variant='small'
                                        color='blue-gray'
                                        className='font-normal'
                                      >
                                        {name}
                                      </Typography>
                                      <Typography
                                        variant='small'
                                        color='blue-gray'
                                        className='font-normal opacity-70'
                                      >
                                        {role}
                                      </Typography>
                                    </div>
                                  </div>
                                </td>
                                <td className={classes}>
                                  <div className='w-max'>
                                    <Chip
                                      variant='ghost'
                                      size='sm'
                                      value={estado}
                                      color={
                                        estado === 'confirmado'
                                          ? 'green'
                                          : estado === 'pendiente'
                                          ? 'blue-gray'
                                          : 'red'
                                      }
                                    />
                                  </div>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant='small'
                                    color='blue-gray'
                                    className='font-normal'
                                  >
                                    {menu}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Tooltip content='Edit User'>
                                    <IconButton variant='text'>
                                      ✏️
                                      {/* <PencilIcon className="h-4 w-4" /> */}
                                    </IconButton>
                                  </Tooltip>
                                </td>
                              </tr>
                            )
                          }
                        )}
                      </tbody>
                    </table>
                  </div>

                  <Button fullWidth>Aceptar</Button>
                </div>
              </Dialog>
            </>
          )}

        {data &&
          data[0] &&
          data[0].properties.RSVP.select.name === 'Confirmed' && (
            <CardBody>
              <div className='card-body items-center text-center'>
                <p className='m-0 max-w-[30ch] text-sm opacity-50'>
                  Muchas gracias por confirmar tu asistencia,{' '}
                  {data[0].properties.Nickname.rich_text[0].text.content}!!! No
                  aguantamos las ganas por verte en ese día.
                </p>
              </div>
            </CardBody>
          )}

        {/*6328 2835 */}
      </Card>
    </div>
  )
}
