import Image from "next/image"
import { Avatar } from "../Avatar"

import styles from './post.module.css'
import Link from "next/link"

export const Post = ({ post }) => {
  return (
      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <figure className={styles.cardFigure}>
            <Image src={post.cover} width={438} height={133} alt={`Capa do post de titulo: ${post.title}`} />
          </figure>
        </header>

        <section className={styles.cardSection}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>

        <footer className={styles.cardFooter}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
  )
}