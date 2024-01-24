import { Menus } from '../../../data'

const MenusCard = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-2 px-4 lg:px-96'>
            {Menus.map((menu) => (
                <div key={menu.id} className='bg-white gap-5 lg:h-80 flex px-2 items-center justify-center flex-wrap flex-col lg:py-5 py-2 rounded-lg drop-shadow-xl'>
                    <img src={menu.img} alt="" className='bg-cover' />
                    <div className='flex gap-5 items-center flex-wrap justify-between'>
                        <span className='text-xl text-center  text-quinary'>{menu.title}</span>
                        <button className="bg-quaternary hidden lg:block text-white px-3 py-2 text-lg items-center justify-center rounded">
                            Order
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenusCard