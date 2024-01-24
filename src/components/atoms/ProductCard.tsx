import { Menus } from '../../../data'

const ProductCard = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 w-full gap-2'>
            {Menus.map((menu) => (
                <div key={menu.id} className='bg-white w-full justify-between gap-5 lg:h-80 flex flex-wrap items-center p-3 flex-row lg:py-5 py-2 rounded-lg drop-shadow-xl lg:'>
                {/* <div key={menu.id} className='bg-white w-full gap-5 lg:h-80 flex px-2 items-center justify-center flex-wrap flex-row lg:py-5 py-2 rounded-lg drop-shadow-xl'> */}
                    {/* <div> */}
                        <img src={menu.img} alt="" className='bg-cover w-[40%] lg:w-full' />
                    {/* </div> */}
                    {/* <div className='flex gap-5 items-center flex-wrap'> */}
                        <span className=' text-center  text-quinary'>{menu.title}</span>
                    {/* </div> */}
                </div>
            ))}
        </div>
    )
}

export default ProductCard