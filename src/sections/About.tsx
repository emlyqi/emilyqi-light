// import { GitHubCalendar } from 'react-github-calendar'

const About = () => {
  return (
    <div style={{ margin: '12rem 0' }}>
      <p>Hey! I'm currently studying CS @ uWaterloo.</p>
      <h1 style={{ marginBottom: '0.5rem' }}>This past winter, I spent my</h1>
      <ul style={{marginTop: 0 }}>
        <li><b>days</b> teaching machines to read engineering documents as a ML Engineering Intern</li>
        <li><b>nights</b> developing skills in computer vision, reinforcement learning, and robot control</li>
        <li><b>weekends</b> visiting friends in Montreal, Toronto, Kingston, and more</li>
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