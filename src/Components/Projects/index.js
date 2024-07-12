import './index.css'

function Projects(){
    return(
        <div className='projects'>
            <h1 className='h1'>Projects</h1>
            
            <section className='project-1'>

            <h3 className='h3'>Music Playlist Manager</h3>
            <p className='p'>
            Created a user-friendly music playlist manager, <br></br>
            allowing users to create, customize, and manage <br></br>
            playlists. It included features for name, song <br></br>
            addition, removal, display, and shuffle, show-
            casing JavaScript's ability to create interactive<br></br>
            web applications.
            </p>
            
            <img src='/Image/weatherforecast.png' className='weather-img' alt='Weather-Forecast'/>
            <button><a href='https://music-manager-psi.vercel.app/'  className='weather-more'>More</a></button>

            </section>

        </div>

    )

}

export default Projects;