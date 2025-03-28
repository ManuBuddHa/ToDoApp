import './styles.css';
import { addProject,closeDialog,projectNew } from './project';
const Todo=[];
const projectSubmitBtn = document.querySelector("#add");
const taskAddBtn = document.querySelector("#task-add");
const taskDialog = document.querySelector("#task-dialog");
taskAddBtn.addEventListener("click",addTask);
projectSubmitBtn.addEventListener('click',addProject);
const close = document.querySelector("#close");
const taskClose =document.querySelector("#task-close");
taskClose.addEventListener("click",taskCloseDialog);
close.addEventListener("click",closeDialog);
function addTask(){
   taskDialog.showModal();
}
function taskCloseDialog(){
   taskDialog.close();
}