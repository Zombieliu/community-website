

import {Popover, Transition} from "@headlessui/react";
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon
} from "@heroicons/react/outline";
import {ChevronDownIcon} from "@heroicons/react/solid";
import {Fragment} from "react";
import Link from "next/link";
const solutions = [
    {
        name: 'Navigation',
        description: 'You can find all the included Web3.0 games from here!',
        href: 'https://www.playerlink.org/',
        icon: InboxIcon,
    },
    {
        name: 'Hackathons',
        description: 'Get comrades and bonuses for creating web3.0 games with you from here.',
        href: '#',
        icon: AnnotationIcon,
    },
    {
        name: 'Grant',
        description: "The community will help you make your dream of web3.0 games in all directions.",
        href: '#',
        icon: ChatAlt2Icon
    },
    {
        name: 'Knowledge Base',
        description: "You can answer all your questions here.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const navigation = [
    { name: 'Contact', href: 'contact' },
    { name: 'Community', href: 'community' },
    { name: 'Contributors', href: 'contributors' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Team() {
    return (
        <div className='app'>
            <header>
                <Popover className="relative bg-white">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/#"><a >
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                /></a>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span>Product</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                        {solutions.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            >
                                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            ))}
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid grid-cols-1 gap-7">
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                >
                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Sign up
                                        </a>
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            Existing customer?
                                            <a href="#" className="text-gray-900">
                                                Sign in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>
            <div className="m-5 md:ml-48 md:mr-48 md:mt-16 md:content-around leading-7">
            <div className='text-center'>
                <div className='m-5'>
                    <div className=' m-3 text-4xl font-extrabold'>钓鱼达人</div>
                    <div className='text-xl'>——Web3的全新游戏</div>
                </div>
            </div>

            <div className='mb-3'>
              <div className='font-semibold'>玩法</div>
            </div>
            <div className=''>
               <p>钓鱼游戏与传统游戏并不一样，它是区块链技术和传统游戏碰撞后产生的新的产物，区块链游戏本身很难改变游戏的表现形式，游戏类型，但是却能组合后给游戏本身的游戏玩法，产品的商业形式发生改变，从而衍生新的营收模式。</p>
            </div>
            <div className='mb-3 mt-3'>
                <div className='font-semibold'>规则</div>
                </div>
            <div className=''>
                <p>钓鱼专家中的核心游戏规则，钓上的鱼，内购的货币均是采用原生区块链协议实现。 因此具有以下的好处 玩家真正意义上拥有‘虚拟道具’或者说游戏资产的所有权，我们称它为数字游戏资产，那么钓鱼专家也可以称为下一代游戏‘数字游戏’那么于此对应的好处就是，玩家无需担心游戏制作方，运营方在未经许可的情况下肆意修改游戏道具的数值从而‘抽水’通过迭代更新获取产品收益。当然正常的更新是允许的，这需要经过批准，除此之外玩家之间可以随意进行自己数字游戏资产的收藏，交换，出售，租借等功能。</p>
            </div>
        </div>
        </div>


    )
}