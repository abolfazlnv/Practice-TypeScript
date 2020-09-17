let pluseBtn = document.querySelector(".pluse")!;
let addSection = document.getElementById('add')!;

// select text input & add button
let addTxt = <HTMLInputElement>document.getElementById("addTxt")!;
let addBtn = document.getElementById("addBtn")!;
let msgTxt = document.getElementById('msg')!;
let lists = document.getElementById('lists')!;
let closeBtn = document.getElementById('close')!;

// proccess add list
addBtn.addEventListener("click", ()=>{
    addTxt.classList.add("hide");
    addBtn.classList.add("hide");
    if (addTxt.value !== "") {
        lists.innerHTML +=`<li> ${addTxt.value} </li>` 
        msgTxt.textContent = "Success";
        msgTxt.classList.add('showMsg');
        addTxt.value = "";
    }else {
        msgTxt.textContent = "Warning, Type something";
        msgTxt.classList.add('errMsg');
        msgTxt.classList.add('showMsg');
    }
    setInterval(()=>{
        msgTxt.classList.remove('showMsg');
        msgTxt.classList.remove('errMsg');
        addTxt.classList.remove("hide");
        addBtn.classList.remove("hide");
    },2000)
})


// hide and show add section
pluseBtn.addEventListener("click" , ()=>{
    addSection.classList.toggle('addHeight');
    pluseBtn.classList.toggle('plusSym');
})
