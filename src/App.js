import React , {Component} from 'react';
import CardList from './CardList';
import {robots} from './Robots';
import SearchBox from './SearchBox';

const State = {
	
}


class App extends React.Component {

        constructor(){
			          super();	
			          this.state = {
			          	robots : robots,
			            searchfield : ''
			          }
   				} 

   		onSearchChange(event){
   			console.log(event.target.value);
   		}		

        render(){
			  		return (
			  			<div className="tc">
			            	<h1> Friend's Card List</h1>
			            	<SearchBox searchChange={this.onSearchChange}/>
			  			 	<CardList robots={this.state.robots} />
			            </div>
			  			);
                }
}


export default App;