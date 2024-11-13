import { CardPost } from "@/components/CardPost"
import { Post } from "@/components/Post";
import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';
import styles from './page.module.css'
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug
      },
      include: {
        author: true
      }
    })

    if(!post){
      throw new Error(`Post com o slug ${slug} não foi encontrado!`)
    }

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml

    return post
  } catch (error) {
    logger.error('Falha ao obter o post com o slug: ',{slug,error})
  }

  redirect('/not-found')

}

const PagePost = async ({ params }) => {
  const slug = params?.slug
  const post = await getPostBySlug(slug)


  return (
    <main className={styles.main}>
      <Post post={post} />

      <div>
        <h2 style={{ color: 'white' }}>Código:</h2>
        <div className={styles.blockOfCode} dangerouslySetInnerHTML={{ __html: post.markdown }} ></div>
      </div>


    </main>



  )
}

export default PagePost