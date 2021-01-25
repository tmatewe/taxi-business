let allClientsBtn = document.querySelector(".clients-btn");
let addClientBtn = document.querySelector(".addClient");
console.log(addClientBtn);
let editClientBtn = document.querySelector(".edit-clientBtn");
let deleteClientBtn = document.querySelector(".delete-clientBtn");
let addClient = document.querySelector(".add-client");
let editClient = document.querySelector(".edit-client");
let deleteClient = document.querySelector(".delete-client");

addClientBtn.addEventListener("click", () => {
  console.log("add");
  addClient.style.display = "block";
  allClientsBtn.style.display = "none";
});
editClientBtn.addEventListener("click", () => {
  console.log("edit");
  editClient.style.display = "block";
  allClientsBtn.style.display = "none";
});
deleteClientBtn.addEventListener("click", () => {
  console.log("delete");
  deleteClient.style.display = "block";
  allClientsBtn.style.display = "none";
});
