import {useEffect, useState} from "react";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });
    },[]);

    return (
        <div className={'users'}>
            <h4>
                {
                    users.map(value => <p key={value.id}> <b>Name:</b> {value.name}. <b>Username:</b> {value.username}. <b>Email:</b> {value.email}</p>)
                }
            </h4>
        </div>
    )
}