import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message : 'hello'
         }
        /*  this.clickHandler = this.clickHandler.bind(this)*/
     }
   /*   clickHandler() {
         this.setState({
             message : 'GoodBye'
         }) 
 */
          clickHandler = ()=> {
         this.setState({
             message : 'GoodBye'
         })
     }
        
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
           {/*      <button onClick={this.clickHandler.bind(this)}>click me</button> */}
          {/*  <button onClick={() => this.clickHandler()}>click me</button> */}
           <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default EventBind
