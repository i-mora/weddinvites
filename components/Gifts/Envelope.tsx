import MailIcon from '@/public/icons/mail.svg'

import Image from 'next/image'
import styles from './envelope.module.css'

export function Envelope() {
  return (
    <div className='mx-auto max-h-min max-w-xs'>
      <div className={styles.card}>
        <Image src={MailIcon} alt='mail icon' className='size-full' />
        <div className={styles.card_content}>
          <p className={styles.card_title}>Lluvia de Sobres</p>
          <p className={styles.card_description}>
            Es la tradición de regalar dinero en efectivo a los novios el día
            del evento.
          </p>
          <p className={styles.card_description}>
            Tu compañía es todo lo que deseamos, pero si quisieras llevar un
            regalo, preferimos que sea una contribución en efectivo, para el
            inicio de nuestra historia.
          </p>
        </div>
      </div>
    </div>
  )
}
