import { DiscordLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';

const footerSocials = [
  {
    href: 'https://www.instagram.com/bisaselesai.ids/',
    name: 'Instagram',
    icon: <FaInstagram className='h-4 w-4' />,
  },
  {
    href: 'https://discord.gg/58z2GKNd',
    name: 'Discord',
    icon: <DiscordLogoIcon className='h-4 w-4' />,
  },
  {
    href: 'mailto:wahyufiver.id@gmail.com?subject=Customer%20Service%20Report',
    name: 'Customer Service',
    icon: <RiCustomerService2Fill className='h-4 w-4' />,
  },
];

export function SiteFooter() {
  return (
    <footer className='fixed bottom-0 left-0 w-full z-50  pointer-events-none'>
      <div className='mx-auto w-full max-w-screen-xl xl:pb-2'>
        <div className='md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4'>
          <div className='mb-12 flex-col flex gap-4'>
            <div className='group inline-flex items-center gap-4 pointer-events-auto'>
              <img
                src='/icon2.png'
                alt='logo'
                className='h-36 w-36 text-primary'
              />
              <span
                className='opacity-0 border-dashed translate-x-2 transition-all duration-200 ease-in-out text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:opacity-100 group-hover:translate-x-0 px-3 py-1 
  rounded-lg bg-white/60 dark:bg-black/40 backdrop-blur border border-gray-300/30 shadow-sm '
                aria-hidden='true'
              >
                Alloow Pimokers! Pimo siap bantu. 👋🏻
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md py-4 px-8 gap-2 bg-white/80 dark:bg-black/60 backdrop-blur border-t border-neutral-200/30 dark:border-neutral-800/30'>
          <div className='flex space-x-5 sm:justify-center sm:mt-0'>
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target='_blank'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600 pointer-events-auto'
              >
                {social.icon}
                <span className='sr-only'>{social.name}</span>
              </Link>
            ))}
          </div>
          <span className='text-[12px] text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <span className='cursor-pointer'>bisaselesai.id 2025.</span>
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
