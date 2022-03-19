import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from "react-redux";
import { addItem } from '../actions/itemActions';



class ItemModal extends Component {
    state = {
        modal: true,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = e => {
        console.log("test toggle")
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit= e =>{
        e.preventDefault();
        const newItem ={
            
            name : this.state.name}
        this.props.addItem(newItem);
       // close the modal
        this.toggle();}
    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: '16rem', marginTop: '2rem' }} onClick={this.toggle}>
                    addItem
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to Shopping list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Add shopping item" onChange={this.onChange} />
                            </FormGroup>
                            <Button color="dark" style={{ marginTop: '2rem' }} block>Add Item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }}
    

const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);