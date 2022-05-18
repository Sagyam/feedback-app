import React from 'react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
      <h1>About</h1>
      <p>This is a React app to leave feedback for a product or service</p>
      <br />
      <p>Version 1.0.0</p>
      <Link to='/'>
        <Button version={'secondary'}>Home</Button>
      </Link>
    </Card>
  )
}

export default About
