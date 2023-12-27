import styles from '@/components/BlogCard/BlogCard.module.scss'

type BlogCardProps = {
  thumbnail: string
  tag: string
  date: string
  title: string
  description: string
  avatar: string
  author: string
}

export default function BlogCard({
  thumbnail,
  tag,
  date,
  title,
  description,
  avatar,
  author,
}: BlogCardProps) {
  return (
    <article className={styles.card}>
      <img
        className={styles.thumbnail}
        src={thumbnail}
        alt={`Thumbnail image for blog article ${title}`}
      />
      <div className={styles.content}>
        <div className={styles.tag}>
          <span>{tag}</span>
        </div>

        <time className={styles.date}>{date}</time>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.creator}>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`Avatar of ${author}`}
        />
        <span className={styles.author}>{author}</span>
      </div>
    </article>
  )
}
