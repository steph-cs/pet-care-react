export default function Header() {
  const navLinks = [
    { label: 'Home', link: '#' },
    { label: 'Sobre nós', link: '#about-us' },
    { label: 'Feedbacks', link: '#feedbacks' },
  ]
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
                  className="text-sm font-semibold leading-6 text-gray-900 active:text-red-700"
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
