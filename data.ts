type Product = {
    id: number
    title: string
    img: string
    price: [number, number]
    desc: string
}

type Menu = {
    id: number
    title: string
    img: string
    products: Product[]
}

export const Menus: Menu[] = [
    {
        "id": 1,
        "title": "BK APP EXCLUSIVE",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/znilxvdnwuyurvfmej3lft_product_list.jpg",
        "products": [
            {
                "id": 1,
                "title": "App Exc 1pc Ayam + Nasi",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/11/7/584yfrkeppr2ycwjivr5uj_product_list.jpg",
                "price": [15_455, 28_636],
                "desc": "1pc Ayam + Nasi"
            },
            {
                "id": 2,
                "title": "Paket Cheese Whopper® JR Regular",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/11/7/p8tfpeqxn23vuxofbvpxyy_product_list.jpg",
                "price": [25_000, 49_545],
                "desc": "Cheese Whopper® JR + Fries Regular + Coke Regular"
            },
            {
                "id": 3,
                "title": "App Exc BBQ Beef Rasher",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/98mmiliweaesnsyqgrqz6m_product_list.jpg",
                "price": [23_182, 35_909],
                "desc": ""
            },
            {
                "id": 4,
                "title": "BOX AYAM 8 PCS",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/trqkoqzxm32tkxjvpsw2he_product_list.jpg",
                "price": [100_000, 145_455],
                "desc": "8 pcs Ayam [4 besar + 4 Kecil]. Resep Ayam Lebih Renyah dan Gurih."
            },
            {
                "id": 5,
                "title": "BOGO Paket BESAR 1",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/23/77xt8rja7zswxnnbp7pn3j_product_list.jpg",
                "price": [54_545, 71_818],
                "desc": "2 Pcs Ayam Besar + 2 Nasi + 2 Jasmine Tea ukuran Medium. Resep Ayam Lebih Renyah dan Gurih.2 Pcs Ayam Besar + 2 Nasi + 2 Jasmine Tea ukuran Medium. Resep Ayam Lebih Renyah dan Gurih."
            },
            {
                "id": 6,
                "title": "Promo 4 Pcs Ayam",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/mmxqphb4bpyayh6cdknhic_product_list.jpg",
                "price": [55_000, 72_727],
                "desc": "4 pcs Ayam [2 besar + 2 Kecil]. Resep Ayam Lebih Renyah dan Gurih."
            },
            {
                "id": 7,
                "title": "BOGO Paket Besar 2",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/7x85ynptg4znjz4t5t7dpx_product_list.jpg",
                "price": [76_364, 90_000],
                "desc": "2 Pcs Ayam Besar + 2 Pcs Ayam Kecil + 2 Nasi + 2 Jasmine Tea ukuran Medium.Resep Ayam Lebih Renyah dan Gurih. Harga Normal 88.000"
            },
            {
                "id": 8,
                "title": "2 For 39 BBQ Beef Burger",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/ib6x7mkiumvlqtrcqiak7c_product_list.jpg",
                "price": [39_091, 70_000],
                "desc": "2 BBQ Beef Burger"
            },
            {
                "id": 9,
                "title": "2 For 39 Mozzarella Beef Burger",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/zstver3bonhtgja42cyybf_product_list.jpghttps://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/zstver3bonhtgja42cyybf_product_list.jpg",
                "price": [39_091, 70_000],
                "desc": "2 Mozzarella Beef Burger"
            },
            {
                "id": 10,
                "title": "Add 3 Regular Coke",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/kyehxfp9h5qfu8z3zlgeru_product_list.jpghttps://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/kyehxfp9h5qfu8z3zlgeru_product_list.jpg",
                "price": [22_727, 28_635],
                "desc": "3 Regular Coke"
            },
            {
                "id": 11,
                "title": "Add 3 Regular Jasmine Tea",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/hdf9z3qbv9ahjcxdpg6y2a_product_list.jpg",
                "price": [22_727, 28_635],
                "desc": "Add 3 Regular Jasmine Tea"
            },
            {
                "id": 12,
                "title": "Add 3 Rice",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/pfautp9tikcwwnurxunbzj_product_list.jpg",
                "price": [15_000, 25_909],
                "desc": "Tambah 3 Nasi"
            },
        ]
    },
    {
        "id": 2,
        "title": "Promo Hari Ini",
        "img": "",
        "products": [
            {
                "id": 1,
                "title": "App Exc 1pc Ayam + Nasi",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/11/7/584yfrkeppr2ycwjivr5uj_product_list.jpg",
                "price": [15_455, 28_636],
                "desc": "1pc Ayam + Nasi"
            },
            {
                "id": 2,
                "title": "Blitz 2 Choco Pie",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/5/pyqh6as9cd4rpqvpfzmcbx_product_details.jpg",
                "price": [21_818, 25_454],
                "desc": "Chocolate Pie"
            },
            {
                "id": 3,
                "title": "Blitz 2 Coke Medium",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/5/kxqs4jllb9a5nmvgjtvwzh_product_details.jpg",
                "price": [21_818, 33_636],
                "desc": "2 Coke Medium"
            },
            {
                "id": 4,
                "title": "Blitz 2 Jasmine Tea",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/5/mmxmb3mx46bd6nt5kdyxhl_product_details.jpg",
                "price": [21_818, 36_364],
                "desc": "2 Jasmine Tea"
            },
            {
                "id": 5,
                "title": "Blitz 2 Chicken Burger",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/5/ykarfvj8gmbowv2ccn3pfb_product_details.jpg",
                "price": [21_818, 40_910],
                "desc": "2 Chicken Burger"
            },
            {
                "id": 6,
                "title": "Blitz Beef Burger + Fries Medium",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/5/7ynmxguyfhtilg6vubupji_product_details.jpg",
                "price": [21_818, 37_273],
                "desc": "Beef Burger + Fries Medium"
            },
            {
                "id": 7,
                "title": "Blitz 1 Ayam Crispy + 2 Nasi",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/5/fprstxshcoppe9uomhrvjf_product_details.jpg",
                "price": [21_818, 37_272],
                "desc": "1 Ayam Crispy + 2 Nasi"
            }
        ]

    },
    {
        "id": 3,
        "title": "NEW! King Fusion Nutella® [Limited Time Offer]",
        "img": "",
        "products": [
            {
                "id": 1,
                "title": "King Fusion Nutella®",
                "img": "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/12/20/ap4pnwqvahk3tdssz8tj9b_product_details.jpg",
                "price": [16_818, 0],
                "desc": "Ice krim vanilla yang manis berpadu dengan saus coklat Nutella dan bertambur caramel crumble."
            },
        ]
    },
    {
        "id": 4,
        "title": "Heinz® Mexican Whopper",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/10/23/hennaxjqiyceh79jnxto4k_product_list.jpg",
        "products": []
    },
    {
        "id": 5,
        "title": "Cheese Whopper®",
        "img": "",
        "products": []
    },
    {
        "id": 6,
        "title": "Cheeseburger Favorite",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/11/2/fwvutetzjew4arsjqzq9td_product_list.jpg",
        "products": []
    },
    {
        "id": 7,
        "title": "King's Chicken [ Rasa Baru ]",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/11/2/ahjlc47bb9hstuc3cc9en2_product_list.jpg",
        "products": []
    },
    {
        "id": 8,
        "title": "Whopper Wednesday",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/6/3/bzilpvmecz3gmmngfan9vg_product_list.jpg",
        "products": []
    },
    {
        "id": 9,
        "title": "BK APP EXCLUSIVE",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/7/kkkcexjgbrsosf8nrqfmmi_product_list.jpg",
        "products": []
    },
    {
        "id": 10,
        "title": "Kids Meal",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/syhbxldehjxkumhbs5yiz9_product_list.jpg",
        "products": []
    },
    {
        "id": 11,
        "title": "Side & Desssert",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/10/10/fkj8wesyvwhxvwfs4um9mt_product_list.jpg",
        "products": []
    },
    {
        "id": 12,
        "title": "Beverages",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/5s3jdve3uve4itsndqnqkm_product_list.jpg",
        "products": []
    },
    {
        "id": 13,
        "title": "Kings Deals",
        "img": "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/2/8/cckufhpxcf4vaj2yupoouv_product_list.jpg",
        "products": []
    },
]
