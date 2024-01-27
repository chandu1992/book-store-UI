import React from 'react'
import { Link } from 'react-router-dom'
import { RedirectBtn } from '../../common/redirect button/RedirectBtn'

export const About = () => {
    const title='About page'
    const link="/"
    const btn ='Home'
  return (
    <RedirectBtn title={title} link={link} btn={btn} />
  )
}
