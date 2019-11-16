import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
      Data: []
    }
    this.getData = this.getData.bind(this);
    this.getData();
  }
   
  clicked(item){
  
   // window.open("./BlogDetail");
   alert(item.data);
   
  
  }



  getData() {
    axios.get('http://localhost:3001/todo/tasks')
      .then(response => {
        console.log('data response', response);
         let completeData =[];
        response.data.data.forEach(element => {
         
          completeData.push(element)

          
        });
        this.setState({
          Data: completeData,
          
        })
      })
      .catch(error => {
        console.log('data error', error);
      })
  }
  render() {
   
    return (
      <div>
        <h1>
          Blog Titles.
      </h1>
        <h2>
        {
            this.state.Data.map((item,index)=> (
              <p>
                <a onClick = {this.clicked.bind(this,item)}> 
                {item.title}
                </a>
              </p>
            ))
         }
         </h2>
      </div>
    );
  }
}

