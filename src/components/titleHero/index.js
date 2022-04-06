import React from 'react'
import './titleHero.css'

export default function TitleHero(props) {
  return (
    <div className="titleHero">
      <h1 className="title">{props.title}</h1>
    </div>
  )
}
