module.exports = function toReadable (number) {
  let key = 
  {
   0:'zero',
   1:'one',
   2:'two',
   3:'three',
   4:'four',
   5:'five',
   6:'six',
   7:'seven',
   8:'eight',
   9:'nine',
   10:'ten',
   11:'eleven',
   12:'twelve',
   13:'thirteen',
   14:'fourteen',
   15:'fifteen',
   16:'sixteen',
   17:'seventeen',
   18:'eighteen',
   19:'nineteen',
   20:'twenty',
   30:'thirty',
   40:'forty',
   50:'fifty',
   60:'sixty',
   70:'seventy',
   80:'eighty',
   90:'ninety',
   100:'hundred',
 }

 let result = '';
    
 if(number/100>=1)//сотни
 {
 let numHundred = Math.trunc(number/100);
 let numberX = number - numHundred*100;
 let numTeen = Math.trunc(numberX/10)*10;
 let num = numberX - numTeen;
   if(number - numHundred*100 == 0){
 result = `${key[numHundred]} ${key[100]}`;
 }
   else if(num==0 || numTeen<20){
 result = `${key[numHundred]} ${key[100]} ${key[numberX]}`;
 }
 else{
 result = `${key[numHundred]} ${key[100]} ${key[numTeen]} ${key[num]}`
 }
 }
 else if(number>20)// числа больше 20
 {
 let numTeen = Math.trunc(number/10)*10;
 let num = number - numTeen;
   if(number - numTeen == 0){
 result = key[number];
 }
   else{
 result = `${key[numTeen]} ${key[num]}`;
 }
 }
 else{
 result = key[number];
 }
 return result;
}
