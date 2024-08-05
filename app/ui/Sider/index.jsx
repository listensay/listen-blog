import { memo } from "react";

const Sider = memo(() => {
  return (
    <div className="h-full w-64">
      <nav className="ml-6">
        <h2 className="mb-6">最多人看的文章</h2>
        <ul>
          <li className="mb-4 text-white cursor-pointer hover:text-[#b082e7]">
            <span>Home</span>
          </li>
          <li className="mb-4 text-white cursor-pointer hover:text-[#b082e7]">
            <span>Category</span>
          </li>
          <li className="mb-4 text-white cursor-pointer hover:text-[#b082e7]">
            <span>About</span>
          </li>
        </ul>
        <h2 className="mb-6">最多人评论的文章</h2>
        <ul>
          <li className="mb-4 text-white cursor-pointer hover:text-[#b082e7]">
            <span>Home</span>
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

Sider.displayName = "Sider"

export default Sider