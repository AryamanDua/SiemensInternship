$(document).ready(function () {
    $(this).scrollTop(0)
})


let a = setTimeout(function () {
    console.log("we are here")
}, 2000)

clearTimeout(a);



document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let object = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment
                object.textContent = current;
                if (current == end) {
                    clearInterval(timer)
                    // counter(id,start,end,duration)

                }
            }, step)
    }



    let a = {
        name: "aryaman",
        age: 21
    }

    for (key in a) {
        console.log(a[key])
    }

    $("#btn1").click(function () {
        alert("Test: " + $("#text").html())
    })
    // $(document).ready(function(id,start,end, duration){
    //     let object = document.getElementById(id),


    // })

    //setInterval and setTimeout
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 4287, 2400);
    counter("count3", 0, 2007, 3000);
    counter("count4", 0, 1387, 5000);
})
const UserDetails = []

console.log(document.getElementById("submit-btn"))
const submit = document.getElementById("submit-btn")
submit.addEventListener('click', addDetails = ()=>{
    
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const text = document.getElementById("text-input").value;
   
    const contact = {
        name: name,
        email: email,
        text: text
    };
    
    UserDetails.push(contact);
    console.log(UserDetails)

    document.getElementById("name-input").value=""
    document.getElementById("email-input").value=""
    document.getElementById("text-input").value=""
    

    



}

)
// function addDetails(){
   

// const txt1 = document.getElementById("username");
// const txt2 = document.getElementById("phone");
// const txt3 = document.getElementById("email");
// const txt4 = document.getElementById("text");

// function getMsg(event,){
//     event.preventDefault();

// }