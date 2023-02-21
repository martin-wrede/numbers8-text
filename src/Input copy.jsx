import React, { useState } from "react";
import { AmbientLightProbe } from "three";
// import Task from "./components/Task";
import "./index.css";
 
// If you want to parse the URL of current page in browser:
// running on https://www.example.com?name=n1&name=n2
let params = new URLSearchParams(location.search);
// params.get('name') // # => "n1"

let age= parseInt(params.get("age"), 10);
let title = params.get("title"); 
let name = params.get("name"); 
let text = params.get("text"); 

console.clear
 console.log(age,name,title,text)
if(age || name || title || text){
  
}
// all button elements should have display:none

export default function Input(style2) {

      const  [ age, setAge ] = useState(1)
      const  [ name, setName ] = useState("Dear Iris")
      const  [ title, setTitle ] = useState("Happy Birthday")
      const  [ text, setText ] = useState( "Greetings from Anne")
      const [showForms, setShowForms] = useState(true)
      const [showDiv, setShowDiv] = useState({opacity:'1.0'})     
      // useState({backgroundColor:'green'})   

     const toggleFunction = (par) => {
    
     // console.log(par)
     // return( setShowDiv({opacity:'0.3'}))
     return(setShowDiv({opacity:par}))
     }

      const toggleForms= (event)=> {
       // setShowForms(true) ? console.log("hallo") : console.log("nein")
        setShowForms(!showForms)
      
      }

      const changeAge =(event)=>{
        const setAgeNew = event.target.value
        setAge(setAgeNew)
      }
      const changeTitle = (event)=>{
        const setTitleNew = event.target.value
        setTitle(setTitleNew)
      // console.log(setAge) 
      }

      const changeName = (event)=>{
        const setNameNew = event.target.value
        setName(setNameNew)
      // console.log(setAge)
      }

      const changeText = (event)=>{
        const setTextNew = event.target.value
        setText(setTextNew)
      // console.log(setAge)
      }
        
      
    const handleSubmit = (event) => {
    event.preventDefault();
     
    // const testUrl = `https://martin-wrede.github.io/numbers5-text/index.html?age=${age}&name=${name}&title=${title}&text=${text}`;
    const testUrl = `http://localhost:3000/numbers5-text/index.html?age=${age}&name=${name}&title=${title}&text=${text}`;
    window.location.href= testUrl;
    console.log(testUrl)
    
    }
   
    
        
      return(     
      <>
      <div className="meindiv">
          <div className="meindiv2"><h1>{age}</h1></div>
          <div className="meindiv3"><h2>{title}</h2></div>
          <div className="meindiv4"><h3>{name}</h3> </div>
          <div className="meindiv5"><h4>{text}</h4></div>

      <div className="meindiv" >
          <form onSubmit={handleSubmit}>
            <div className="meindiv2" id="id2"  style={showDiv}  >  
                <input   defaultValue={age} className="input" onChange={changeAge} />  
            </div>
            <div className="meindiv3" id="id3"  style={showDiv}  >  
                <input defaultValue="Happy Birthday" className="input" onChange={changeTitle} /> 
            </div>
            <div className="meindiv4" id="id4"  style={showDiv}  >  
                <input defaultValue="Dear Iris" className="input" onChange={changeName} />  
            </div>
            <div className="meindiv5" id="id5"   style={showDiv}  >        
                <input defaultValue="Greetings from Anne" className="input"  onChange={changeText} /> 
            </div>
            
            <div className="button1"  style={showDiv}>  
          <button className="button" type="submit">
          Submit
        </button>
        
        </div>
        
      </form>
      <div id="button2">  
              <button  
              className="button"
                onClick={()=>{
                  showForms ?
                  toggleFunction(0.0) : toggleFunction(1.0) // opacity either transparent or 100% 
                  setShowForms(!showForms)   // toggle true or false
              }}
              >
              Show/Hide Forms
              </button>
      </div>
      </div>
      
      </div>
      </>
    )
}
