import React, {Component} from 'react';
import { Fade } from 'react-awesome-reveal';

class About extends Component{
    render(){
        if(!this.props.data) return null;

        const name = this.props.data.name;
        const profilepic = 'image/'+ this.props.data.image;
        const bio = this.props.data.bio;
        const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.zip;
        const phone = this.props.data.phone;
        const email = this.props.data.email;
        const resumeDownload = this.props.data.resumedownload;

        return(
            <section id='about'>
                <Fade duration={1000}>
                    <div className='row'>
                        <div className='three columns'>
                            <img
                                className='profile-pic'
                                src={profilepic}
                                alt='Nordic Giant Profile Pic'
                            />
                        </div>
                        {/* MAIN */}
                        <div className='nine columns main-col'>
                            <h2>About Me</h2>
                            {/* panggil resumeData.json */}
                            <p>{bio}</p>

                            <div className='row'>
                                <div className='columns contact-details'>
                                <h2>Contact Details</h2>
                                <p className='address'>
                                <span>
                                    {street}
                                    <br/>
                                    {city} {state}, {zip}
                                </span>
                                <br/>
                                <span>{phone}</span> 
                                <br/>
                                <span>{email}</span>
                                </p>

                                </div>
                                <div className='columns download'>
                                <p>
                                <a href={resumeDownload} className='button'>
                                    <i className='fa fa-download'> Download Resume </i>
                                </a>
                                </p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default About;