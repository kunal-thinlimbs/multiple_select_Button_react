import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    button1:false,
    button2:false,
    button3:false,
    button4:false,
    buttonstate:{
      button1:false,
      button2:false,
      button3:false,
      button4:false

    }

    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1>MULTIPLE BUTTON SELECT IN REACT</h1>
          
          
        </header> 
        <div id="button">
        <h1>Select Your Fav Toping For Tasty Pizza</h1>
        <button type="button" className={this.state.buttonstate.button1? "btn btn-success":"btn btn-danger"}
        
        onClick={async()=>{
          {await this.state.buttonstate.button1?this.setState({buttonstate:{...this.state.buttonstate, button1: false}}):this.setState({buttonstate:{...this.state.buttonstate, button1: true}}) }
    
          
        } 
      }
        >onion </button>
      
        <button type="button" className={this.state.buttonstate.button2? "btn btn-success":"btn btn-danger"}
        
        onClick={async()=>{
          {await this.state.buttonstate.button2?this.setState({buttonstate:{...this.state.buttonstate, button2: false}}):this.setState({buttonstate:{...this.state.buttonstate, button2: true}}) }
      
          
        } 
      
      }
        >Capcium </button>
      
        <button type="button" className={this.state.buttonstate.button3? "btn btn-success":"btn btn-danger"}
        
        onClick={async()=>{
          {await this.state.buttonstate.button3?this.setState({buttonstate:{...this.state.buttonstate, button3: false}}):this.setState({buttonstate:{...this.state.buttonstate, button3: true}}) }
        
            
          } }
        >Tomato</button>
      
        <button type="button"className={this.state.buttonstate.button4? "btn btn-success":"btn btn-danger"}
        
        onClick={async()=>{
          {await this.state.buttonstate.button4?this.setState({buttonstate:{...this.state.buttonstate, button4: false}}):this.setState({buttonstate:{...this.state.buttonstate, button4: true}}) }
         
            
          } }
        >Cheese </button>
        </div>


        <h3> you have Select:

{this.state.buttonstate.button1 && <p style={{color:"lightgreen",fontWeight:"600"}}>onion</p>}

{this.state.buttonstate.button2 && <p  style={{color:"lightgreen",fontWeight:"600"}}>Capcium</p>}

{this.state.buttonstate.button3 && <p  style={{color:"lightgreen",fontWeight:"600"}}>Tomato</p>}

{this.state.buttonstate.button4 && <p  style={{color:"lightgreen",fontWeight:"600"}}>Cheese</p>}


        </h3>

        <p style={{marginTop:"200px"}}>YOU CAN USE IT WITHOUT ASYNC AWAIT ALSO DEPENDS OR REQUIREMENT</p>
      

      

      



        

      </div>
    );
  }
}

export default App;
