import { PlayIcon } from '@heroicons/react/16/solid'

export default function HelpSection() {
  return (
    <div className="flex flex-col md:flex-row mb-24 gap-y-10 justify-around items-center">
      <div className="relative rounded-full w-40 h-28 mx-auto  bg-secondary-60 ">
        <a
          href="https://www.youtube.com/results?search_query=kittens"
          target="_blank"
          className=""
          rel="noreferrer"
        >
          <span className="hover:bg-gray-100 w-14 h-14 bg-white absolute rounded-full p-4 -top-3 -right-3">
            <PlayIcon color="black" />
          </span>
        </a>
        <img className="w-28 h-fit mx-auto" src="/imgs/cat3.png" alt="" />
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="text-lg text-gray-700">Como podemos ajudar?</h2>
        <h3 className="text-3xl font-bold text-black text-center">
          Durante suas férias ou no trabalho.
        </h3>
      </div>
      <div className="relative rounded-full w-40 h-28 mx-auto px-20 bg-secondary-30 overflow-visible">
        <img
          className="absolute -bottom-12 -left-3 max-w-60 h-fit mx-auto"
          src="/imgs/cat4.png"
          alt=""
        />
      </div>
    </div>
  )
}
