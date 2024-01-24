import { FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <>
            {/* desktop */}
            <div className="bg-tertiary flex-col bottom-0 text-white px-96 py-6 justify-center gap-2 hidden lg:flex">
                <div>BURGER KING® DELIVERY</div>
                <div className="flex flex-row gap-5 ">
                    <span className="flex items-center justify-center gap-1"><FaPhoneAlt /> 15000 25 </span>
                    <span className="flex items-center justify-center gap-1"><MdEmail /> guestservice@burgerking.co.id </span>
                    <span className="flex items-center justify-center gap-1">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </span>
                </div>
                <div className="flex flex-row gap-3 text-sm">
                    <span>About Us</span>
                    <div className="h-5 w-[1px] bg-white" />
                    <span>Kebijakan Privasi</span>
                    <div className="h-5 w-[1px] bg-white" />
                    <span>Syarat Dan Ketentuan</span>
                    <div className="h-5 w-[1px] bg-white" />
                    <span>TM & © 2024 Burger King Corporation. Used Under License. All rights reserved.</span>
                </div>
            </div>

            {/* mobile */}
            <div className="bg-tertiary flex flex-col bottom-0 text-white items-center justify-center py-10 px-6 gap-7 lg:hidden">
                <div className="flex items-center justify-center text-2xl">BURGER KING® DELIVERY</div>
                <div className="flex flex-col gap-3">
                    <span className="flex items-center justify-center gap-1 text-2xl"><FaPhoneAlt /> 15000 25 </span>
                    <span className="flex items-center justify-center gap-1 text-sm"><MdEmail /> guestservice@burgerking.co.id </span>
                    <span className="flex items-center justify-center gap-4 text-2xl">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <span>About Us</span>
                    <span>Kebijakan Privasi</span>
                    <span>Syarat Dan Ketentuan</span>
                    <span className="text-center">TM & © 2024 Burger King Corporation. Used Under License. All rights reserved.</span>
                </div>
            </div>
        </>
    )
}

export default Footer   