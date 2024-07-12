import './index.css';

const Landing =() =>{
    return(
        <div className="landing-page">
            <section className="navbar">
            <h2>Profile</h2>
            <h2>My Projects</h2>
            <h2>Contact Me</h2>
            </section>

          <section className="intro">
            <h1 className='name'>Shalom Uwamahoro</h1>
            <p className='prof'>A software Developer and Conservationist</p>
            <p className='hook'>I appreciate you stopping here, <br></br> and I hope you enjoy looking at my portfolio!</p>
            <br></br>
            <br></br>
            <button className='action'>DROP A LINE</button>
          </section>
        
        </div>
  
    )
}

export default Landing;