var users = [
    {Id: 3, Name: "Ruben", SurName: "Batistas Santos", UserName: "Admin"},
    {Id: 7, Name: "Oriolis A.", SurName: "Camilo", UserName: "ocamilo"},
    {Id: 8, Name: "Emmanuel", SurName: "De los Santos Cordero", UserName: "esantos"},
    {Id: 9, Name: "Robert 2", SurName: "Junior", UserName: "Rjunior"}
];

function LoadData() {
    users.forEach(element => {
        var table = document.getElementById("data-table");
        var newRow = table.insertRow(1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);        
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        cell1.innerHTML = "<input class='form-check-input' type='checkbox' />";
        cell2.innerHTML = element.Id;
        cell3.innerHTML = element.Name;
        cell4.innerHTML = element.SurName;
        cell5.innerHTML = element.UserName;
        cell6.innerHTML = "<button class='btn btn-primary' onclick='EditUser()'>" + 
                            "<i class='fas fa-pencil-alt'></i>" +
                          "</button>" +
                          "<button class='btn btn-light' onclick='DeleteUser()'>" +
                            "<i class='far fa-trash-alt'></i>" +
                          "</button>";
    });
}

function Refresh() {
    LoadData();
}

function CreateUser() {
    alert("New User Created");
}

function EditUser() {
    alert("User Edited");
}

function DeleteUser() {
    alert("User Deleted");
}

function ExportExcel() {
    alert("Export");
}