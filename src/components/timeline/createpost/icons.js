import React from "react";

const Icons = () => {
return(
    <div className="flex m-2 text-gray-500 icons ml-14">
        <svg
            className="p-1 mr-2 transition-colors duration-200 rounded-full cursor-pointer text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker h-7"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round"
                  strokeLinejoin="round" strokeWidth="2"/>
        </svg>
        <svg
            className="p-1 mr-2 transition-colors duration-200 rounded-full cursor-pointer text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker h-7"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
        <svg
            className="p-1 mr-2 transition-colors duration-200 rounded-full cursor-pointer text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker h-7"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
        <div className="ml-auto text-xs font-semibold text-gray-400 count">
            <span>0</span> / <span>280</span>
        </div>
    </div>
);
}
export default Icons
