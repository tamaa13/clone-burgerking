import { useState } from "react";
import { SlPhone } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

const FormLargeOrder = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [birthDate, setBirthDate] = useState("");
    const [orderQuantities, setOrderQuantities] = useState({
        crispyNasiMineral: 0,
        spicyNasiMineral: 0,
        twoPcsNasi: 0,
        twoPcsNasiMineral: 0,
        beefBurgerMineral: 0,
        chickenBurgerMineral: 0,
    });

    const dashedLineStyle = "border-t border-dashed border-white my-4";
    const calculateAge = (birthdate: string) => {
        const today = new Date();
        const birthdateArray = birthdate.split("-");
        const birthYear = parseInt(birthdateArray[0], 10);
        const birthMonth = parseInt(birthdateArray[1], 10) - 1;
        const birthDay = parseInt(birthdateArray[2], 10);

        const ageDate = new Date(today.getTime() - new Date(birthYear, birthMonth, birthDay).getTime());
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        return age;
    };
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const age = calculateAge(birthDate);
        const totalQuantity =
            orderQuantities.crispyNasiMineral +
            orderQuantities.spicyNasiMineral +
            orderQuantities.twoPcsNasi +
            orderQuantities.twoPcsNasiMineral +
            orderQuantities.beefBurgerMineral +
            orderQuantities.chickenBurgerMineral;

        if (totalQuantity < 20) {
            alert("Minimum order quantity is 20!");
        } else if (age < 12) {
            alert("Minimum age is 12 years!");
        } else {
            setIsModalVisible(true);
        }
    };

    const closeModal = () => {
        // Tutup modal dan reset form jika diperlukan
        setIsModalVisible(false);
        setBirthDate("");
    };

    const handleQuantityChange = (item: string, quantity: number) => {
        setOrderQuantities((prevQuantities) => ({
            ...prevQuantities,
            [item]: quantity,
        }));
    };

    return (
        <div className={`relative px-5 py-5 lg:px-80 ${isModalVisible ? 'fixed inset-0 z-50 flex items-center justify-center overflow-hidden' : ''}`}>
            <div className="bg-white rounded-lg lg:flex-row lg:justify-between flex flex-col">
                <div>
                    <div className="py-2 px-5 gap-10">
                        <h1 className="text-2xl text-quinary font-bold">RAMEIN ACARAMU BARENG BK!</h1>
                        <h2>Pilih Paket (Minimum order 20 pax/Paket)</h2>
                    </div>
                    <form onSubmit={handleSubmit} action="" className="flex flex-col px-5 py-3">
                        <div className="flex flex-col gap-3">
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>1pc Ayam Crispy + Nasi + Mineral Water</span>
                                <input
                                    type="number"
                                    placeholder="Jumlah"
                                    className="placeholder:text-center placeholder:font-bold border-2 py-1 rounded-lg"
                                    onChange={(e) => handleQuantityChange("crispyNasiMineral", parseInt(e.target.value))}
                                />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>1pc Ayam Spicy + Nasi + Mineral Water</span>
                                <input
                                    type="number"
                                    placeholder="Jumlah"
                                    className="placeholder:text-center placeholder:font-bold border-2 py-1 rounded-lg"
                                    onChange={(e) => handleQuantityChange("spicyNasiMineral", parseInt(e.target.value))}
                                />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>2pcs Ayam Crispy/ Spicy/ Mix + Nasi</span>
                                <input
                                    type="number"
                                    placeholder="Jumlah"
                                    className="placeholder:text-center placeholder:font-bold border-2 py-1 rounded-lg"
                                    onChange={(e) => handleQuantityChange("twoPcsNasi", parseInt(e.target.value))}
                                />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>2pcs Ayam Crispy/ Spicy/ Mix + Nasi + Mineral Water</span>
                                <input
                                    type="number"
                                    placeholder="Jumlah"
                                    className="placeholder:text-center placeholder:font-bold border-2 py-1 rounded-lg"
                                    onChange={(e) => handleQuantityChange("twoPcsNasiMineral", parseInt(e.target.value))}
                                />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Beef Burger + Mineral Water</span>
                                <input
                                    type="number"
                                    placeholder="Jumlah"
                                    className="placeholder:text-center placeholder:font-bold border-2 py-1 rounded-lg"
                                    onChange={(e) => handleQuantityChange("beefBurgerMineral", parseInt(e.target.value))}
                                />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Chicken Burger + Mineral Water</span>
                                <input
                                    type="number"
                                    placeholder="Jumlah"
                                    className="placeholder:text-center placeholder:font-bold border-2 py-1 rounded-lg"
                                    onChange={(e) => handleQuantityChange("chickenBurgerMineral", parseInt(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="py-2 px-5 gap-10">
                            <h2>Add On (Optional)</h2>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Sliced Cheese</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Fries Regular</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Fusion Cookies & Cream</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Choco Pie</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Sundae Chocolate</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>1pc Ayam</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Beef Burger</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                            <div className="flex bg-[#F9F4F2] justify-between items-center px-5 py-2 drop-shadow-md">
                                <span>Chicken Burger</span>
                                <input type="number" placeholder="Jumlah" className="placeholder:text-center placeholder:font-bold  border-2 py-1 rounded-lg" />
                            </div>
                        </div>
                        <div className="bg-[#F9F4F2] h-5 my-3 w-full" />
                        <h2 className="py-2">Lengkapi data diri kamu!</h2>
                        <div className="flex gap-3 flex-col drop-shadow-md">
                            <div className="grid gap-3 lg:grid-cols-2">
                                <input required type="tel" className="w-full border py-2 rounded-lg px-2" placeholder="No Handphone" />
                                <input required type="text" className="w-full border py-2 rounded-lg px-2" placeholder="Nama" />
                                <input required type="email" className="w-full border py-2 rounded-lg px-2" placeholder="Email" />
                                <input
                                    required
                                    type="date"
                                    className="w-full border py-2 rounded-lg px-2"
                                    placeholder="Tanggal Lahir"
                                    onChange={(e) => setBirthDate(e.target.value)}
                                />
                            </div>
                            <textarea required className="w-full border py-2 rounded-lg px-2" name="" id="" placeholder="Alamat" />
                        </div>
                        <h2 className="py-2">Detail Acara!</h2>
                        <div className="flex gap-3 flex-col drop-shadow-md">
                            <input required type="text" className="w-full border py-2 rounded-lg px-2" placeholder="Jenis Acara" />
                            <div className="grid gap-3 lg:grid-cols-2">
                                <input required type="time" className="w-full border py-2 rounded-lg px-2" placeholder="Waktu" />
                                <input required type="date" className="w-full border py-2 rounded-lg px-2" placeholder="Tanggal Acara" />
                            </div>
                            <span>Catatan</span>
                            <textarea className="w-full border py-2 rounded-lg px-2" name="" id="" placeholder="Tulis request/order menu lain di sini!" />
                        </div>
                        <div className="py-5">
                            <button className="bg-quaternary text-center py-2 rounded-md drop-shadow-md w-full text-white  font-bold">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="bg-[#502314] flex flex-col rounded-b-lg lg:rounded-r-lg lg:rounded-b-none justify-between">
                    <div className="text-lg py-5 px-5">
                        <span className="text-white">Kamu juga bisa hubungi kami di:</span>
                        <span className="flex items-center text-quaternary gap-2"><MdOutlineMail size={20} /> guestservice@burgerking.co.id</span>
                        <div className={`${dashedLineStyle}`} />
                        <span className="flex items-center text-quaternary gap-2"><SlPhone size={20} />15000  25</span>
                        <div className={`${dashedLineStyle}`} />
                        <span className="text-white text-xs">Harga sebelum 10% PB.1 TM & C 2023 Burger King Company LLC. Used under license. All rights reserved.
                        </span>
                    </div>
                    <img className="w-full rounded-b-lg" src="https://bkdelivery.co.id/static/website/img/large_orders/figure.ecc40532014c.png" alt="" />
                </div>
            </div>

            {isModalVisible && (
                <div className="fixed inset-0 z-40 overflow-hidden bg-black bg-opacity-50 flex items-center px-5 justify-center">
                    <div className="bg-white rounded-lg text-center relative">
                        <IoCloseCircle onClick={closeModal} className="absolute top-2 right-2 cursor-pointer text-quaternary" size={30} />
                        <h2 className="text-2xl font-bold mb-4">Terima Kasih!</h2>
                        <p>Permintaan Anda telah kami terima.</p>
                        <p>Team dari BK akan segera menghubungi Anda.</p>
                        <div className="bg-secondary p-8 rounded-lg justify-center text-center flex flex-col gap-3">
                            <p>Untuk info lebih lanjut Anda dapat menghubungi customer service kami!</p>
                            <span className="flex items-center bg-primary p-2 rounded-full"><MdOutlineMail className="flex items-center" size={20} />guestservice@burgerking.co,id</span>
                            <span className="flex items-center bg-primary p-2 rounded-full"><SlPhone className="flex items-center" size={20} />15000 25</span>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default FormLargeOrder