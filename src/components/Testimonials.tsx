import Testimonial from '../fragments/Testimonial'

import Slider from 'react-slick'

const testimonials = [
  {
    title: 'Excelente Cuidado e Carinho!',
    text: 'Fiquei impressionado com o nível de cuidado e atenção que minha gata recebeu enquanto eu estava viajando. Ela voltou para casa feliz e relaxada. Recomendo fortemente este serviço para todos os donos de gatos!',
    author: 'João P.',
    stars: 0,
  },
  {
    title: 'Serviço de Primeira Classe!',
    text: 'Minha gata é muito exigente, mas ela adorou o tempo que passou aqui. O ambiente é seguro e acolhedor, e os cuidadores são extremamente dedicados. Muito obrigado por cuidar tão bem dela!',
    author: 'Maria L.',
  },
  {
    title: 'Cuidado Confiável!',
    text: 'Sempre fico tranquila quando deixo meus gatos com vocês. Sei que estão em boas mãos e recebendo todo o carinho e atenção que precisam. Excelente serviço!',
    author: 'Ana C.',
  },
  {
    title: 'Amor e Dedicação!',
    text: 'É evidente que a equipe ama o que faz. Meus gatos receberam cuidados personalizados e muito amor durante minha ausência. Não poderia pedir por um serviço melhor!',
    author: 'Pedro M.',
  },
  {
    title: 'Ambiente Seguro e Acolhedor!',
    text: 'Deixar meus gatos com vocês foi a melhor decisão. O ambiente é muito seguro e acolhedor, e os cuidadores são fantásticos. Muito obrigada pelo excelente serviço!',
    author: 'Carla S.',
  },
]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
}

export default function Testimonials() {
  return (
    <div id="feedbacks" className="py-20">
      <div className="  flex flex-col lg:flex-row items-center gap-20 bg-secondary-60 py-32 md:px-12 px-4 overflow-hidden">
        <div className="relative lg:w-2/5 w-full text-neutral-98 ">
          <h2 className="font-bold text-4xl ">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg leading-8 pt-4 ">
            Nossos clientes confiam em nós para cuidar de seus amados gatos
            quando não podem estar presentes. Veja o que alguns de nossos
            clientes satisfeitos têm a dizer sobre a qualidade, segurança e
            carinho que oferecemos aos seus pets.
          </p>
        </div>
        <div className="relative lg:w-3/5 w-full">
          <span className="absolute z-10 w-32 -left-14 -top-10 ">
            <img src="./imgs/paws.svg" alt="" />
          </span>
          <span className="absolute w-28 -right-10 -bottom-8 ">
            <img src="./imgs/paws.svg" alt="" />
          </span>
          <Slider {...settings} className="bg-neutral-90 rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                title={testimonial.title}
                text={testimonial.text}
                author={testimonial.author}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
