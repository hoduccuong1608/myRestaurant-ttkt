import {BsEmojiSunglasses} from 'react-icons/bs'

function Footer() {
    return (
<div className="w-100% p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center pl-4 mb-4 sm:mb-0">
            <BsEmojiSunglasses size={'40px'} color="#e9c46a" className=" h-8" alt="Logo"/>
            <span className="self-center text-2xl text-amber-300 ml-5 ">Summer</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline ">Summer™</a>. All Rights Reserved.
    </span>
</div>

    )
    }
    export default Footer;