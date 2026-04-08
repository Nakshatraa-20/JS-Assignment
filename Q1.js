function isPrime(n){
    if(n<2)
        return false;
    for(let i=2;i*i<=n;i++)
    {
        if(n%i==0)
            return false;
    }

    return true;
    
}

let L = parseInt(prompt("enter L:"))
let R = parseInt(prompt("enter R:"))
let K = parseInt(prompt("Enter K:"))

let count=0;
for(let x=L;x<=R;x++)
{
    if(x%K !=0)
        continue;
    
    let str=x.toString();
    if(str.includes('0'))
        continue;
    let sum=0
    for(let i=0;i<str.length;i++)
    {
        sum+=parseInt(str[i]);
    }
    if(isPrime(sum))
    {
        count++
    }


}

alert(count);