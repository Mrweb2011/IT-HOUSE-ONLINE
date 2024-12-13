import YoshlarIshlari from "../../../imgs/YoshlarIshlari.png";
import UzumNasiya  from "../../../imgs/uzumnasiya.png";
import { Carousel } from "../../../ui/carousel";
import Autoplay from "embla-carousel-autoplay"

function Hamkorlar() {
  return (
    <div>
    <Carousel className='relative top-10 bg-secondary py-2 w-full h-20 flex px-20 justify-between'
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      
        <img src="https://ithouseonline.uz/assets/brands/nurinvest.svg" alt="Nurinvest logo" />
        <img className='w-52 h-16' src={YoshlarIshlari} alt="" />
        <svg className='mt-3' width="95" height="51" viewBox="0 0 95 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5283 0H0V22.1103C0 24.0736 0.326226 25.8437 0.978679 27.4207C1.63113 28.9977 2.53453 30.3414 3.68887 31.4517C4.84321 32.5621 6.23176 33.4149 7.85453 34.0103C9.4773 34.6057 11.2757 34.9034 13.2498 34.9034C15.1904 34.9034 16.9805 34.5897 18.62 33.9621C20.2595 33.3345 21.6731 32.4655 22.8609 31.3552C24.0487 30.2448 24.9689 28.9172 25.6213 27.3724C26.2738 25.8276 26.6 24.154 26.6 22.3517C26.6 20.131 26.2236 18.2322 25.4708 16.6552C24.7179 15.0782 23.7643 13.7828 22.61 12.769C21.4557 11.7552 20.1758 11.0069 18.7706 10.5241C17.3653 10.0414 16.0102 9.8 14.7053 9.8C13.0992 9.8 11.694 10.0816 10.4894 10.6448C9.28491 11.208 8.33132 11.9563 7.62868 12.8897H7.5283V0ZM17.3904 26.5517C16.3364 27.6138 14.9562 28.1448 13.2498 28.1448C11.5434 28.1448 10.1632 27.6138 9.10925 26.5517C8.05528 25.4897 7.5283 24.0897 7.5283 22.3517C7.5283 20.6138 8.05528 19.2138 9.10925 18.1517C10.1632 17.0897 11.5434 16.5586 13.2498 16.5586C14.9562 16.5586 16.3364 17.0897 17.3904 18.1517C18.4443 19.2138 18.9713 20.6138 18.9713 22.3517C18.9713 24.0897 18.4443 25.4897 17.3904 26.5517Z" fill="#191D31"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1638 7.38937C32.0196 8.21253 33.0854 8.62411 34.3613 8.62411C35.6371 8.62411 36.703 8.21253 37.5587 7.38937C38.4145 6.56622 38.8424 5.54101 38.8424 4.31376C38.8424 3.08651 38.4145 2.06131 37.5587 1.23815C36.703 0.414996 35.6371 0.00341797 34.3613 0.00341797C33.0854 0.00341797 32.0196 0.414996 31.1638 1.23815C30.308 2.06131 29.8801 3.08651 29.8801 4.31376C29.8801 5.54101 30.308 6.56622 31.1638 7.38937ZM30.6007 11.862V34.2758H38.129V11.862H30.6007Z" fill="#191D31"></path>
                            <path d="M43.9366 34.2759V0H51.4649V34.2759H43.9366Z" fill="#191D31"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.9146 34.9799C61.3782 34.9799 55.3868 29.8003 55.3868 22.2815C55.3868 15.5445 60.8942 9.65869 68.8527 9.65869C71.2438 9.65869 73.155 10.3649 73.155 10.3649L81.9711 9.65869V15.2107L80.2506 15.7782C80.2506 15.7782 82.2736 17.7719 82.2736 22.2652C82.2736 29.8956 76.067 34.9799 68.9146 34.9799ZM74.7453 22.4173C74.7453 19.3048 72.2118 16.7277 68.7698 16.7277C65.5088 16.7277 62.9151 19.2304 62.9151 22.4263C62.9151 25.3419 65.2124 28.1248 68.8628 28.1248C71.9521 28.1248 74.7453 25.7174 74.7453 22.4173Z" fill="#191D31"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M87.3214 7.38937C88.1771 8.21253 89.243 8.62411 90.5189 8.62411C91.7947 8.62411 92.8606 8.21253 93.7163 7.38937C94.5721 6.56622 95 5.54101 95 4.31376C95 3.08651 94.5721 2.06131 93.7163 1.23815C92.8606 0.414996 91.7947 0.00341797 90.5189 0.00341797C89.243 0.00341797 88.1771 0.414996 87.3214 1.23815C86.4656 2.06131 86.0377 3.08651 86.0377 4.31376C86.0377 5.54101 86.4656 6.56622 87.3214 7.38937ZM86.7583 11.862V34.2758H94.2866V11.862H86.7583Z" fill="#191D31"></path>
                            <path d="M81.734 36.2103L69.186 43.1069L56.6415 36.2103V43.1069L69.1878 50.0034L81.7358 43.1069V36.2103H81.734Z" fill="#7065F0"></path>
        </svg>
        <img className='w-52 h-52 -mt-16' src={UzumNasiya} alt="" />
    </Carousel>
    </div>
  )
}

export default Hamkorlar