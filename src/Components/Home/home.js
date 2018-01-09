import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            message: '',
            messages: []
        }
        this.onTextInput = this.onTextInput.bind(this)
    }

    onTextInput(e) {
        this.setState({message: e}, () => {
            console.log(this.state)
        })
}

    submitClick() {
        if (this.state.message !== "") {
            this.state.messages.push([this.state.message])
            this.setState({todos: this.state.todos + 1}, () => {
                console.log(this.state)
            })
        } else {
            alert('You need to write more than that!')
        }
        const submitButton = document.getElementById('submitButton')
                          submitButton.value = ''
        this.setState({message: ''})
    }

    completed(a) {
                const todoItem = document.getElementById(a)
                const button = document.getElementById(a + 'complete')
                todoItem.className = "todo-completed"
                button.setAttribute('disabled', 'true')
                button.className='disabled'
    }

    deleted(a) {
        const todoItem = document.getElementById(a).remove()
    }

    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="left">
                        <div className="submit">
                            <h1>To do -</h1>
                            <input id="submitButton" onChange={(e) => this.onTextInput(e.target.value)}></input>
                            <button onClick={() => this.submitClick()}>Submit!</button>
                        </div>
                        <div className="todo-container">
                          {
                              this.state.messages.map((message) => {
                              return (
                                  <div>
                                  <div key={message.id} id={`${message.toString()}`} className="todo">
                                  <img id={`${message.toString()}` + 'complete'} src="http://www.clker.com/cliparts/l/n/a/E/b/t/check-mark-button-hi.png" style={{height:"25px", width:"25px"}} 
                                  onClick={() => this.completed(message.toString())}
                                  />
                                  
                                                    To do: {message}
                                                    {console.log(message.toString())}
                                                    <img onClick={() => this.deleted(message.toString())}  src="https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/button_cancel.png" style={{height:"25px", width:"25px"}} />
                                  </div>
                                  </div>
                              )
                          })}  
                        </div>
                    </div>
                    <div className="right">
                    <div className="todo-container">
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}