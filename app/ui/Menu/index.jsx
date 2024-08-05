'use client';

import { memo, useState } from "react";
import styles from './menu.module.css'
const Menu = memo(() => {

  const [navgation] = useState([
    {
      id: 1,
      name: 'Blog',
      path: '/blog'
    },
    {
      id: 2,
      name: 'Category',
      path: '/category'
    },
    {
      id: 3,
      name: 'About',
      path: '/about'
    }
  ])

  const [active, setActive] = useState(1)

  return (
    <div className="h-full w-64 bg-[#0c0b24]">
      <h1 className="text-[#b082e7] font-bold text-xl h-16 flex justify-center items-center">Milk Homepage</h1>

      <nav className="ml-6 mt-6">
        <ul>
          {
            navgation.map(item => {
              return (
                <li 
                  className={`mb-4 text-white cursor-pointer hover:text-[#b082e7] ${active === item.id ? styles.active : ''}`}
                  key={item.id}
                  onClick={ () => setActive(item.id) }
                >
                  <span>{ item.name }</span>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
})

Menu.displayName = "Menu"

export default Menu