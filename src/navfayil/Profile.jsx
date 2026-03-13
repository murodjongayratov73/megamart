import React from "react";

function Profile(){

const user = JSON.parse(localStorage.getItem("user"));

return(

<div style={{padding:"40px"}}>

<h1>Profile</h1>

<p>Name: {user.name}</p>
<p>Surname: {user.surname}</p>
<p>Email: {user.email}</p>

</div>

)

}

export default Profile;