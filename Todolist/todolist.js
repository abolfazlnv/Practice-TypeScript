"use strict";
var pluseBtn = document.querySelector(".pluse");
var addSection = document.getElementById('add');
// select text input & add button
var addTxt = document.getElementById("addTxt");
var addBtn = document.getElementById("addBtn");
var msgTxt = document.getElementById('msg');
var lists = document.getElementById('lists');
var closeBtn = document.getElementById('close');
// proccess add list
addBtn.addEventListener("click", function () {
    addTxt.classList.add("hide");
    addBtn.classList.add("hide");
    if (addTxt.value !== "") {
        lists.innerHTML += "<li> " + addTxt.value + " </li>";
        msgTxt.textContent = "Success";
        msgTxt.classList.add('showMsg');
        addTxt.value = "";
    }
    else {
        msgTxt.textContent = "Warning, Type something";
        msgTxt.classList.add('errMsg');
        msgTxt.classList.add('showMsg');
    }
    setInterval(function () {
        msgTxt.classList.remove('showMsg');
        msgTxt.classList.remove('errMsg');
        addTxt.classList.remove("hide");
        addBtn.classList.remove("hide");
    }, 2000);
});
// hide and show add section
pluseBtn.addEventListener("click", function () {
    addSection.classList.toggle('addHeight');
    pluseBtn.classList.toggle('plusSym');
});
