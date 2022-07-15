function luckySum(a,b,c){
sum=a+b+c;
if(c==13)
{
    console.log(a+b);}
else if(b==13){
     console.log(a);
}else if(a==13){
console.log(0);
}else{
    console.log(sum);
}
}luckySum(1,13,3)