import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {Link} from "react-router-dom";

const NAVIGATION_LINKS = [
  { name: 'Inici', href: '/' },
  { name: 'Informació bàsica', href: '/info' },
  { name: 'On dormir', href: '/sleep' },
  { name: 'Fotos', href: '/photos' },
  { name: 'Assistencia', href: '/assistance' },
]

export default function Navigation() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
      <div className="isolate tracking-widest top-0 left-0 fixed lg:static w-full lg:bg-transparent bg-white">
        <div className="px-6 pt-6 lg:px-8">
          <nav className="flex items-center lg:justify-center justify-between" aria-label="Global">
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                <span className="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 [&>a]:transition-all">
              {NAVIGATION_LINKS.map((item) => (
                  <Link to={item.href} key={item.name} className="font-ebg font-normal text-base leading-6 text-gray-900">
                    {item.name}
                  </Link>
                ))}
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="flex flex-col items-center font-ebg space-y-2 py-6">
                    {NAVIGATION_LINKS.map((item) => (
                        <Link to={item.href} key={item.name} className="font-ebg hover:border-b-black hover:text-black font-normal text-base leading-6 text-gray-900">
                          {item.name}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
  )
}
