import Link from "next/link";
import Image from "next/image";
import { addBasePath } from "next/dist/client/add-base-path";

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-48'>
      <Link href='/wiki'>
        <span className='mr-5 cursor-pointer font-cursive'>Wiki</span>
      </Link>

      <Link href='/bestiary'>
        <span className='mr-5 cursor-pointer font-cursive'>Bestiary</span>
      </Link>

      {/* Logo in the center */}

      <div className='text-center relative h-48 w-96 cursor-pointer'>
        <Link href='/'>
          <div className='relative w-full h-full'>
            <Image
              src={addBasePath("/mia_logo.png")}
              alt='Logo'
              fill={true}
              className='object-fit'
            />
          </div>
        </Link>
      </div>

      <Link href='/news'>
        <span className='mr-5 cursor-pointer font-cursive'>News</span>
      </Link>

      <Link href='/discord'>
        <span className='mr-5 cursor-pointer font-cursive'>Discord</span>
      </Link>
    </nav>
  );
};

export default Navbar;
