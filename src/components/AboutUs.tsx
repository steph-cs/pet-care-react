export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="flex lg:flex-row flex-col gap-20 md:w-4/5 w-11/12 mx-auto py-28 items-center"
    >
      <div className="w-full text-primary-5">
        <h2 className="font-bold text-6xl text-secondary-30 mb-6">Sobre Nós</h2>
        <p className="text-lg leading-8 mb-4">
          Bem-vindo ao <span className="font-bold">Cat.Care</span> , onde sua
          tranquilidade e o bem-estar dos seus felinos são nossa prioridade.
          Fundada por amantes de gatos dedicados, nossa missão é proporcionar um
          ambiente seguro, confortável e cheio de amor para seus gatos quando
          você não pode estar presente.
        </p>
        <p className="text-lg leading-8 mb-4">
          Nossos cuidadores são altamente treinados e apaixonados pelo que
          fazem. Cada membro da equipe é cuidadosamente selecionado e passa por
          rigorosos processos de treinamento para garantir que seu gato receba a
          melhor atenção possível. Sabemos que cada gato é único, e é por isso
          que oferecemos cuidados personalizados para atender às necessidades
          individuais de cada felino.
        </p>
        <p className="text-lg leading-8 mb-4">
          No Cat.Care, acreditamos que a chave para um cuidado excelente é a
          combinação de amor, segurança e conforto. Nossas instalações são
          equipadas com as mais modernas tecnologias para garantir um ambiente
          seguro e estimulante para seu gato. Além disso, nossos espaços são
          projetados para proporcionar conforto e diversão, fazendo com que seu
          gato se sinta em casa.
        </p>
        <p className="text-lg leading-8">
          Seja uma viagem longa ou um dia ocupado, estamos aqui para garantir
          que seu gato receba todo o carinho e cuidado que ele merece. Confie no
          Cat.Care e experimente a diferença de um serviço de pet care dedicado
          e apaixonado.
        </p>
      </div>
      <div className="max-w-md rounded-t-full overflow-hidden">
        <img src="./imgs/about-us.jpg" alt="" />
      </div>
    </div>
  )
}
