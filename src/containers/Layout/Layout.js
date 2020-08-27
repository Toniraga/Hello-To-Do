import React, { Component } from 'react'
import Nav from '../../components/Nav/Nav'
import AddToDo from '../../components/AddToDo/AddToDo';
import ListToDo from '../../components/ListToDo/ListToDo';
import ListWrapper from '../../HOC/ListWrapper/ListWrapper';
import Modal from '../../components/Modal/Modal';

export class Layout extends Component {
    state = { toDoList : 
        {
            name: '',
            description: '',
            isbm: ''
        },

        lists: [],
        showModal: false
    }

    setInputValue = (e) => {
        const {toDoList} = { ...this.state }
        const currentState = toDoList;
        const {name, value} = e.target;
        currentState[name] = value;
        this.setState( {toDoList: currentState} )
    }


    checkInputField = () => {
        const {name, description, isbm} = this.state.toDoList;
        return (name === '' || description === '' || isbm === '');
    }

    DeleteToDo = (e, index) => {
        const {lists} = {...this.state}
        const currentLists = lists;
        currentLists.forEach((list, ind) => {
            if (index === ind) {
                currentLists.splice(ind, 1)
            }
        })
        this.setState({ lists: currentLists });
    }


    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.checkInputField()) {
            return;
        }
        const {toDoList} = { ...this.state}
        const currentToDoState = toDoList;
        const {lists} = { ...this.state }
        const currentListState = lists;
        const newListState = [...currentListState, {...currentToDoState}];
        this.setState( {lists: newListState} )
        this.setState( {toDoList: {name: '', description: '', isbm: ''}})
    }

    showModalHandler = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }))
    }


    render() {
        return (
            <div>
                <Nav modalOpen={this.showModalHandler} />
                {(this.state.showModal) ? <Modal closeModal={this.showModalHandler} /> : null }
                <AddToDo
                    name={this.state.toDoList.name}
                    description={this.state.toDoList.description}
                    isbm={this.state.toDoList.isbm}
                    changed={this.setInputValue}
                    submitted={this.onFormSubmit}
                />
                <ListWrapper>
                    {this.state.lists.map( (list, index) => {
                        return <ListToDo 
                            name={list.name}
                            description={list.description}
                            clicked={this.DeleteToDo}
                            isbm={list.isbm}
                            index={index}
                            key={index}  />
                    })}
                </ListWrapper>
            </div>
				);
    }
}

export default Layout
