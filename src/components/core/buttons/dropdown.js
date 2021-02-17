const Dropdown = () => {
    return (
        <button
            className="p-1 px-2 font-semibold text-white transition duration-200 bg-red-500 rounded-md cursor-pointer focus:outline-none"
            aria-expanded="true">
            New post
            <svg
                className="inline-block w-4 h-4 ml-1 transition-transform transform"
                fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </svg>
        </button>
    );
};

export default Dropdown

