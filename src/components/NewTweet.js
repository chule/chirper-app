import React, { Component } from 'react'

class NewTweet extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state;

        // todo: add tweet to the store
    }

    render() {
        return (
            <div>New tweet!</div>
        )
    }
}

export default NewTweet