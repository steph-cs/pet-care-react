import StatisticContainer from '../fragments/StatisticContainer'
import {
  UserGroupIcon,
  TrophyIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const statistics = [
  {
    icon: <TrophyIcon />,
    number: '20+',
    title: 'Premiações',
  },
  {
    icon: <GlobeAmericasIcon />,
    number: '8+',
    title: 'Estados',
  },
  {
    icon: <UserGroupIcon />,
    number: '10K',
    title: 'Clientes',
  },
  {
    icon: <ShieldCheckIcon />,
    number: '99%',
    title: 'Proteção',
  },
]

export default function Statistics() {
  return (
    <div className="bg-neutral-95 rounded-3xl md:w-4/5 w-11/12 md:px-20 px-8 py-14  mx-auto ">
      <h2 className="text-4xl font-bold mb-8">
        Por Que Escolher Nossos Serviços?
      </h2>
      <div className="md:columns-2 lg:columns-4 columns-1">
        {statistics.map((statistic, index) => (
          <StatisticContainer
            key={index}
            icon={statistic.icon}
            title={statistic.title}
            statistic={statistic.number}
          />
        ))}
      </div>
    </div>
  )
}
