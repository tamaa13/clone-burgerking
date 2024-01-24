import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Menus } from '../../../data'
const Search = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <div className="lg:hidden flex gap-5 items-center justify-center">
                <div>
                    <IoSearchSharp onClick={() => setToggle(!toggle)} size={10} className={`${toggle ? "hidden" : "block"} p-2 w-10 h-10 bg-quaternary text-white rounded-md`} />
                    <IoIosArrowBack onClick={() => setToggle(!toggle)} size={10} className={`${toggle ? "block" : "hidden"} p-2 w-10 h-10 bg-quaternary text-white rounded-md`} />
                </div>
                <input className={`${toggle ? "block" : "hidden"} p-2 w-full rounded-md drop-shadow-md`} type="text" placeholder="Search menu..." />
                <button className={`${toggle ? "hidden" : "block"} flex bg-primary w-full justify-between items-center text-white p-2 rounded-md`}>BK APP EXCLUSIVE <IoMdArrowDropdown /></button>
            </div>


            <div className="hidden lg:flex flex-col gap-5 ">
                <div className="border-2 drop-shadow-md rounded-md flex justify-between items-center">
                    <input type="text" placeholder="Search menu..." className="p-[5px] w-full rounded-l-md" />
                    <IoSearchSharp size={40} className="bg-quaternary cursor-pointer h-full rounded-r-md text-white" />
                </div>
                <div className="flex gap-5 flex-col">
                    {Menus.map((menu) => (
                        <div key={menu.id} className="w-auto bg-secondary p-3 rounded-md cursor-pointer">{menu.title}</div>
                    ))}
                </div>
                <span className="text-xs text-slate-700">* Harga belum termasuk pajak</span>
            </div>
        </div>
    )
}

export default Search