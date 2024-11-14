import Image from "next/image";
import styles from './profileSpan.module.css'
import Link from "next/link";

export default function ProfileSpan ({user}) {

  return (
    <div className={styles.container}>
      <Image src={user.avatar} alt={'Avatar do usuario'} className={styles.image} width={50} height={50}/>
      <p>{user.username}</p>
      <Link href={'/dontWork'} className={styles.btn}>Seguir</Link>
    </div>
  )
}