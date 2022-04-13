import React, {Component, useState, useEffect} from 'react' ;
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap' ;
import { CSSTransition,TransitionGroup} from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import axios from 'axios';

function ShoppingList() {

    const [items, setItems]=useState<Array<{id:string,name:string}>>(
        
    )
    axios.get('/api/items')
    .then(response => {
        
        setItems(response.data);
    });

function deleteItem(id: any){
axios.delete(`/api/items/${id}`).then(res=>{
console.log("succes")
})
}
function addItem(item: any){
axios.post('/api/items',item).then(res=>{
console.log("succes")
})
}

            return(
            <Container>
                <Button color="dark" style={{marginBottom:'10px'}}
                        onClick={() => {
                            const name = prompt('Enter Item');
                            const newItem ={
                                name:name
                            }
                            if(name){
                                addItem(newItem)
                                
                            }
                        }}>
                    Add item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-List">
                        { items.map( ({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem> 
                                    <Button className='remove-btn' color="danger"
                                     onClick={()=>{deleteItem(id)}}
                                     >
                                        &times;
                                    </Button>
                                    {name}
                                    </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }


export default ShoppingList;