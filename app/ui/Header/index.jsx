import { memo } from 'react'

const Header = memo(() => {
  return (
    <div className='px-6 h-16 flex justify-end items-center'>
      Header
    </div>
  )
})

Header.displayName = "Header"

export default Header