import { FaCrown } from "react-icons/fa";

const MemberCard = () => {
    return (
        <div className="lg:hidden pt-8 px-5">
            <div className="bg-white px-5 py-2 rounded-lg drop-shadow-md flex items-center justify-between">
                <div className="flex flex-wrap flex-row items-center gap-1">
                    <h1 className="text-sm">
                        Get exclusive benefits now as a BK Member!
                    </h1>
                    <FaCrown className="text-quaternary" />
                </div>
                <button className="bg-quaternary text-white px-3 py-2 text-lg items-center justify-center rounded">
                    Login
                </button>
            </div>
        </div>
    )
}

export default MemberCard