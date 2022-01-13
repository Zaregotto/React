import {useEffect, useState} from "react";

export default function Posts(){

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            });
    },[])

    return (
        <div className='posts'>
            <h4>
                {
                    posts.map(value => <p key={value.id}> <b>Title:</b>{value.title}. <b>Body:</b>{value.body}</p>)
                }
            </h4>
        </div>
    )
}