import Link from "next/link";
import Image from "next/image";
import { getAssetUrl } from "@/lib/assets";

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-48'>
      <Link href='/wiki'>
        <span className='mr-5 cursor-pointer font-cursive text-2xl font-bold tracking-wide text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out'>
          Wiki
        </span>
      </Link>

      <Link href='/bestiary'>
        <span className='mr-5 cursor-pointer font-cursive text-2xl font-bold tracking-wide text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out'>
          Bestiary
        </span>
      </Link>

      {/* Logo in the center */}

      <div className='text-center relative h-48 w-96 cursor-pointer text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out'>
        <Link href='/'>
          <div className='relative w-full h-full'>
            <Image
              src={getAssetUrl("mia_logo.png")}
              alt='Logo'
              fill={true}
              className='object-fit'
            />
          </div>
        </Link>
      </div>

      <Link href='/news'>
        <span className='mr-5 cursor-pointer font-cursive text-2xl font-bold tracking-wide text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out'>
          News
        </span>
      </Link>

      <Link href='/gallery'>
        <span className='mr-5 cursor-pointer font-cursive text-2xl font-bold tracking-wide text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out'>
          Gallery
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
