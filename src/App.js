import React from "react";

function App() {
  return <Folder name="Desktop">
    <h5>home</h5>
    <h5>documents</h5>

  </Folder>
}

const Folder =(props)=>{
  return  <h4>{props.name}</h4>
}
export default App;
