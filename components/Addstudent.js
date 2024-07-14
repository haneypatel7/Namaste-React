import React, { useState } from "react";

function Addstudent(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function studentname(e) {
    setName(e.target.value);
  }

  function studentage(e) {
    setAge(e.target.value);
  }

  function addstud() {
    props.adduser(name, age);
  }

  return (
    <div>
      Studentname:
      <input type="text" onChange={studentname} />
      Studentage:
      <input type="text" onChange={studentage} />
      <button onClick={addstud}>ADD</button>
    </div>
  );
}

export default Addstudent;
