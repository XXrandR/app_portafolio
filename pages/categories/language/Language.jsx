import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDown } from 'react-ionicons'

export default function Language() {
  return (
    <div className="text-center">
      <Menu as="div" className="">
        <div>
          <Menu.Button className="flex justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-opacity-55">
            Language
            <ChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mt-2 w-56 divide-y divide-white-100 rounded-md bg-black/50 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-900 text-white' : 'text-white-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Spanish
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-900 text-white' : 'text-white-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    English
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-900 text-white' : 'text-white-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    German
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-900 text-white' : 'text-white-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    French
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-900 text-white' : 'text-white-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Russian
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-sky-900 text-white' : 'text-white-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Chinese
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
