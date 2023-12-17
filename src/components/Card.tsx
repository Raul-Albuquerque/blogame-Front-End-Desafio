type Props = {
  date: string
  title: string
  image: string
  altDescription: string
}

export default function Card({ altDescription, date, image, title }: Props) {
  return (
    <section className="bg-dark10 rounded h-[360px] w-[100%] relative">
      <img
        src={image}
        alt={altDescription}
        className="object-cover rounded w-[100%] h-[100%] bg-dark10 opacity-50"
      />
      <article className="absolute bottom-5 left-5 text-dark30 mr-5">
        <p className="text-base">{date}</p>
        <h4 className="mt-3 text-2xl sm:text-4xl">{title}</h4>
      </article>
    </section>
  )
}
