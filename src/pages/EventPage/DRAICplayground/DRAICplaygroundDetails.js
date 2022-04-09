import React from 'react'
import { useParams } from 'react-router-dom'
import data from './Draicplaygrounddata'

const DRAICplaygroundDetails = () => {

    const { id } = useParams()

    return (
        <h1>{data[id].eventName}</h1>
    )
}

export default DRAICplaygroundDetails