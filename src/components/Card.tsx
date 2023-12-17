type Props = {
  date: string
  title: string
  image: string
  altDescription: string
  grow?: boolean
}

export default function Card({
  altDescription,
  date,
  image,
  title,
  grow,
}: Props) {
  return (
    <>
      {grow ? (
        <section className="bg-dark10 rounded h-[360px] w-[100%] relative lg:h-[500px] lg:grow cursor-pointer">
          <img
            src={image}
            alt={altDescription}
            className="object-cover rounded w-[100%] h-[100%] bg-dark10 opacity-50"
          />
          <article className="absolute bottom-5 left-5 text-dark30 mr-5">
            <p className="text-base">{date}</p>
            <h4 className="mt-3 text-2xl sm:text-4xl lg:text-3xl">{title}</h4>
          </article>
        </section>
      ) : (
        <section className="bg-dark10 rounded h-[360px] w-[100%] relative lg:h-[500px] lg:max-w-[384px] lg:flex-1 cursor-pointer">
          <img
            src={image}
            alt={altDescription}
            className="object-cover rounded w-[100%] h-[100%] bg-dark10 opacity-50 lg:max-w-[384px]"
          />
          <article className="absolute bottom-5 left-5 text-dark30 mr-5">
            <p className="text-base">{date}</p>
            <h4 className="mt-3 text-2xl sm:text-4xl lg:text-2xl">{title}</h4>
          </article>
        </section>
      )}
    </>
  )
}
