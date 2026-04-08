    let N=parseInt(prompt("enter N"));
    let seed=parseInt(prompt("enter seed:"));
    let current=N;
for(let i=1;i<=3;i++)
{
    if(current%2===0)
        current=current/2+seed;
    else
        current=current*3-seed;

}

let isThreeDigit=(current>=100&&current<=999);

let str=current.toString();
let mid=parseInt(str[1]);
if(isThreeDigit && mid===seed)
{
    alert("YES,"+current);
}

else{
    alert("NO"+current);
}





