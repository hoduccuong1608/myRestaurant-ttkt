
const SpecialFood = [
    {
        name: "Bò Hầm",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Nước ép",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {
        name: "Gà Đồi",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Coca",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {
        name:  "Cá Om",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Pepsi",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {
        name: "Dưa Chua",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Trà đá",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {
        name: "Heo Quay",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Bạc xỉu",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {
        name:  "Canh Cá",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Cafe",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    }
]


   
export default function Content() {
    
    return (
        <div className="w-full">
                {/* Food */}
                <div className=" mx-auto text-2xl text-gray-900 font-bold md:text-4xl text-center border-b-2 border-b-purple-900 pb-5">Special dishes</div>
                <div className="relative flex flex-row flex-wrap gap-x-10 gap-y-16 justify-center mt-8 h-auto overflow-hidden">
                    {
                        SpecialFood.map((item) => {
                            return (
                                <div key={item.name} className=" w-[80%] md:w-[30%] border-neutral-900 border-4 text-center uppercase">
                                    <img className="w-full" src={item.link} alt=''/>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                    {/* Drinks */}
                <div className="mt-10 mx-auto text-2xl text-gray-900 font-bold md:text-4xl text-center border-b-2 border-b-purple-900 pb-5">Special Drinks</div>
                <div className="relative flex flex-row flex-wrap gap-x-10 gap-y-16 justify-center mt-8 h-auto overflow-hidden">
                    {
                        SpecialFood.map((item) => {
                            return (
                                <div key={item.name} className=" w-[79%] md:w-[30%] border-neutral-900 border-4 text-center uppercase">
                                    <img className="w-full" src={item.link1} alt =''/>
                                    {item.drink}
                                </div>
                            )
                        })
                    }
                </div>
            <div className="w-100% my-10 text-2xl md:text-4xl font-bold text-center">Thank You!</div>
        </div>
    )
};
