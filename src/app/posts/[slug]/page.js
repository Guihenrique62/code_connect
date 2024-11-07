import { CardPost } from "@/components/CardPost"
import { Post } from "@/components/Post";
import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';
import styles from './page.module.css'
import { TextInput } from "@/components/TextInput";

async function getPostBySlug(slug) {

  const url = `http://localhost:3042/posts?slug=${slug}`
  const response = await fetch(url)
  if (!response.ok) {
    logger.error('Erro ao requisitar dados!')
    return {}
  }

  logger.info('Post detalhado obtido com sucesso!')

  const data = await response.json()
  if (data.length == 0) {
    return {}
  }
  const post = data[0]

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml

  return post
}

const PagePost = async ({ params }) => {
  const slug = params?.slug
  const post = await getPostBySlug(slug)


  return (
    <main className={styles.main}>
      <TextInput />
      <Post post={post}/>
      
      <div>
        <h2 style={{color: 'white'}}>Código:</h2>
        <div className={styles.blockOfCode} dangerouslySetInnerHTML={{ __html: post.markdown }} ></div>
      </div>
      
      
    </main>



  )
}

export default PagePost