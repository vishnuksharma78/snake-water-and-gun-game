let user = prompt("Enter s ,w & g");
let cpuArr = ["s", "w", "g"];
let idx = Math.floor(Math.random()*cpuArr.length);
let cpu = cpuArr[idx];


const match = (cpu, user) => {
    if (cpu === user) {
        return "Nobody win . Match is tie";
    }
     else if (cpu === "s" && user === "w") {
        console.log(`cpu value = ${cpu} and user input = ${user}`)
        return "cpu";
    }
     else if (cpu === "s" && user === "g") {
            console.log(`cpu value = ${cpu} and user input = ${user}`)
        return "user";
    }
     else if (cpu === "g" && user === "s") {
            console.log(`cpu value = ${cpu} and user input = ${user}`)
        return "cpu";
    }
     else if (cpu === "g" && user === "w") {
            console.log(`cpu value = ${cpu} and user input = ${user}`)
        return "user";
    }
    else if (cpu === "w" && user === "g") {
            console.log(`cpu value = ${cpu} and user input = ${user}`)
        return "cpu";
    }
    else if (cpu === "w" && user === "s") {
            console.log(`cpu value = ${cpu} and user input = ${user}`)
        return "user";
    }
}
let res=match(cpu ,user)
document.write("The winner is : "+ res )