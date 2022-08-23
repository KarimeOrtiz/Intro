
function hello(){
    console.log("Diana")
}

function sayHello(name){
    let lastName = "Ortiz";
    console.log("Hello " + name + " " + lastName + "!!");
}

function sum(num1,num2){
    return (num1+num2);
}

function exec1() {
    //print numbers from 0 to 20
    // except 7 and 13
    for(let i = 0; i < 21; i++){
        if(i != 7 && i != 13){
            console.log(i);
        }
    }

    let name = "";
    // show an error if name is empty
    if(!name){
        console.error("Name is required");
    }
}

function exec2(){
    let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 302, -2, -29, 12, 123];

    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        let item = numbers[i];
        console.log(item);
        total = total + item;
        //add everu number to the total
        if(numbers[i] < 0){
            console.log("Negative:" + item)
        }
    }

    console.log("total is:" + total);


}

function init(){
    console.log("Intro page!");
    hello();

    let myName = "Diana";
    sayHello(myName);

    let res = sum(21, 21);
    console.log(res);

    exec1();

    exec2();
}

window.onload = init;