import Search from "../components/atoms/Search"
import { Menus } from '../../data'
import ProductCard from "../components/atoms/ProductCard"

const MenusPage = () => {
    return (
        <div className="p-20 flex lg:flex-row flex-col gap-5 lg:gap-10">
            <Search />
            <ProductCard />
        </div>
    )
}

export default MenusPage