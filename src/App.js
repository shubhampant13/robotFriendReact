import React from 'react';
import CardList from './CardList';
import {robots} from './Robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {

        constructor(){
			          super();	
			          this.state = {
			          	robots : robots,
			            searchfield : ''
			          }
   				} 

   		onSearchChange = (event) => {
            this.setState({searchfield : event.target.value});
   		}		

        render(){
        	        const filterRobots = this.state.robots.filter(robots => 
        	         			{
   								return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   			        			}
   			        		);

                    if(!robots.length)
                    	return <h1> LOADING </h1>

			  		return (
			  			<div className="tc">
			            	<h1>Friend's Card List</h1>
			            	<SearchBox searchChange={this.onSearchChange}/>
			  			 	<Scroll>
			  			 	<CardList robots={filterRobots} />
			  			 	</Scroll>
			            	
			            </div>
			  			);
                }
}


export default App;