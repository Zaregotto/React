
import {useEffect, useState} from "react";

export default function Comments(){

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            });
    },[])

    return(
        <div className={'comments'}>
            <h4>
                {
                    comments.map(value => <p key={value.id}><b>Name:</b>{value.name}. <b>Email:</b>{value.email}. <b>Body:</b>{value.body}</p>)
                }
            </h4>
        </div>
    )
}