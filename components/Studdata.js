import React from 'react'


function Studdata(props) {
    console.log(props);

    const{name,age}=props.stud;
  return (
    <div>

        <h3>{name}</h3>
        <h3>{age}</h3>



    </div>
  )
}



export default Studdata
