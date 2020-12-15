import React,{Component} from "react";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
class App extends Component {
  render(){
  return (
    <div>
    <EventBind />
   {/*  <ClassClick /> */}
  {/* <FunctionClick /> */}
  
    </div>
  )

  }
}

export default App;