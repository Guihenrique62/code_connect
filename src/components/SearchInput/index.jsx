'use client'

import { usePathname } from 'next/navigation'
import styles from './searchInput.module.css'

export const SearchInput = () => {

  const pathname = usePathname()

  return (
    <form className={styles.form}  action={pathname}>
      <input name='q' placeholder={"Digite o que você Procura..."} className={styles.input} />
      <button className={styles.button}>Buscar</button>
    </form>
    
  )
}
