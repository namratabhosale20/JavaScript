
const quotes=[
    {
        quote:'If you want to live a happy life, tie it to a goal, not to people or things."',
        person:'Babe Ruth'
    },
    {
        quote:'Never let the fear of striking out keep you from playing the game."',
        person:'Babe Ruth'
    },
    {
        quote:'Money and success dont change people; they merely amplify what is already there."',
        person:'Will Smith'
    },
    {
        quote:'Your time is limited, so dont waste it living someone elses life."',
        person:'Steve Jobs'
    },
    {
        quote:'Not how long, but how well you have lived is the main thing.”',
        person:'Seneca'
    },
   
];

const btn=document.querySelector('#new-quote')
const quote=document.querySelector('#quote')
const person=document.querySelector('.person');

btn.addEventListener('click',function()
{
    let random=Math.floor(Math.random()* quotes.length)
    quote.innerText=quotes[random].quote
    person.innerText=quotes[random].person
})