import React from 'react'
import { useParams } from 'react-router-dom'

function Results() {
    const {city} = useParams()

    console.log("param=====>", city)
  return (
    <div>Results</div>
  )
}

export default Results