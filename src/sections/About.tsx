// import { GitHubCalendar } from 'react-github-calendar'

const About = () => {
  return (
    <div style={{ margin: '12rem 0' }}>
      <p>Hey! I'm currently working on perception and mapping for autonomous planes @ <a href="https://flypyka.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Pyka</a>.</p>
      <h1 style={{ marginBottom: '0.5rem' }}>This past summer, I spent my</h1>
      <ul style={{marginTop: 0 }}>
        <li><b>days</b> studying CS @ uWaterloo</li>
        <li><b>nights</b> tinkering with sensors, autonomous vehicles, and Raspberry Pis</li>
        <li><b>weekends</b> taking photos of pretty people and places</li>
      </ul>
{/* <div style={{ marginTop: '3rem' }}>
        <GitHubCalendar
          username="emlyqi"
          colorScheme="dark"
          showColorLegend={false}
          showTotalCount={false}
        />
      </div> */}
    </div>
  )
}

export default About