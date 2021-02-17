import React from "react";



const Small = ({ text }) => (
    <div
        className="p-1 px-4 font-semibold text-white transition bg-red-500 rounded-md cursor-pointer select-none focus:outline-none">
        { text }
    </div>
);

export default Small
