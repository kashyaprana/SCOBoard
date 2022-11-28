import "./list.scss";
import React from 'react'

import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase.js"
import {useNavigate} from "react-router-dom";
import "../../images/pegasus.png"
import { Checkbox, Delete, Icon} from "@mui/material";

var userList = document.getElementById('userList1');

// this function adds each individual cell data to the table.
function addRow(admin, email, first, last) {
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    var delIcon = document.createElement('img');
    delIcon.src = Icon.Delete;

    td1.innerHTML = first+" "+last;
    td2.innerHTML = email;
    if (admin == true) {
        td3.innerHTML = "Admin";
    } else {
        td3.innerHTML = "Faculty/Staff";
    }
    td4.innerHTML = "Both";
    td5.innerHTML = "Zoom";

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(delIcon);

    userList.appendChild(trow);

}

// This function will loop for each user in database
function fillRow(users) {
    userList.innerHTML = "";
    users.forEach(element => {
        console.log('%d', element.admin);
        console.log(element.first);
        console.log(element.last);
        addRow(element.admin, element.email, element.first, element.last);
    });


    window.onload = getUserData;
}

// This function will call database for data and send it to fillRow.
async function getUserData() {
    const dbRef = await getDocs(collection(db, "users"));

    onSnapshot(dbRef, (querySnapshot)=> {
        var users = [];

        querySnapshot.forEach(doc => {
            users.push(doc.data());
        });

        fillRow(users);
    })
}

const List = () => {
    const navigate = useNavigate() //used for button redirects
    //getUserData();

    return (
        <div className= "no-scroll">
         
            <div className="list">
                
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Officer Type</th>
                        <th>Hearing Type</th>
                        <th>Meeting Type</th>
                        <th>Actions</th> {/*this will be used for delete/edit icon*/}
                    </tr>
                    <tr id="userList1"></tr>
                    </tbody>
                </table>

                <div className = "pegasus-pic">
                    {document.body.style.backgroundColor = "black"}
                </div>
            <button onClick = {() => navigate('/')} >Back to Home</button>
            </div>
        </div>
   )
}

export default List