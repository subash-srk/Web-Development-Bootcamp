var userList = ["Subash", "Ariana", "Abel", "Kate", "Lucy"];
var name = prompt("Whats Your Name? ");
if (userList.includes(name)){
    alert("Welcome, "+name)
}else{
    alert("Sorry")
}