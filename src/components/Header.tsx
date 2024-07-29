import React from 'react'

const navLinks = [
  { label: 'Home', link: '#home' },
  { label: 'Sobre nós', link: '#about-us' },
  { label: 'Feedbacks', link: '#feedbacks' },
]

export default function Header() {
  const [activeLink, setActiveLink] = React.useState('#home')

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      navLinks.forEach((navLink) => {
        const section = document.querySelector(navLink.link) as HTMLElement
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(navLink.link)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const mobileView = false
  return (
    <nav className=" w-full mx-auto fixed top-0 z-30 bg-neutral-90">
      <div className="border-b-neutral-80 border-b-2 mx-8 flex justify-between  py-6 px-5">
        <div className="">
          <a href="#" className="">
            <h1 className="font-semibold ">Cat.Care</h1>
          </a>
        </div>

        {!mobileView && (
          <div className="flex gap-6">
            {navLinks.map((navLink, index) => (
              <div key={index} className="relative">
                <a
                  href={navLink.link}
                  className={`text-sm font-semibold leading-6 ${
                    activeLink === navLink.link
                      ? 'border-b-2 border-b-primary-60'
                      : ''
                  }`}
                >
                  {navLink.label}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
