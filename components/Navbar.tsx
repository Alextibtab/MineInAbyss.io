import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-24'>
      <Link href='/wiki'>
        <span className='mr-5 cursor-pointer font-cursive'>Wiki</span>
      </Link>

      <Link href='/bestiary'>
        <span className='mr-5 cursor-pointer font-cursive'>Bestiary</span>
      </Link>

      {/* Logo in the center */}

      <div className='text-center relative h-24 w-48 cursor-pointer'>
        <Link href='/'>
          <div className='relative w-full h-full'>
            <Image
              src='/mia_logo.png'
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
