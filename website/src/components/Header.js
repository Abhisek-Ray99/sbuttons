/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiMoreVertical } from 'react-icons/fi'
import useDarkMode, { DarkModeToggler } from 'use-dark-mode-hook'
import MenuToggler from './MenuToggler'
import vars from '../vars'

function Header({ activePage = null, showMenuButton = false }) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()

    return (
        <nav className="shadow-sm py-5 dark:bg-gray-600 bg-white dark:text-white transition-colors duration-100">
            <div className="container flex flex-row mx-auto">
                {showMenuButton && <MenuToggler />}
                <Link to="/" className={`lg:w-2/12 ${showMenuButton ? 'w-4/12' : 'w-4/12'}`}>
                    <img src={`${vars.path}/images/logo-colored.png`} alt="Logo" />
                </Link>
                <div className="md:flex hidden items-center lg:w-6/12">
                    <Link to="/documentation"
                        className={"block border-b-2 border-transparent hover:border-red-600 mr-3 ml-4 text-xl text-gray-600 dark:text-white" + (activePage === 'documentation' ? ' border-red-600' : '')}>
                        Docs
                    </Link>
                    <Link to="/examples"
                        className={"block border-b-2 border-transparent hover:border-red-600 mx-3 text-xl text-gray-600 dark:text-white" + (activePage === 'examples' ? ' border-red-600' : '')}>
                        Examples
                    </Link>
                    <Link to="/projects-using-sbuttons"
                        className={"block border-b-2 border-transparent hover:border-red-600 mx-3 lg:text-xl text-sm text-gray-600 dark:text-white" + (activePage === 'projects' ? ' border-red-600' : '')}>
                        Projects Using sButtons
                    </Link>
                </div>
                <div className="mt-2">
                    <input
                        type="text"
                        name="price"
                        class="border-solid border-2 border-red-500 border-opacity-25 focus:border-blue-500 px-6 py-1"
                        id="price"
                        placeholder="search..."
                    />
                </div>
                <div className="justify-end flex items-center lg:w-4/12 md:w-2/12 w-4/12 md:mx-0 mr-0 ml-auto">
                    <a href="https://github.com/sButtons/sbuttons" target="_blank" className="hover:opacity-100 opacity-40 px-3 transition-none">
                        <FiGithub size="1.5rem" />
                    </a>
                    <DarkModeToggler
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                        buttonClassName="focus:outline-none hover:opacity-100 opacity-40 px-3 transition-none"
                    />
                    <button className="block group md:hidden px-3 relative focus:outline-none align-text-bottom">
                        <FiMoreVertical size="1.5rem" className="hover:opacity-100 opacity-40 transition-none" />
                        <div className="absolute bg-gray-100 w-52 dark:bg-gray-700 group-hover:block group-focus:block hidden right-1.5 shadow-md top-9">
                            <Link className="block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-lg text-left" to="/documentation">
                                Get Started
                            </Link>
                            <Link className="block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-lg text-left" to="/examples">
                                Examples
                            </Link>
                            <Link className="block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-md text-left" to="/projects-using-sbuttons">
                                Projects Using sButtons
                            </Link>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;