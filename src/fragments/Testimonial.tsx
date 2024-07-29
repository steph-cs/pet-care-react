type Props = {
  title: string
  text: string
  author: string
}

export default function Testimonial(props: Props) {
  const { title, text, author } = props
  return (
    <section className="w-full px-8 py-16">
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-secondary-35">
        <h3 className="text-2xl font-bold ">{title}</h3>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9">
            <p>“{text}”</p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex items-center  text-base">
              <div className="font-semibold ">{author}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
