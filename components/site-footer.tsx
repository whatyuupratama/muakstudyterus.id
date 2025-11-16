import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';

const footerSocials = [
  {
    href: 'https://www.instagram.com/muakstudyterus.id/',
    name: 'Instagram',
    icon: <FaInstagram className='h-4 w-4' />,
  },
  {
    href: 'mailto:wahyufiver.id@gmail.com?subject=Customer%20Service%20Report',
    name: 'Customer Service',
    icon: <RiCustomerService2Fill className='h-4 w-4' />,
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className='mx-auto w-full max-w-screen-xl xl:pb-2'>
        <div className='md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4'>
          {/* <div className='mb-12 flex-col flex gap-4'>
            <Link href='/' className='flex items-center gap-2'>
              <img
                src='https://magicui.design/icon.png'
                className='h-8 w-8 text-primary'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Magic UI
              </span>
            </Link>
            <p className='max-w-xs'>UI Library for Design Engineers</p>
          </div> */}
          <div className='grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3'></div>
        </div>

        <div className='flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2'>
          <div className='flex space-x-5 sm:justify-center sm:mt-0'>
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target='_blank'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600'
              >
                {social.icon}
                <span className='sr-only'>{social.name}</span>
              </Link>
            ))}
          </div>
          <span className='text-[12px] text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <Link href='/' className='cursor-pointer'>
              muakstudyterus.id 2025.
            </Link>
            All rights reserved.
          </span>
        </div>
      </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}
