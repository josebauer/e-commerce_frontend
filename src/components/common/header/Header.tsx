'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup
} from '@headlessui/react'
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { CategoryType } from '@/services/categoriesService'

interface props {
  categories: CategoryType[]
}

export default function Header({categories}: props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Racing Store</span>
            <Image
              alt="Racing Store Logo"
              src="/icons/racing-store-transparent.png"
              className="w-auto"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <form>
            <label htmlFor="search" className="sr-only">Pesquisar</label>
            <div className="relative">
              <input
                type="search"
                name="search"
                id="search"
                className="block w-50 xl:w-150 sm:w-100 rounded-md border-0 bg-gray-100 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Pesquisar produtos..."
              />
            </div>
          </form>
          <a href="#" className="text-gray-400 hover:text-gray-500 ml-2">
            <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir menu principal</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-2">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Entrar
          </a>
          /
          <a href="" className="text-sm/6 font-semibold text-gray-900">
            Registrar-se
          </a>
          <div className="flex items-center">
            <a href="#" className="text-red-600 hover:scale-110 ml-2">
              <span className="sr-only">Favoritos</span>
              <HeartIcon aria-hidden="true" className="size-6" />
            </a>
          </div>
          <div className="ml-2 flow-root">
            <a href="#" className="group -m-2 flex items-center p-2">
              <span className="sr-only">Sacola</span>
              <ShoppingBagIcon
                aria-hidden="true"
                className="size-6 shrink-0 text-red-600 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </nav>
      
      <nav className="hidden lg:flex lg:justify-center lg:gap-x-12 bg-red-600 px-4 py-3 text-white">
        <PopoverGroup className="flex items-center gap-x-12">
            {Array.isArray(categories) && categories.map((category) => (
              <a
                key={category.id}
                href="#" 
                className="text-sm font-semibold leading-6 text-white hover:border-bottom rounded"
              >
                {category.name}
              </a>
            ))}
          <a href="#" className="text-sm font-semibold leading-6 text-white rounded-md border-2 px-5">Cupons</a>
        </PopoverGroup>
      </nav>
    
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Racing Store</span>
              <Image
                alt="Racing Store Logo"
                src="/icons/racing-store-transparent.png"
                className="w-auto"
                width={100}
                height={100}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {Array.isArray(categories) && categories.map((category) => (
                  <a
                    key={category.id}
                    href="#" 
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {category.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-red-600 hover:bg-gray-50 rounded-md border-2 border-red-600 px-5"
                >
                  Cupons
                </a>
              </div>
              <div className="flex gap-2 py-6">
                 <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Entrar
                </a>
                /
                <a href="" className="text-sm/6 font-semibold text-gray-900">
                  Registrar-se
                </a>
                <a href="#" className="text-gray-400 hover:scale-110 ml-2">
                  <span className="sr-only">Favoritos</span>
                  <HeartIcon aria-hidden="true" className="size-6 text-red-600" />
                </a>
                <a href="#" className="group -m-2 flex items-center p-2">
                  <span className="sr-only">Sacola</span>
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-400 text-red-600 group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
