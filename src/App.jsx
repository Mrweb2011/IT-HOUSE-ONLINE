import './App.css';
import Logo from "./components/logo.png";
import BigImg from "./components/hero.png";
import { IoSearchOutline } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { LuMoon } from "react-icons/lu";

function App() {
  return (
  <>
    <header className='flex py-3 bg-white z-10 fixed px-16'>
      <div className="flex justify-between gap-96">
      <div className='flex items-center gap-5'>
        <div className="flex gap-2 items-center">
          <button className='flex items-center gap-2'>
          <img className='w-11 mt-2' src={Logo} alt="" />
          <h1 className='font-bold text-3xl'>IT HOUSE</h1>
          </button>
        </div>
      <ul className='flex gap-3 items-center font-bold'>
        <li className='text-blue-600'>Bosh sahifa</li>
        <li className='hover:text-blue-600 transition'>Kurslar</li>
        <li className='hover:text-blue-600 transition'>Treyding</li>
        <li className='hover:text-blue-600 transition'>Aloqa</li>
      </ul>
      </div>
      <div className="flex gap-2 items-center">
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><IoSearchOutline /></button>
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><LuLanguages /></button>
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><FiBell /></button>
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><SlBasket /></button>
        <button className='bg-none border-none text-2xl p-2 hover:bg-gray-100 rounded-lg'><LuMoon /></button>
        <button className='bg-red-500 text-white py-3 px-9 rounded-3xl'>Kirish</button>
      </div>
      </div>
    </header>
    <hr />
    <div className="flex justify-center mt-40">
      <div className="flex justify-between gap-10">
        <div className="column">
          <h1 className='text-5xl font-bold'>Kelajak kasblarini <br />o`rganishni hoziroq <span className='text-blue-600'>biz <br />bilan boshlang.</span></h1>
          <h4 className='text-gray-400 mt-3'>IT sohasidagi barcha sifatli kurslar. Biz bilan IT sohasini o'rganish endi <br />yanada osonroq shunchaki boshlang.</h4>
          <button className='py-3 font-semibold mt-5 px-9 border-2 rounded-full hover:bg-gray-100 transition'>Kurslarni toping</button>
        </div>
        <img className='' src={BigImg} alt="" />
      </div>
    </div>
  </>
  )
}

export default App
