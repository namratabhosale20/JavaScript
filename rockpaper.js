const computer_choice_d=document.getElementById("cs");
const your_choice_d=document.getElementById("ys");
const result_d=document.getElementById("r");
const possible_choice=document.querySelectorAll("button");
let userchoice;
let compchoice;
let result;
possible_choice.forEach(possible_choice=>possible_choice.addEventListener('click',(e)=>{
 userchoice=e.target.id;
 your_choice_d.innerHTML=userchoice;
 genratecomchoice();
 getresult();
}))
function  genratecomchoice()
{
const randomnumber=Math.floor(Math.random()*3)+1;// or we can use possible_choices.lenghth
console.log(randomnumber);
if(randomnumber===1)
{
compchoice='rock';
}
if(randomnumber===2)
{
compchoice='scissor';
}
if(randomnumber===3)
{
compchoice='paper';
}
computer_choice_d.innerHTML=compchoice;


}
function getresult()
{
if(compchoice===userchoice)
{
result='its a draw';
}
if(compchoice==='rock'&& userchoice==='paper')
{
result='you lost';
}
if(compchoice==='paper' && userchoice==='rock')
{
result='you won';
}
if(compchoice==='scissor' && userchoice==='paper')
{
result='you lost';
}
if(compchoice==='paper' && userchoice==='scissor')
{
result='you won';
}
if(compchoice==='rock' && userchoice==='scissor')
{
result='you lost';
}
if(compchoice==='scissor' && userchoice==='rock')
{
result='you won';
}
r.innerHTML=result;
}
