import Avatar from "../../../core/user/avatar";
import React from "react";
import Header from "../header";
import Icons from "../icons";
import Small from "../../../core/buttons/small";
import TextArea from "../../../core/input/textarea";

const CreatePost = () => {
    return (
        <>
            <Header/>

            <div className="px-4 py-4 transition bg-white border-b shadow-sm dark:border-darker dark:bg-dark">
                <div className="flex flex-col">
                    <div className="flex">
                        <div className="my-auto">
                            <Avatar/>
                        </div>
                        <TextArea placeholder={'What\'s Poppin\'?'}/>
                    </div>
                    <Icons/>
                    <div className="flex flex-row-reverse">
                        <Small text='Post'/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CreatePost

