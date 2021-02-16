import Avatar from "../../../core/avatar";
import Name from "../../../core/name";
import Timestamp from "../timestamp";
import Content from "../content";
import Bio from "../../../core/bio";
import Reactions from "../reactions";
import Options from "../../../core/options";

const Post = () => {
    return (
        <div className="px-4 py-4 transition bg-white  border-b">
            <div className="flex">
                <Avatar/>
                <div>
                    <Name/>
                    <Timestamp/>
                </div>
                <div className="flex flex-col flex-shrink-0 ml-auto leading-none text-center">
                    <Options/>
                </div>
            </div>
            <div className="mt-4 mb-4">
                <Content/>
                <div className="flex flex-row-reverse mt-1">
                    <Bio/>
                </div>
            </div>
            <Reactions/>
        </div>
    );
};

export default Post;
