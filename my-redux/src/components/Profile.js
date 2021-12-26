import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const userD = useSelector((state)=>state.users.value);
    console.log(userD);
    return (
        <div>
            <h1>Profile Info</h1>
            <h5>Name: {userD.name}</h5>
            <h6>Age:{userD.age}</h6>
            <p>Email:{userD.email}</p>
        </div>
    )
}

export default Profile
