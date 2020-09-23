class ToDo {
    constructor(name, completed) {
        this.completed = completed;
        this.name = name;
    }
}
var todolist = [];
if(JSON.parse(localStorage.getItem("ToDo")) != null){
todolist = JSON.parse(localStorage.getItem("ToDo"));
}
t1 = new ToDo(123, true);
t2 = new ToDo(456, false);

function show(){
    var todolist1 = JSON.parse(localStorage.getItem("ToDo"));
    document.getElementById("todo-list").innerHTML = "";
    if(todolist1 != null){
    for(i = 0; i < todolist1.length; i++){
        if(todolist1[i].completed == true){
        document.getElementById("todo-list").innerHTML += "<li class='done'>" + todolist1[i].name  +  "<button class='delete' id='btndelX' onclick=Xoa(" + i +")>x</button>" + "<button class='btndone' id='btndoneV' onclick=Done(" + i +")>v</button>" + "</li>"+ "</br>";
        // document.querySelector("li").setAttribute("class","done");
    }else{
        document.getElementById("todo-list").innerHTML += "<li>" + todolist1[i].name  +  "<button class='delete' id='btndel' onclick=Xoa(" + i +")>x</button>" + "<button class='btndone' id='btndone' onclick=Done(" + i +")>v</button>" + "</li>"+ "</br>";
        }
    }
}
    
}

function Xoa(id){
    if(confirm("Xóa công việc này?")){
    todolist.splice(id,1);
    var todostr = JSON.stringify(todolist);
    localStorage.setItem("ToDo",todostr);
    show();
    }
}

function Done(id){
    todolist[id].completed = true;
    var todostr = JSON.stringify(todolist);
    localStorage.setItem("ToDo",todostr);
    show();

}

window.onload = function(){
    var btnsubmit = document.getElementById("btnsubmit");
    btnsubmit.onclick = function(e){
        var name = document.getElementById("todo").value;
        if(name == ""){
            alert("Vui lòng nhập công việc!");
        }else{
        todolist.push(new ToDo(name, false));
        var todostr = JSON.stringify(todolist);
        localStorage.setItem("ToDo",todostr);
        show();
        e.preventDefault();
        }
    }
    
    show();
}