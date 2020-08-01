import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './Chatting.css'
import ChattingE from './ChattingE'

const Chatting = function () {
    return (
        <>
            <Route path='/chatting'>
                <ChattingE />
            </Route>
        </>
    )
}

export default Chatting