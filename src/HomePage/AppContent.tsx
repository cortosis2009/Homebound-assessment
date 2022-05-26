import React from 'react'
import { People } from '../Models'
import Individual from './Individual'

const AppContent = () => {

    return (
        <div>{People.map((person) => {
            return <Individual person={person}/>
        })}</div>
    )
}

export default AppContent