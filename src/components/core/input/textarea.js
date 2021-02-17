import React from "react";

const TextArea = ({placeholder}) => {
    return (
        <textarea id="text"
                  className="w-full h-12  transition bg-white  text-lg 	rounded-md dark:bg-dark dark:text-light focus:outline-none focus:ring-opacity-10 char-limiter"
                  maxLength="280" placeholder={placeholder} rows="3"
        />
    );
};
export default TextArea;
