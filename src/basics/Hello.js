import React from 'react'


//maps - creating lists
function Hello() {
    const person = [
        {
            name : 'Thisara',
            age:24,
            skill: 'react'
        },
        {
            name : 'Chathuranga',
            age:26,
            skill: 'angular' 
        },
        {
            name : 'athukorala',
            age:24,
            skill: 'Vue'
        },
        {   name : 'abcd',
            age:24,
            skill: 'react'
        }
    ];

    const personList = person.map((persons) => { 
        return(
        <h2>
            name : {persons.name} 
            age : {persons.age} 
            skill : {persons.skill}
        </h2>
    )});

    return (
        <div>
        {personList}
        </div>
    )
}

export default Hello;





// import React from 'react';

// // function Hello(){
// //     return(
// //         <div>Hello Thisara</div>
// //     )
// // }

// const Hello = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.name} </h1>
//             {props.children}   
//         </div>
//     )
// }

 

// export default Hello;