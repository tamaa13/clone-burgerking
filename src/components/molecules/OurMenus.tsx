import MenusCard from "../atoms/MenusCard"

const OurMenus = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center py-8">
            <h1 className="text-3xl text-quinary">Our Menus</h1>
            <MenusCard />
        </div>
    )
}

export default OurMenus