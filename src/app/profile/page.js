import logger from "@/logger"
import styles from './profile.module.css'
import db from "../../../prisma/db";
import Link from "next/link";
import ProfileSpan from "@/components/ProfileSpan";


async function getAllUsers(page, searchTerm){
  try {
    
    const where = {}
    if(searchTerm){
      where.username = {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }

    const perPage = 6;
    const skip = (page -1) * perPage;

    //Calcula o total de paginas Arredondando pra cima
    const totalItems = await db.user.count({ where })
    const totalPages = Math.ceil(totalItems / perPage)
    const next = page < totalPages ? page +1 : null
    const prev = page > 1 ? page -1 : null

    const users = await db.user.findMany({
      take: perPage,
      skip,
      where,
    })
    return { data: users, prev, next }

  } catch (error) {
    logger.error('Falha ao obter Usuarios', {error})    
    return { data: [], prev:null, next: null }
  }
}

export default async function Profile ({searchParams}) {

  const currentPage = parseInt(searchParams?.page || 1)
  const searchTerm = searchParams?.q

  const {data: users, prev, next} = await getAllUsers(currentPage,searchTerm)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {users.map(user => <ProfileSpan key={user.id} user={user}/>)}
      </div>
      <div className={styles.footerContainer}>
        {prev && <Link href={{ pathname: '/profile', query: { page: prev, q: searchTerm }}} className={styles.handlePages}>Pagina Anterior</Link>}
        {next && <Link href={{ pathname: '/profile', query: { page: next, q: searchTerm }}} className={styles.handlePages}>Proxima Pagina</Link>}
      </div>
    </main>
  )
}