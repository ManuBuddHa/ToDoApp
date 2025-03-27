import './styles.css';
import { addProject,closeDialog,projectNew } from './project';
const Todo=[];
const projectSubmitBtn = document.querySelector("#add");
projectSubmitBtn.addEventListener('click',addProject);
const close = document.querySelector("#close");
close.addEventListener("click",closeDialog);
