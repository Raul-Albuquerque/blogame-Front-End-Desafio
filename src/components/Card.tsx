type Props = {
  date: string
  title: string
  image: string
  altDescription: string
}

export default function Card({ altDescription, date, image, title }: Props) {
  return (
    <section className="bg-dark10 relative  rounded h-[360px] w-[100%]">
      <img
        src={image}
        alt={altDescription}
        className="object-cover w-[100%] h-[100%]"
      />
      <article className="absolute bottom-5 left-5 text-dark30 font-nunito">
        <p className="text-base">{date}</p>
        <h4 className="text-2xl mt-3">{title}</h4>
      </article>
    </section>
  )
}
