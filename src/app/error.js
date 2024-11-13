'use client' // Error components must be Client Components

import Image from 'next/image'
import { useEffect } from 'react'
import cover from './assets/500.png'
import Link from 'next/link'
import ArrowBack from '@/components/ArrowBack'
import styles from './error.module.css'

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={styles.container}>
      <Image src={cover} alt={'Imagem de Erro!'} className={styles.image}/>
      <h2>Opa! Um erro Ocorreu.</h2>
      <p>Não conseguimos carregar a página, volte para seguir navegando.</p>

      <Link href={`/`} className={styles.link}> Voltar ao Feed <ArrowBack/></Link>
    </div >
  )
}