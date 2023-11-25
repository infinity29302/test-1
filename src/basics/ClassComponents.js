import React,{Component} from 'react';

// export default class Message extends Component{

//     constructor(){
//         super()
//         this.state = {
//             message : "Welcome visitor"
//         }
//     }

//     changeMessage(){
//         this.setState({
//             message: "Thank you for subscribing"
//         })
//     }

//     render(){
//         return (
//             <div>
//                <h1>{this.state.message}</h1> 
//                <button onClick={() =>this.changeMessage()}>Subscribe</button>
//             </div>
//         );
//     }
// };

export class ClassComponents extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment(){
    this.setState({
      count : this.state.count + 1

    })
  }

  clearValues(){
    this.setState({
      count: 0
    })

  }
  


  render() {
    return (
      <div>
        <p>count - {this.state.count} </p>
        <button onClick={() => this.increment()}>Increment</button><br></br><br></br>
        <button onClick={() => this.clearValues()}>Clear</button>
      </div>
    )
  }
}

export default ClassComponents

 