import styles from '@/App.module.scss'
import { BlogCard } from '@/components'

export default function App() {
  return (
    <>
      <main className={styles.main}>
        <BlogCard
          thumbnail={'/illustration-article.svg'}
          tag='Learning'
          date='Published 21 Dec 2023'
          title='HTML & CSS foundations'
          description='These languages are the backbone of every website, defining structure, content, and presentation.'
          avatar='/image-avatar.webp'
          author='Greg Hooper'
        />
      </main>
    </>
  )
}
