import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import { AuthProviders } from '.';

const Navbar = () => {
  const session = null;

  return (
    <div className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={115} height={43} />
        </Link>

        <ul className='xl:flex hidden text-sm gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session ? (
          <>
            UserPhoto
            <Link href='/create-project'>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </div>
  );
};

export default Navbar;
