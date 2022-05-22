import React from 'react'
import './Digitization.css'
import { FaCalendarAlt, FaAddressBook } from 'react-icons/fa';
import { BsGraphUp, BsFillPeopleFill } from 'react-icons/bs';

const Digitization = () => {
    return (
        <div className='digitization'>
            <div className="container">
                <h1> <span>Movement</span> For <br />Brand <span>Digitization</span></h1>
                <p>
                    101 INFOTECH is an extension of your organization. You aren’t just another client.
                    You are a partner, and you deserve an experience that is comfortable and tailored to your needs. We are the team you deserve. We don’t claim to be the best in Nepal or Kathmandu, but we do our best and deliver what you need.
                </p>

                <div className='container-1'>
                    <div className='timeline'>
                        <div className='fa-icon'><FaCalendarAlt size={"3rem"} color={"blue"} /></div>
                        <div className='intro-timeline'>
                            <h2>A Timeline You Set</h2>
                            <p>Stop feeling stuck. We only use month-to-month contracts.</p>
                        </div>
                    </div>
                    <div className='price'>
                        <div className='fa-icon'><FaAddressBook size={"3rem"} color={"blue"} /></div>
                        <div className='intro-price'>
                            <h2>A Price That Fits You</h2>
                            <p>Hit goals with a customized strategy you can afford.</p>
                        </div>
                    </div>
                    <div className='team'>
                        <div className='fa-icon'><BsFillPeopleFill size={"3rem"} color={"blue"} /></div>
                        <div className='intro-team'>
                            <h2>A Team You Know and Trust</h2>
                            <p>Collaborate with our in-house team. We don’t outsource.</p>
                        </div>
                    </div>
                    <div className='time'>
                        <div className='fa-icon'><BsGraphUp size={"3rem"} color={"blue"} /></div>
                        <div className='intro-time'>
                            <h2>A TimA Holistic Transformation of Your Businesseline You Set</h2>
                            <p>Enhance marketing, sales, and customer service efforts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digitization