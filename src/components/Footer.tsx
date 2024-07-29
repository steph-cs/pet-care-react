export default function Footer() {
  const social = [
    {
      label: 'Facebook',
      link: '#',
      icon: <i className="fa-brands fa-facebook-f"></i>,
    },
    {
      label: 'Instagram',
      link: '#',
      icon: <i className="fa-brands fa-instagram"></i>,
    },
    {
      label: 'X',
      link: '#',
      icon: <i className="fa-brands fa-x-twitter"></i>,
    },
  ]

  const footerLinks = [
    {
      title: 'Links',
      links: [
        { label: 'Home', link: '#' },
        { label: 'Sobre nós', link: '#about-us' },
        { label: 'Feedbacks', link: '#feedbacks' },
      ],
    },
  ]

  return (
    <footer className="flex md:flex-row flex-col items-center px-16 py-16 gap-y-4 bg-neutral-95 text-primary-5">
      <div>
        <div className="font-bold text-3xl text-secondary-15 pb-4">
          Cat<span className="text-primary-80">.</span>Care
        </div>
        <div>
          <h3 className="font-bold text-lg text-primary-10">
            Horários de funcionamento
          </h3>
          <p>Seg - Dom: 10h - 16h</p>
        </div>
        <div className="my-6">
          <ul className="flex gap-4 text-black">
            {social.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  className="bg-white rounded-full py-3 px-4 hover:bg-gray-300"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:ml-auto flex gap-x-20 gap-y-4 flex-col md:flex-row">
        {/* endereco */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg text-primary-10">Endereço</h3>
          <a
            className="hover:underline"
            href="https://maps.app.goo.gl/YgcUQEVFYm8BZMmq9"
            target="_blank"
            rel="noreferrer"
          >
            Florianópolis - Santa Catarina
          </a>
          <a className="hover:underline" href="tel:48999999999">
            (48) 9 9999-9999
          </a>
          <a className="hover:underline" href="mailto:catcare@contato.com">
            catcare@contato.com
          </a>
        </div>
        {footerLinks.map((linkSection, index) => (
          <div key={linkSection.title + index}>
            <h3 className="font-bold text-lg text-primary-10">
              {linkSection.title}
            </h3>
            <ul>
              {linkSection.links.map((link, index) => (
                <li key={index}>
                  <a className="hover:underline" href={link.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
