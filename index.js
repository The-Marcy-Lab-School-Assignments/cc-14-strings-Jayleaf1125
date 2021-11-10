//write your code here
const stripUpperCase = str => {
   let rmvUpCase = "";
   for (let i of str) {
       if (i == i.toLowerCase()) {
           rmvUpCase += i ;
       }
   }
   
   return rmvUpCase;
};

console.log(stripUpperCase('Hello!'));