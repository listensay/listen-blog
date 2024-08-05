import { memo } from "react";

const Menu = memo(() => {
  return (
    <div className="h-full w-64 bg-[#0c0b24]">
      <h1 className="text-[#b082e7] font-bold text-xl h-16 flex justify-center items-center">Milk Homepage</h1>

      <nav className="ml-6 mt-6">
        <ul>
          <li className="mb-4 text-white cursor-pointer hover:text-[#b082e7]">
            <span>Blog</span>
          </li>
          <li className="mb-4 text-white cursor-pointer hover:text-[#b082e7]">
            <span>Category</span>
          </li>
          <li className="mb-4 text-white cursor-pointer hover:text-[#b082e7]">
            <span>About</span>
          </li>
        </ul>
      </nav>
    </div>
  )
})

Menu.displayName = "Menu"

export default Menu