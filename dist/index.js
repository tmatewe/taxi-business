let existingUser = document.querySelector(".existing-user");
let allMainBtn = document.querySelector(".main-buttons");
let newUser = document.querySelector(".new-user");
let existingUserBtn = document.querySelector(".existingUserBtn");
let newUserBtn = document.querySelector(".newUserBtn");
existingUserBtn.addEventListener("click", () => {
  existingUser.style.display = "block";
  allMainBtn.style.display = "none";
});
newUserBtn.addEventListener("click", () => {
  newUser.style.display = "block";
  allMainBtn.style.display = "none";
});
