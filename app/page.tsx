import Menu from './ui/Menu'
import Header from './ui/Header'
import Sider from './ui/Sider'
export default function Home() {
  return (
    <main className="wrap-base bg h-[90vh] my-auto">
      <div className="flex h-full">
        <Menu />
        <div className='flex-1'>
          <Header />
          <div className='flex justify-between'>
            <div className='flex-1'>
              <div className='w-full h-80 bg-[#3C37D2] p-8'>
                <h2 className='text-3xl mb-2'>Welcom to</h2>
                <h2 className='text-3xl mb-2'>Milk Homepage</h2>
                <div className='text-sm text-gray-300'>Listen a 22 years old boy story</div>
              </div>
            </div>
            <Sider />
          </div>
        </div>
      </div>
    </main>
  );
}
