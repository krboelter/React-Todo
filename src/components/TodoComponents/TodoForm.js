import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleChange = (event) => {
        event.preventDefault()

        console.log('Working')
    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log('Submitted')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value=''
                    onChange={this.handleChange}
                />

                <button>Add ToDo</button>
            </form>
        )
    }
}

export default TodoForm