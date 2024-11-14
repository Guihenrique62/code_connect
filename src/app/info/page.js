import Image from "next/image";
import info from '../assets/icones/info.svg'
import styles from './info.module.css'

export default async function Info () {

  return (
    <div className={styles.container}>
      <Image src={info} width={150} height={150} alt={'Imagem de info'}/>
      <h2>Informaçõs do Projeto</h2>
      <p>Este Projeto foi construido durante o Treinamento de Next.js da <a href="https://www.alura.com.br" target="_blank">Alura</a>, porém com algumas alterações e implementações adicionadas</p>
      <p>O Projeto foi inteiramente feito utilizando o <a href="https://nextjs.org" target="_blank">Next.js</a></p>
      <a target="_blank" href="https://github.com/Guihenrique62/code_connect">Mais Informações do Projeto</a>
    </div>
  )
}