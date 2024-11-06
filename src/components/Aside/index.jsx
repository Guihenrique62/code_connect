import Image from 'next/image'
import styles from './aside.module.css'

import logo from './Logo_small.png'

export const Aside = () => {
  return (
  <aside className= {styles.aside}>
    <Image src={logo} alt='Logo do code Connect'/>
  </aside>
  )
}