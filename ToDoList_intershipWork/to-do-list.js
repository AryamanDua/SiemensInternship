console.log(document.body.firstElementChild)
const addBtn = document.getElementById("Add")
const clearBtn = document.querySelector(".Clear");
const addTask = document.getElementById("AddTask");
const tasks = document.querySelector(".tasks")


function save() {

    var new_data = document.getElementById('AddTask').value
    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', "[]")
    }
    var old_data = JSON.parse(localStorage.getItem('data'))
    old_data.push(new_data)
    localStorage.setItem("data", JSON.stringify(old_data))
    console.log(old_data)
}
function clear() {
    let inputData = document.getElementById("AddTask")
    inputData.value = ''
}


$(".Add").click(function add() {
    save();

    let addTaskContent = addTask.value;

    $("#tasks").append(         //single line implentation of createElement() & appendChild();<div class="form-check"></div>
        `<div class="task border border-2 d-flex justify-content-between my-3 task-menu ">
        <span class="bg-dark p-3"><input class="form-check-input" type="checkbox"  ><label class="form-check-label" for="flexCheckDefault"></label></span>
    <p id="paragraph" class="TaskContent p-3">${addTaskContent}</p>
    <span class="bg-dark p-3"><button  class="exit btn text-white" href="#" onclick="clear()">X</button></span>
    </div></div>`
    )

    clear()

    //strikethrough checkbox done

    $(".form-check-input").click(function () {

        console.log("one")


        if ($((this).checked)) {
            $(this).parent().next()[0].style.textDecoration = "line-through"


        }

        if ((this).checked == false) {
            console.log("three")
            $(this).parent().next()[0].style.textDecoration = "none"


        }


    })

    const tasks = document.getElementsByClassName("tasks")
    $("button.exit").click(function clear() {



        $(this).parent().parent().remove()




    })
    const allData = document.querySelectorAll(".task")
    console.log(allData)


})
clearBtn.addEventListener("click", clearTask = () => {
    tasks.textContent = "";
    $(".Clear").click(function () {
        $(".tasks").html()
    })
    localStorage.clear()

})

const allData = document.querySelectorAll(".task")
// console.log(allData) 

//Search Function implementation: 
const searchFieldInput = document.querySelector("#search")
searchFieldInput.addEventListener("input",function(e){
    const findValue = e.target.value.toLowerCase()
    // const 
    const myTasks = document.getElementById("tasks")
    const mytask = myTasks.getElementsByTagName("div")
    // console.log(mytask)
    for(var i=0;i<mytask.length;i++){
        // console.log(" we get here")
        let taskDescription = mytask[i].getElementsByTagName("p")[0]
        console.log(taskDescription)
        // console.log(taskDescription.textContent||taskDescription.innerHTML)
        td = taskDescription.textContent||taskDescription.innerHTML
        console.log(td)
        console.log(findValue)
        if(td.toLowerCase().indexOf(findValue)> -1 ){
            // console.log(" we read value")
            taskDescription.style.display = ""
            $(".table").append(`<tr><th scope = "row">${td}</th></tr>`)
            
        }
        else{
            taskDescription.style.display = "none"
        }
        if(td ==  ""){
            $(".table").remove()
        }
   
    }


})






