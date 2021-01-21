import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'

class Recipe_results extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            items: [
                {
                    name: "Rescipe results #1",
                    description: "Five stars!"
                },
                {
                    name: "Recipe results #2",
                    description: "Four stars!"
                },
                {   name : "Recipe results #3",
                    description: "Three stars"
                }
            ]
        }
    }

        
	render(){ 
		return(

			<>
                <Carousel>
                    {
                        this.state.items.map( (item, i) => <Item key={i} item={item} /> )
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
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Recipe_results;
