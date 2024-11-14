import styles from '../error.module.css'
import Image from 'next/image'
import cover from '../assets/404.png'
import Link from 'next/link'
import ArrowBack from '@/components/ArrowBack'

export default async function DontWork () {

  return (
    <div className={styles.container}>
      <Image src={cover} alt={'Imagem de Erro!'} className={styles.image}/>
      <h2>Ops! Essa Funcionalidade não existe no momento.</h2>
      <p>Por essa ser uma versão Demonstrativa, algumas funcionalidades podem não estar implementadas!</p>

      <Link href={`/`} className={styles.link}> Voltar ao Feed <ArrowBack/></Link>
    </div >
  )
}