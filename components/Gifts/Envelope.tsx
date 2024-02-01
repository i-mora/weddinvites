import { MailIcon } from '../SVGIcons'
import styles from './envelope.module.css'
export function Envelope() {
  return (
    <div className='max-w-xs mx-auto max-h-min'>
      <div className={styles.card}>
        <MailIcon width='100%' height='100%' />
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
