import './index.css'

function Profile (){
    return(

    <div className='profile'>

        <h1 className='me'>Profile</h1>

        <div className='profile-details'>
       
         <img src="/Image/prof.png"  className="image" alt="my picture" />

         <section className='statement'>
            <p className='para'>
            Shalom's journey blends art and technology. She is <br></br>
            particularly intrigued by AI's potential in art, <br></br>
            exemplified by the projected growth of the AI art<br></br>
            market to $2.4 billion by 2028. Shalom aims to be <br></br>
            part of the efforts behind innovative solutions <br></br>
            that showcase African youth's artistic talents, <br></br>
            preserve cultural heritage, and promote mental <br></br>
            wellness through creative expression. As a <br></br>
            software engineer, she seeks to bridge technology<br></br>
            and cultural expression, empowering artists and<br></br>
            fostering creativity in the digital age.
            </p>
            <button className='cv'>My CV</button>
         </section>
         </div>

    </div>
    )
}

export default Profile;






