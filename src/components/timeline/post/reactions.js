const Reactions = () => {
    return (
        <div className="flex flex-row-reverse items-center mt-4">

            <div
                className="mx-auto text-sm font-bold transition duration-200 border-none cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="#000000" viewBox="0 0 24 24">
                    <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
                <span className="">12</span>
            </div>

            <div
                className="mx-auto text-sm font-bold transition duration-200 border-none cursor-pointer">
                <svg className="w-4 h-4" fill="#000000" viewBox="0 0 24 24">
                    <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 11v4h2.953l1.594 2h-6.547v-6h-2l3-4 3 4h-2zm6 2v-4h-2.922l-1.594-2h6.516v6h2l-3 4-3-4h2z"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
                <span className="">12</span>
            </div>

            <div
                className="mx-auto text-sm font-bold transition duration-200 border-none cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="#000000" viewBox="0 0 24 24">
                    <path
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
                <span className="">12</span>
            </div>

        </div>
    );

};
export default Reactions
