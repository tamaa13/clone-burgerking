import { Outlet } from "react-router-dom"
import Navbar from "../molecules/Navbar"
import Footer from "../molecules/Footer"

const Layouts = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layouts