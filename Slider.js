const menulist=[
    {
        id:1,
        img:"https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/04/kadai-paneer-dry-recipe-step-by-step-instructions.jpg?fit=2520%2C1944&quality=30&strip=all&ssl=1",
        title:"Kadai Paneer"
    },
    {
        id:2,
        img:"https://www.getarecipes.com/wp-content/uploads/2020/05/Chicken-Biryani-Recipe.png",
        title:"Biryani"
    },
    {
        id:3,
        img:"https://www.cookingcarnival.com/wp-content/uploads/2015/04/IMG_0507.jpg",
        title:"Pav Bhaji"
    },
    {
        id:4,
        img:"https://maunikagowardhan.co.uk/wp-content/uploads/2011/11/Chilli-Paneer.jpg",
        title:"Paneer Chilli"
    },
    {
        id:5,
        img:"https://www.littlebroken.com/wp-content/uploads/2021/01/Lentil-Chili-15.jpg",
        title:"Dal Tadka"
    }
]

var title=document.getElementById('title');
var img=document.getElementById('img');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
let currentItem=0;

window.addEventListener('DOMContentLoaded',function(){
    allmenu(currentItem);
})

const allmenu=()=>{
 let menu=menulist[currentItem];
 title.textContent=menu.title;
 img.src=menu.img;

}
next.addEventListener('click',()=>{
    currentItem++;
    if (currentItem > menulist.length-1) {
        currentItem = menulist.length - 1;
        currentItem=0;
    }
    allmenu(currentItem)
})
prev.addEventListener('click',()=>{
    currentItem--;
    if (currentItem <0) {
        currentItem = menulist.length - 1;
    }
    allmenu(currentItem)
})