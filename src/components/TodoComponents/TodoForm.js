import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            inputValue: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addTodo(event, this.state.inputValue)

        this.setState({
            inputValue: ''
        })
    }

    
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }


    render() {
        return (
            <form className='main-form' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />

                <button>Add ToDo</button>
            </form>
        )
    }
}

export default TodoForm