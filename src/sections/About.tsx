import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div style={{ margin: '12rem 0' }}>
      <p>Hey! I'm currently studying CS and Finance @ uWaterloo.</p>
      <h1 style={{ marginBottom: '0.5rem' }}>This past summer, I spent my</h1>
      <ul style={{marginTop: 0 }}>
        <li><b>days</b> engineering full-stack applications and shaping product direction at the RCMP</li>
        <li><b>nights</b> developing skills in backend development, hardware, and machine learning</li>
        <li><b>weekends</b> organizing a 50-person game of Turf Wars x Capture the Flag in downtown Toronto</li>
      </ul>
    </div>
  )
}

export default About