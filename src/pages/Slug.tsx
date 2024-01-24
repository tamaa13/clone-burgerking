
const Slug = () => {
    const listItemStyle = "list-disc ml-6";

    return (
        <div className="flex flex-col justify-center">
            <div className="flex py-20 items-center justify-between lg:px-80 px-5 gap-5">
                <div className="flex flex-col gap-5 ">
                    <h1 className="text-2xl text-quinary font-bold">Birthday Voucher</h1>
                    <div className="block lg:hidden">
                        <img src="https://bkdelivery.co.id/media/hero_image/2023/1/18/wgezpclsoytdefsqgk4vnk.jpg" alt="" />
                    </div>
                    <h2>Syarat dan Ketentuan:</h2>
                    <ul className="text-justify text-sm">
                        <li className={listItemStyle}>Diskon 50% senilai hingga Rp45.000, dengan minimum transaksi Rp60.000</li>
                        <li className={listItemStyle}>Kupon ini tidak berlaku untuk produk promo lainnya, seperti: King's Chicken, Apps Exclusive Menu, King Deals, Side & Dessert, Whopper Wednesday, Friyay Chicken dan Kupon pada bulan tersebut</li>
                        <li className={listItemStyle}>Promo berlaku nasional untuk transaksi jenis apapun melalui www.bkdelivery.co.id dan Aplikasi BK (baik untuk Delivery order, Contactless Dine-in, atau Pre-Order Takeaway)</li>
                        <li className={listItemStyle}>Promo dalam bentuk kupon diberikan saat loginPromo dalam bentuk kupon diberikan saat login</li>
                        <li className={listItemStyle}>Setiap kupon hanya dapat digunakan sebanyak satu (1) kali selama periode tahun tersebut & Setiap pengguna hanya dapat memperoleh satu (1) kupon promo</li>
                        <li className={listItemStyle}>Periode kupon berlaku 2 minggu setelah mendapatkan kupon yang akan diberikan pada 6 hari sebelum hari ulang tahun</li>
                    </ul>
                    <div className="flex flex-col">
                        <span>*S&K Berlaku</span>
                        <span>-</span>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img src="https://bkdelivery.co.id/media/hero_image/2023/1/18/wgezpclsoytdefsqgk4vnk.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Slug;
