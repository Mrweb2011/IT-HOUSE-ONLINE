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
    <header className='flex justify-center py-2 bg-white z-10 fixed mx-72'>
      <div className="flex justify-between gap-72">
      <div className='flex items-center gap-5'>
        <div className="flex gap-2 items-center">
          <button className='flex items-center gap-2'>
          <img className='w-9 mt-2' src={Logo} alt="" />
          <h1 className='font-semibold text-2xl'>IT HOUSE</h1>
          </button>
        </div>
      <ul className='flex gap-3 items-center font-semibold text-xs'>
        <li className='text-blue-600'>Bosh sahifa</li>
        <li className='hover:text-blue-600 transition'>Kurslar</li>
        <li className='hover:text-blue-600 transition'>Treyding</li>
        <li className='hover:text-blue-600 transition'>Aloqa</li>
      </ul>
      </div>
      <div className="flex gap-2 items-center">
        <button className='bg-none border-none text-xl p-1 hover:bg-gray-100 rounded'><IoSearchOutline /></button>
        <button className='bg-none border-none text-xl p-1 hover:bg-gray-100 rounded'><LuLanguages /></button>
        <button className='bg-none border-none text-xl p-1 hover:bg-gray-100 rounded'><FiBell /></button>
        <button className='bg-none border-none text-xl p-1 hover:bg-gray-100 rounded'><SlBasket /></button>
        <button className='bg-none border-none text-xl p-1 hover:bg-gray-100 rounded'><LuMoon /></button>
        <button className='bg-red-500 text-white py-3 px-7 text-xs rounded-3xl'>Kirish</button>
      </div>
      </div>
    </header>
    <hr />
    <div className="flex justify-center mt-40">
      <div className="flex justify-between gap-10">
        <div className="column">
          <h1 className='text-4xl font-bold'>Kelajak kasblarini <br />o`rganishni hoziroq <span className='text-blue-600'>biz <br />bilan boshlang.</span></h1>
          <h4 className='text-gray-400 mt-3 text-xs'>IT sohasidagi barcha sifatli kurslar. Biz bilan IT sohasini o'rganish endi <br />yanada osonroq shunchaki boshlang.</h4>
          <button className='py-2 font-semibold mt-5 text-xs px-5 border-2 rounded-3xl hover:bg-gray-100 transition'>Kurslarni toping</button>
        </div>
        <img className='w-96' src={BigImg} alt="" />
      </div>
    </div>
  </>
  )
}

export default App
