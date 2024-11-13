import styles from './error.module.css'
import Image from 'next/image'
import cover from './assets/404.png'
import Link from 'next/link'
import ArrowBack from '@/components/ArrowBack'

export default function NotFound () {

  return (
    <div className={styles.container}>
      <Image src={cover} alt={'Imagem de Erro!'} className={styles.image}/>
      <h2>Ops! Página não encontrada.</h2>
      <p>Você pode voltar ao feed e continuar buscando projetos incriveis!</p>

      <Link href={`/`} className={styles.link}> Voltar ao Feed <ArrowBack/></Link>
    </div >
  )
}