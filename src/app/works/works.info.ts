import { StaticImageData } from "next/image"
import Retrofolio from '../../resources/retrofolio.png'
import CirclePainter  from '../../resources/circle-painter.png'
import Blackjack  from '../../resources/blackjack.png'
import WeatherMain from '../../resources/weathermain.png'
import Counter  from '../../resources/counter.png'
import Travel from '../../resources/travel.jpeg'
import HTMLIcon from '../../resources/HTML-icon.svg'
import CSSIcon from '../../resources/CSS-icon.svg'
import JSIcon from '../../resources/JS-icon.svg'
import TSIcon from '../../resources/typescript.svg'
import ReactIcon from '../../resources/React-icon.svg'
import SvelteIcon from '../../resources/svelte.png'
import SassIcon from '../../resources/Sass-icon.svg'
import GitIcon from '../../resources/Git-icon.svg'

type Project = {
  name: string,
  href: string,
  img: StaticImageData,
  tags: StaticImageData[],
  repo: string,
  status?: string
}

type Skill = {
  name: string,
  color: string,
}

export const skills:Skill[] = [
  {
    name: 'HTML',
    color: 'text-accentOrange',
  },
  {
    name: 'CSS',
    color: 'text-accentBlue',
  },
  {
    name: 'JavaScript',
    color: 'text-yellow-300',
  },
  {
    name: 'React',
    color: 'text-blue-300',
  },
  {
    name: 'Sass',
    color: 'text-pink-500',
  },
  {
    name: 'TypeScript',
    color: 'text-accentBlue',
  },
  {
    name: 'Tailwind',
    color: 'text-accentGreen',
  },
  {
    name: 'Git',
    color: 'text-accentOrange',
  },
  {
    name: 'Bootstrap',
    color: 'text-purple-500',
  },
  {
    name: 'Svelte',
    color: 'text-red-400',
  },
  {
    name: 'SQL',
    color: 'text-amber-200',
  },
  {
    name: 'PostgreSQL',
    color: 'text-sky-600',
  },
  {
    name: 'NodeJS',
    color: 'text-lime-600',
  },
  {
    name: 'ExpressJS',
    color: 'text-slate-300',
  },
  {
    name: 'Supabase',
    color: 'text-emerald-400'
  }
]

export const projects:Project[] = [
  {
    name: 'WeatherMain',
    href: 'https://weathermain.vercel.app',
    img: WeatherMain,
    tags: [HTMLIcon, CSSIcon, TSIcon, SvelteIcon],
    repo: 'https://github.com/Jpaulsisson/weather-main',
  },
  {
    name: 'Retrofolio',
    href: 'https://jpaulsisson.netlify.app/',
    img: Retrofolio,
    tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
    repo: 'https://github.com/Jpaulsisson/portfolio-site'
  },
  {
    name: 'Blackjack',
    href: 'https://jpaulsisson-blackjack.netlify.app/',
    img: Blackjack,
    tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
    repo: 'https://github.com/Jpaulsisson/blackjack',
  },
  {
    name: 'Circle Painter',
    href: 'https://circle-paint.netlify.app/',
    img: CirclePainter,
    tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
    repo: 'https://github.com/Jpaulsisson/circle-generator-app',
  },
  {
    name: 'Customizable Counter',
    href: 'https://customizable-counter.netlify.app',
    img: Counter,
    tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
    repo: 'https://github.com/Jpaulsisson/wds-react-hooks-course/tree/main',
  },
]

export const current:Project = {
  name: 'Travel Planner',
  href: '#',
  img: Travel,
  tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
  repo: '#',
  status: 'Gathering API keys and wireframing'
};

