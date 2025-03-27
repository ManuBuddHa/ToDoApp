const dialog = document.querySelector("#project-dialog");
const projectSubmit = document.querySelector("#project-submit");
projectSubmit.addEventListener("click",projectNew);
const project=[];
function addProject(){
   dialog.showModal();
}
function closeDialog(){
   event.preventDefault();
   dialog.close();
}
function projectNew(){
   const projectName = document.querySelector("#project-name");
   project.push(projectName.value);
   console.log(project);
}
export {addProject,closeDialog,projectNew};