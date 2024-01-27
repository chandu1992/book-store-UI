import React from 'react'
import { Link } from 'react-router-dom'

export const RedirectBtn = (props) => {
  return (
    <>
    <div className='title' >{props.title}</div>
    <Link className='link' to={props.link} ><button type="button" class="btn btn-warning">{props.btn}</button></Link>
    </>
  )
}
