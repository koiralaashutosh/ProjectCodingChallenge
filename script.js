let loginname = document.getElementById("name");
let loginpassword = document.getElementById("password");

//login
document.getElementById('btn').addEventListener('click', onclick);

function onclick(){
    try {
        console.log("Check");
    let username = loginname.value;
    let userpassword = loginpassword.value;
    console.log(username, userpassword)

    if(username==="Ashutosh" && userpassword==="Jake"){
        window.location.href="./afterlogin.html";
    }
    } catch (error) {
        console.log(error)
    }
}

//afterlogin

document.getElementById('create').addEventListener('click', createclick);
function createclick(){
    try {
        console.log("K XAAAAAAAAAA")
    window.location.href="./createaccount.html";
    } catch (error) {
        console.log(error)
    }
    
}



