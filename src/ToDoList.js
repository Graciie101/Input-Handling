import React, { Component } from 'react';
import "./TodoList.css";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValues: {
                name: '',
                surname: '',
                age: 0,
                gender: '',
                race: '',
                email: '',
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput({ target: { value } }, key) {
        this.setState({ inputValues: { ...this.state.inputValues, [key]: value } });
    }

    handleClick() {
        const inputs = document.querySelectorAll('.input-todo-list');
        let exit = false;

        inputs.forEach(element => {
            if (element.value === "") {
                if (!exit) {
                    element.focus();
                    exit = true;
                }
            }
        });
    }


    render() {
        return (
            <div className="todoListMain">
                <div>
                    <input className="input-todo-list" placeholder="Name" value={this.state.name} onChange={(event) => this.handleInput(event, 'name')} /><br />
                    <input className="input-todo-list" placeholder="Surname" value={this.state.surname} onChange={(event) => this.handleInput(event, 'surname')} /><br />
                    <input className="input-todo-list" placeholder="Age" value={this.state.age} onChange={(event) => this.handleInput(event, 'age')} /><br />
                    <input className="input-todo-list" placeholder="Gender" value={this.state.gender} onChange={(event) => this.handleInput(event, 'gender')} /><br />
                    <input className="input-todo-list" placeholder="Race" value={this.state.race} onChange={(event) => this.handleInput(event, 'race')} /><br />
                    <input className="input-todo-list" placeholder="Email" type="email" value={this.state.email} onChange={(event) => this.handleInput(event, 'email')} /><br />

                    <button onClick={this.handleClick}>Click</button>
                </div>
            </div>
        );
    }
}

export default TodoList
//email: 'Matthew@gmail.com',