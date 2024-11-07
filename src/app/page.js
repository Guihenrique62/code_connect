import Image from "next/image";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";


async function getAllPosts (page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok){
    logger.error('Erro ao requisitar dados!')
    return []
  }

  logger.info('Posts obitidos com sucesso!')

  return response.json()

}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const {data: posts, prev, next} = await getAllPosts(currentPage)
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {posts.map(post => <CardPost post={post} key={post.id} />)}
      </div>
      {prev && <Link href={`/?page=${prev}`} className={styles.handlePages}>Pagina Anterior</Link>}
      {next && <Link href={`/?page=${next}`} className={styles.handlePages}>Proxima Pagina</Link>}
    </main>
  );
}
