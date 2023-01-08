const menuItems = [
    {
        id: 1,
        item: "Veg Roll",
        oneliner: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, perspiciatis.",
        img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
        hotel: "Hotelname1",
        desc: "one:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem ducimus voluptates placeat ut dolorum atque sunt quis maxime! Ad, illum. Molestiae minus, temporibus ea quasi facere debitis corrupti voluptatibus?20"
    },
    {
        id: 2,
        item: "Chocolate Burger",
        oneliner: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, perspiciatis.",
        img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
        hotel: "Hotelname2",
        desc: "two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem ducimus voluptates placeat ut dolorum atque sunt quis maxime! Ad, illum. Molestiae minus, temporibus ea quasi facere debitis corrupti voluptatibus?20"
    },
    {
        id: 3,
        item: "Masala Fries",
        oneliner: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, perspiciatis.",
        img: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600",
        hotel: "Hotelname3",
        desc: "three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem ducimus voluptates placeat ut dolorum atque sunt quis maxime! Ad, illum. Molestiae minus, temporibus ea quasi facere debitis corrupti voluptatibus?20"
    },
    {
        id: 4,
        item: "Egg Maggi",
        oneliner: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, perspiciatis.",
        img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
        hotel: "Hotelname4",
        desc: "two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem ducimus voluptates placeat ut dolorum atque sunt quis maxime! Ad, illum. Molestiae minus, temporibus ea quasi facere debitis corrupti voluptatibus?20"
    },
    {
        id: 5,
        item: "Burger",
        oneliner: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, perspiciatis.",
        img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
        hotel: "Hotelname5",
        desc: "two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem ducimus voluptates placeat ut dolorum atque sunt quis maxime! Ad, illum. Molestiae minus, temporibus ea quasi facere debitis corrupti voluptatibus?20"
    }
]

const item = document.getElementById('item');
const oneliner = document.getElementById('oneliner');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');

let currentMenu = 1;

window.addEventListener('DOMContentLoaded', function () {
    // let menu=menuItems[currentMenu];
    // item.textContent=menu.item;
    // oneliner.textContent=menu.oneliner;
    // img.src=menu.img;
    // hotel.textContent=menu.hotel;
    // desc.textContent=menu.desc;

    allmenu(currentMenu)
})

const allmenu = () => {
    let menu = menuItems[currentMenu];
    item.textContent = menu.item;
    oneliner.textContent = menu.oneliner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
}

//random menu

random.addEventListener('click', () => {
    currentMenu = Math.floor(Math.random() * menuItems.length);
    // console.log(currentMenu)
    allmenu(currentMenu);
})

//prev
prev.addEventListener('click', () => {
    currentMenu--;
    if (currentMenu < 0) {
        currentMenu = menuItems.length - 1;
    }
    allmenu(currentMenu);
})

//next
next.addEventListener('click', () => {
    currentMenu++;
    if (currentMenu > menuItems.length - 1) {
        currentMenu = 0;
    }
    allmenu(currentMenu);
})