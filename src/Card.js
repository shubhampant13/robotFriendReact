import React from "react";

const Card = (props) => {
		return(
            <div className="tc bg-light-green ma2 pa3 dib br3 grow">
     			<img alt="Images" src={`https://robohash.org/${props.id}?set=set1&size=190x200`} />
     			<div>
                     <h2>{props.name}</h2>
                     <p>{props.email}</p>  
     			</div>
            </div>
			);

}

export default Card;
