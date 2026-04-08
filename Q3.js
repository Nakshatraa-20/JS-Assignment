function isPalindrome(num){
    let str=num.toString();
    let reversed =str.split('').reverse().join('');
    return str === reversed;


}

let N=parseInt(prompt("enter N"));
let K=parseInt(prompt("enter K:"));

let answer=-1

for(let X=0;X<=10000;X++)
{
    let value=N+X;
    if(value%K===0 && isPalindrome(value))
    {
        answer=X;
        break;
    }
}

alert(answer);



