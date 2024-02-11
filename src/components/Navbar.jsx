import { useState } from 'react'
import { motion } from 'framer-motion'

import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from 'lucide-react'

import Logo from '../assets/Logo.png'
import RightArrowIcon from '../assets/icons/rightArrow.svg'
import { NavLink } from 'react-router-dom'
import { Car } from 'lucide-react'

const variants = {
  expanded: { width: '20%' },
  nonexpanded: { width: '6%' },
}

const items = [
  {
    href: '/',
    text: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/activity',
    text: 'Activity',
    icon: Clock4Icon,
  },
  {
    href: '/analytics',
    text: 'Analytics',
    icon: BarChart3Icon,
  },
  {
    href: '/transactions',
    text: 'Transactions',
    icon: ArrowLeftRightIcon,
  },
  {
    href: '/help',
    text: 'Help Center',
    icon: HelpCircleIcon,
  },
]

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <motion.div
      animate={isExpanded ? 'expanded' : 'nonexpanded'}
      variants={variants}
      className={
        'py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative shrink-0' +
        (isExpanded ? ' px-10' : ' px-6 items-center')
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img
          src={RightArrowIcon}
          className={'w-2 ' + (isExpanded ? 'rotate-180' : 'rotate-0')}
        />
      </div>

      <div className="logo-div flex space-x-4 items-center">
        <Car className="animate-bounce" />
        <span className={'font-semibold ' + (!isExpanded ? 'hidden' : 'block')}>
          Accident Analysis App
        </span>
      </div>
      <ul className="flex flex-col space-y-8 mt-12 navbar">
        {items.map((item, index) => (
          <li key={index} className="nav-links w-full">
            <NavLink
              to={item.href}
              className={
                'flex space-x-3 w-full p-2 rounded hover:bg-neutral-100 ' +
                (!isExpanded && 'justify-center')
              }
            >
              <item.icon />
              <span className={!isExpanded ? 'hidden' : 'block'}>
                {item.text}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Navbar
