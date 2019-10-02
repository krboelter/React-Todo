import React from 'react';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: props.data
        }
    }

    render() {
        return(
            <div>
                {this.state.data.map((item) => {
                    return(
                        <div className={`${item.id}`}>{item.task}</div>
                    )
                })}
            </div>
        )
    }
}

export default TodoList