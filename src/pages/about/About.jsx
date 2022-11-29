import React from 'react'
import "./about.css"
import 'bootstrap/dist/css/bootstrap.min.css'


const About = () => {



  return (



    <div className="About" >
      <img
        src="https://scai.sdes.ucf.edu/wp-content/uploads/sites/52/2020/06/ucf_85080781-scaled.jpg"
        alt="example"
        className='sco'
      />
      <a href="https://scai.sdes.ucf.edu/student-conduct-board/" target="_blank" rel="noreferrer">
        <img
          src="https://scai.sdes.ucf.edu/wp-content/uploads/sites/52/2020/06/UCF-Creed-Main.png"
          alt="scolink"
          className='scolink'
        />
      </a>

      <div className='content'>


        <h1 className='title'>Student Conduct Office</h1>
        <p> The Student Conduct Office (SCO) is responsible for the administration of the Student Code of Conduct.
          The SCO is committed to providing a fair and impartial process for all students who are accused of violating the
          Student Code of Conduct. The SCO is also committed to providing a supportive environment for students who are victims of misconduct.
          The SCO is located in the Ferrell Commons, Room 227. </p>
      </div>


    </div>
  )
}


export default About