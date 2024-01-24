import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import useStore from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
    const { cartOrder } = useStore()
    const [toogle, setToogle] = useState(false)
    return (
        <>
            {/* Desktop */}
            <div className="bg-tertiary h-auto w-auto lg:block z-10 hidden text-white">
                <a href="/" className="absolute z-10 ml-64 mt-3">
                    <img src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png" className="w-[85%]" alt="logo" />
                </a>
                <div className="px-96 flex justify-between relative gap-60">
                    <div className="flex items-center py-4 justify-center gap-7">
                        <div onClick={() => navigate("/menus")} className="flex flex-col cursor-pointer">
                            <span className="text-xs text-primary">Delivery</span>
                            <span className="text-2xl">Order</span>
                        </div>
                        <div onClick={() => navigate("/news")} className="flex flex-col cursor-pointer">
                            <span className="text-xs text-primary">Get Fresh</span>
                            <span className="text-2xl">Promotions</span>
                        </div>
                        <div onClick={() => navigate("/large-orders")} className="flex flex-col cursor-pointer">
                            <span className="text-xs text-primary">Exclusive</span>
                            <span className="text-2xl">Large Order</span>
                        </div>

                    </div>
                    <div className="flex items-center relative justify-center  gap-5">
                        <span className="text-2xl py-4 cursor-pointer">Login</span>
                        <a href="" className="bg-quaternary relative flex items-center justify-center h-full w-16">
                            <IoMdCart size={38} />
                            <div className={`${cartOrder <= 0 ? "hidden" : "bg-[#FF170E] rounded-full block w-5 h-5 mb-7 ml-5 absolute z-10"}`} />
                            <span className={`${cartOrder <= 0 ? "hidden" : "absolute z-20 mb-7 ml-5"} `}>{cartOrder}</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="bg-tertiary h-auto w-auto lg:hidden z-50 block text-white sticky top-0">
                <div className="flex justify-between relative">
                    <div className="flex items-center pl-2 justify-center text-quaternary">
                        <RxHamburgerMenu size={30} className={`cursor-pointer ${toogle ? "hidden" : ""}`} onClick={() => setToogle(!toogle)} />
                        <IoCloseOutline size={30} className={`cursor-pointer ${toogle ? "" : "hidden"}`} onClick={() => setToogle(!toogle)} />
                    </div>
                    <a href="/" className="items-center py-1 justify-center flex">
                        <img src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png" className="w-[40%]" alt="logo" />
                    </a>
                    <div className="flex items-center justify-center gap-5">
                        <a href="" className="bg-quaternary flex items-center justify-center h-full w-16">
                            <IoMdCart size={30} />
                            <div className={`${cartOrder <= 0 ? "hidden" : "bg-[#FF170E] rounded-full block w-5 h-5 mb-7 ml-5 absolute z-10"}`} />
                            <span className={`${cartOrder <= 0 ? "hidden" : "absolute z-20 mb-7 ml-5"} `}>{cartOrder}</span>
                        </a>
                    </div>
                </div>
            </div>
            <header className={`lg:hidden bg-tertiary py-4 px-6 w-full mx-auto h-screen z-10 fixed -top-[100vh]`} style={{ top: toogle ? '1vh' : '-100vh', transition: 'top 0.5s ease' }}>
                <div className={`text-white flex flex-col gap-6 w-full mt-16 slide-down-menu ${toogle ? 'active' : ''}`}>
                    <span onClick={() => {
                        navigate('/'),
                            setToogle(!toogle)
                    }} className="text-2xl">Home</span>
                    <div onClick={() => {navigate('/menus')
                        setToogle(!toogle)}} className="flex flex-col cursor-pointer">
                        <span className="text-xs text-primary">Delivery</span>
                        <span className="text-2xl">Order</span>
                    </div>
                    <div onClick={() => {navigate('/news')
                        setToogle(!toogle)}} className="flex flex-col cursor-pointer">
                        <span className="text-xs text-primary">Get Fresh</span>
                        <span className="text-2xl">Promotions</span>
                    </div>
                    <div onClick={() => {navigate('/large-orders')
                        setToogle(!toogle)}} className="flex flex-col cursor-pointer">
                        <span className="text-xs text-primary">Exclusive</span>
                        <span className="text-2xl">Large Order</span>
                    </div>
                    <hr className="" />
                    <span className="text-2xl cursor-pointer">Login</span>
                </div>
            </header >
        </>
    )
}

export default Navbar       