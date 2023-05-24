import InputSearch from '../input-search'
import Navigation from '../navigation'
import logo from './logo.png'

export default function Header() {
  return (
    <header  className='bg-white h-[5.3rem] flex items-center justify-center gap-5 border-b-[1px]'>
      <img className='w-[9.3rem] ml-[5rem]'  src={logo}/>
      <InputSearch  />
      <Navigation  />
    </header>
  )
}