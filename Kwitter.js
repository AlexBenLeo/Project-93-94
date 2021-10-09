function addUser() {
    kwitter=document.getElementById("user_name").value;
    localStorage.setItem("user_name", kwitter);
    window.location="Kwitter_room.html";
}
