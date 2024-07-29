type Props = {
  text: string
}

export default function Toast({ text }: Props) {
  return (
    <div className="fixed top-0 right-0 p-4 m-8 bg-primary-35 text-white z-30 rounded-lg">
      <div className="flex gap-4">
        <span className="">🎉</span>
        <p>{text}</p>
      </div>
    </div>
  )
}
