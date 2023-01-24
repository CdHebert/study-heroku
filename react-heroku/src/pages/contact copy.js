import React, { Component } from 'react';
import './contact.css';
import validator from 'validator'
import logo from '../img/bentek.jpg'

// Create function
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You Submission has been received")
    }
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        console.log(e.target.value)

        const cText = e.target.name
        let lValid = true
        switch (cText) {
            case "name":
                console.log("name")
                var valnameEl = document.getElementById('nameMessage')

                if (e.target.value.length > 0) {
                    valnameEl.innerHTML = ''
                } else {
                    valnameEl.innerHTML = 'Name can must be entered'
                }
                break

            case "email":
                console.log("email")

                var valemailEl = document.getElementById('emailMessage')
                var email = e.target.value
                if (validator.isEmail(email)) {
                    valemailEl.innerHTML = ''
                } else {
                    valemailEl.innerHTML = 'Invalid Email!'
                }
                break

            case "message":
                console.log("message")

                var valuserEl = document.getElementById('userMessage')
                if (e.target.value.length > 0) {
                    valuserEl.innerHTML = ''
                } else {
                    valuserEl.innerHTML = 'Message must be entered'
                }
                break

        }
    }

    return (
        <div>
            <div>
                <img src={logo} alt="Benny Gabel" style={{ width: '650px', height: '200px' }} />
            </div>
            <div id="content">

                <form onSubmit={handleSubmit}>

                    <div id='myself'>

                        <br /> <br /> <br /> <br /> <br /> <br />


                        <label>Name:</label>
                        <label>Benny Gabel</label>
                        <br /> <br />
                        <label>Profile:</label>
                        <label>Software and Full stack Web developer</label>
                        <br /> <br />
                        <label>Email:</label>
                        <label>benny@ben-tek.com</label>
                        <br /> <br />
                        <label>Phone:</label>
                        <label> 646- 242-4323</label><br />

                        
                        <br />
                        <br />

                        <div id="subtitle">
                            Contact Me
                        </div>


                        <br />
                        <label for="name">Name:</label>
                        <input type="text" name="name" onBlur={handleChange} /> <br/>
                        <span id='nameMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>    {/*  , float:left */}                        
                        <br />
                        <label for="email">Email:</label>
                        <input type="email" name="email" onBlur={handleChange} /> <br/>
                        <span id='emailMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>    {/*  , float:left */}

                        <br />
                        <br />
                        <label for="message">Message:</label>
                        <textarea
                            name='message'
                            rows="10"
                            onBlur={handleChange}
                        ></textarea> <br/>
                        <span id='userMessage' style={{ fontWeight: 'bold', color: 'red' }}></span>    {/*  , float:left */}

                        <br />


                        <button type="submit" >SUBMIT</button>
                    </div>

                </form>
            </div>
        </div>

    )

}

export default Contact