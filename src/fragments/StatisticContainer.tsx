import React, { ReactElement } from 'react'

type Props = {
  icon: ReactElement
  statistic: string
  title: string
}

export default function StatisticContainer(props: Props) {
  const { icon, statistic, title } = props
  return (
    <div className="bg-white rounded-3xl w-full px-10 py-9  flex flex-col items-center gap-y-3 lg:m-0 mb-4">
      <div className="w-16 h-16 bg-secondary-80 rounded-full p-3">{icon}</div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-4xl">{statistic}</h3>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  )
}
