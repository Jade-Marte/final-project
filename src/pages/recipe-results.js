import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'

class RecipeResults extends React.Component{
    constructor (props) {
        super(props)
            }

        
	render(){ 
		return(

			<>
                <Carousel>
                    {
                        this.props.results.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
				<Button>
					View Now
				</Button>
			</>
		);
	}
}
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img src= {props.item.picture} alt= {props.item.name}></img>
            <p>{props.item.description}</p>
            

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default RecipeResults;
