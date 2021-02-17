import Dropdown from "../../core/buttons/dropdown";

const Header = () => {
    return (
        <div className="z-10">
            <div className="bg-white shadow-sm">
                <div
                    className="flex justify-between flex-shrink-0 px-6 py-4 border-b border-gray-300 dark:border-darker">
                    <h1 className="px-6 text-xl font-semibold">Hi, Profile</h1>
                    <Dropdown/>
                </div>
            </div>
        </div>
    );
};

export default Header

