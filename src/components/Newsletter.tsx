import React, { FormEvent } from 'react'
import Toast from '../fragments/Toast'
import Confetti from 'react-confetti-boom'

const Newsletter = () => {
  const [showToast, setShowToast] = React.useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 4000)
  }
  return (
    <div className="relative px-16 py-32 lg:w-3/5 flex flex-col mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Se inscreva na Newsletter & receba Cat.care News
        </h2>
        <p className="mx-auto mt-4 text-md leading-8 text-secondary-10">
          Fique por dentro das últimas novidades, dicas de cuidados, e histórias
          inspiradoras sobre nossos felinos.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex w-full md:w-3/4 mx-auto gap-x-4 bg-white rounded-3xl px-1 py-1"
      >
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Insira seu email"
          autoComplete="email"
          className="min-w-0 flex-auto rounded-xl px-3 py-4 shadow-none text-black sm:text-sm sm:leading-6 focus:outline-none focus:outline "
        />
        <button
          type="submit"
          className="rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-30"
        >
          Inscrever-me
        </button>
      </form>

      {showToast && (
        <>
          <Toast text="Inscrição bem-sucedida!" />{' '}
          <div className="w-1/2 absolute top-0 right-0">
            <Confetti
              mode="boom"
              particleCount={50}
              deg={220}
              colors={['#286956', '#5D9D87']}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Newsletter
