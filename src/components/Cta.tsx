export default function Cta() {
  return (
    <div
      id="home"
      className=" md:w-4/5 w-11/12 mx-auto my-16 flex flex-col lg:flex-row justify-center items-center gap-16 border-b-2 py-16 border-gray-300"
    >
      <div className="w-full lg:w-2/4">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
          Love & Care
          <br />
          For Your Cats
        </h2>
        <p className="mt-6 text-lg leading-8 text-black">
          Nosso serviço de pet care para gatos oferece um ambiente seguro,
          confortável e cheio de amor para seus felinos quando você não pode
          estar presente.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a
            href="tel:489999999999"
            className="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 hover:text-black"
          >
            Agendar Agora
          </a>
          <a
            href="#about-us"
            className="px-5 py-3 text-sm font-semibold rounded-3xl text-gray-900 hover:bg-gray-100 hover:text-black"
          >
            Saiba Mais
          </a>
        </div>
      </div>
      <div className="max-w-xl flex justify-center gap-10 mt-6 lg:mt-0">
        <img
          className="rounded-t-full w-2/3 h-fit"
          src="/imgs/cat1.jpg"
          alt="Cat 1"
        />
        <img
          className="rounded-t-full w-1/3 h-fit"
          src="/imgs/cat2.jpg"
          alt="Cat 2"
        />
      </div>
    </div>
  )
}
