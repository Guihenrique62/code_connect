import Image from "next/image";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";


async function getAllPosts (page,searchTerm) {
  try {
    const where = {}
    if(searchTerm){
      where.title = {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }

    const perPage = 6;
    const skip = (page -1) * perPage;

    //Calcula o total de paginas Arredondando pra cima
    const totalItems = await db.post.count({ where })
    const totalPages = Math.ceil(totalItems / perPage)
    const next = page < totalPages ? page +1 : null
    const prev = page > 1 ? page -1 : null

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: {createdAt: 'desc'},
      include: {
        author: true
      }
    })
    
    return { data: posts, prev, next }
  } catch (error) {
    logger.error('Falha ao obter posts', {error})    
    return { data: [], prev:null, next: null }
  }

}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1)
  const searchTerm = searchParams?.q

  const {data: posts, prev, next} = await getAllPosts(currentPage,searchTerm)
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {posts.map(post => <CardPost post={post} key={post.id} />)}
      </div>
      <div className={styles.footerContainer}>
        {prev && <Link href={{ pathname: '/', query: { page: prev, q: searchTerm }}} className={styles.handlePages}>Pagina Anterior</Link>}
        {next && <Link href={{ pathname: '/', query: { page: next, q: searchTerm }}} className={styles.handlePages}>Proxima Pagina</Link>}
      </div>
    </main>
  );
}
