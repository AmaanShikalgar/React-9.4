import React from "react";

const App = () => {
    return(
      <div>
        <MyComponent/>
      </div>
    );
};

const componentStyles={backgroundColor:"blue",color:"white",padding:10,borderRadius:20}

const MyComponent = () =>{
  return(
    <div style={{display:"flex",height:"100vh",justifyContent:"center",alignContent:"center"}}>
      <div style={componentStyles}>
        hello world
      </div>
    </div>
  );
}

export default App;