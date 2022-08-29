const NavFoods = [
    {name: "All"},
    {name:"Bo"}, 
    {name:"Ca"},
    {name:"Lon"},
    {name:"Ga"}
]
const SpecialFood = [
    {   id: 1,
        name: "Bò Hầm",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Nước ép",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {   id: 2,
        name: "Gà Đồi",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Coca",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {   id: 3,
        name:  "Cá Om",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Pepsi",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {   id: 4,
        name: "Dưa Chua",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Trà đá",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {   id: 5,
        name: "Heo Quay",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Bạc xỉu",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    },
    {   id: 6,
        name:  "Canh Cá",
        link: "https://ttol.vietnamnetjsc.vn/images/2020/09/08/06/28/ava1.jpg",
        drink: "Cafe",
        link1: "https://media.vov.vn/sites/default/files/styles/large/public/2022-03/cf.png"
    }
]
const NavDrinks = [
    {name: "Tang luc"},
    {name: "Cafe"},
    {name: "Giai khat"},
]
export function getSpecialFood() {
    return SpecialFood;
  }
  export function getFood(number) {
    return SpecialFood.find(
      (food) => food.id === number
    );
  }
export function getNavFood() {
    return NavFoods;
  }
  export function getNavDrinks() {
    return NavDrinks;
 }