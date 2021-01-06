import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
const TeacherProfile = () => {
    let d = []
    const { id } = useParams()
    const user =JSON.parse(localStorage.getItem('user_majlis'));
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch(`/all/teacherprofile/${id}`, {
            headers: {
                "authorization": localStorage.getItem('Token_majlis').replace(/['"]+/g, '')
            }
        }).then(res => res.json()).then(responce => {
           d = responce
           setCourse(responce)
           console.log(typeof(responce));
          
           console.log('Course for',course);
           
        })
    }, [])

    return (
        
        <div>
            <h1>{course.name}</h1>
        {
          course.question ?  course.question.map(item=>{
            return(
            <>
            <p>{item.text}</p>
            {
                item.cover.map(sample=>{
                    return(
                        <>
                            <button>{sample}</button>


                        </>
                    )
                })
            }
            </>
            )
            }):"fuck"
            
        }
        </div>
    );
};

export default TeacherProfile;