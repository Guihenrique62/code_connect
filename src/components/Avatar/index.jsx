import Image from "next/image"
import styles from './avatar.module.css'
export const Avatar = ({name, imageSrc}) => {

  return (
    <ul className= {styles.avatarUl}>
      <li>
        <Image src={imageSrc} height={32} width={32} alt={`Avatar do(a) ${name}`}/>
      </li>
      <li>
        @{name}
      </li>
    </ul>
  )
}