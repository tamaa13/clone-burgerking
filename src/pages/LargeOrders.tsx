import FormLargeOrder from "../components/molecules/FormLargeOrder"

const LargeOrders = () => {
    return (
        <div>
            <img src="https://bkdelivery.co.id/media/mobile_large_order_banners/2023/11/14/dmhe9sdamof6t7kkppn7wn.jpg" className="lg:hidden" alt="" />
            <img src="https://bkdelivery.co.id/media/large_order_banners/2023/11/14/et5aumnw5psbyxhwre6bhf.jpg" className="hidden lg:block" alt="" />
            <div>
                <FormLargeOrder />
            </div>
        </div>
    )
}

export default LargeOrders