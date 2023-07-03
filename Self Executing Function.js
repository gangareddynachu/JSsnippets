//Inside function immediately invoked function
const makeWithdraw = (balance) => 
      ((copyBalance)=>{
          let balance= copyBalance;
          const doBad = () =>{
              console.log("do bad with money");
          };
          doBad();
          return {
              withdraw(amount){
                  if(balance>=amount){
                      balance -= amount;
                      return balance;
                  }
                  return "insuff money";
              },
          };
      })(balance);

const firstAccount = makeWithdraw(100);
console.log(firstAccount.withdraw(20));




//async IIFE allows to use await and for-await
const getFileStream = async(url) =>{
    return [1,2,3,4,5];
};


(async () => {
    const stream = await getFileStream("https://domain/file.txt");
    for await( const chunk of stream) {
        console.log({chunk});
    }
})();


for(var i=0;i<2;i++){
    const button = document.createElement("button");
    button.innerText = `Button ${i}`;
    button.onClick = function (){
        console.log(i);
    }
    document.body.appendChild(button);
}
console.log(i)
//Both buttons with give i=2 since it is global variable

//we can use let in place of var here or use IIFE
for(var i=0;i<2;i++){
    const button = document.createElement("button");
    button.innerText = `Button ${i}`;
    button.onClick = (function (copyofI){
        console.log(i);
    })(i);
    document.body.appendChild(button);
}
console.log(i)
