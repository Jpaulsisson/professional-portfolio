import { StaticImageData } from "next/image"
import Retrofolio from '../../resources/retrofolio.png'
import CirclePainter  from '../../resources/circle-painter.png'
import Blackjack  from '../../resources/blackjack.png'
import WeatherMain from '../../resources/weathermain.png'
import SmiteMeta  from '../../resources/smite-meta.png'
import Travel from '../../resources/travel.jpeg'
import HTMLIcon from '../../resources/HTML-icon.svg'
import CSSIcon from '../../resources/CSS-icon.svg'
import JSIcon from '../../resources/JS-icon.svg'
import TSIcon from '../../resources/typescript.svg'
import ReactIcon from '../../resources/React-icon.svg'
import SvelteIcon from '../../resources/svelte.png'
import SassIcon from '../../resources/Sass-icon.svg'
import GitIcon from '../../resources/Git-icon.svg'
import NextIcon from '../../resources/next-icon.svg'

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
    name: 'TypeScript',
    color: 'text-accentBlue',
  },
  {
    name: 'React',
    color: 'text-blue-300',
  },
  {
    name: 'Next',
    color: 'text-slate-300',
  },
  {
    name: 'Svelte',
    color: 'text-red-400',
  },
  {
    name: 'Sass',
    color: 'text-pink-500',
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
    name: 'SQL',
    color: 'text-amber-200',
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
    name: 'PostgreSQL',
    color: 'text-sky-600',
  },
  {
    name: 'Supabase',
    color: 'text-emerald-400'
  }
]

export const projects:Project[] = [
  {
    name: 'Smite Meta',
    href: 'https://smite-meta.vercel.app/',
    img: SmiteMeta,
    tags: [HTMLIcon, CSSIcon, TSIcon, ReactIcon, NextIcon],
    repo: 'https://github.com/Jpaulsisson/smite_meta',
  },
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
]

export const current:Project = {
  name: 'Travel Planner',
  href: '#',
  img: Travel,
  tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
  repo: '#',
  status: 'Gathering API keys and wireframing'
};

