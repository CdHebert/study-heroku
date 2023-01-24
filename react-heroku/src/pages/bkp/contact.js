import React, { Component } from 'react';
import './contact.css';
import logo from '../img/bentek.jpg'

// Create function
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SSSSSSSS")
        alert("You Submission has been received")
        console.log("aaaaaaaaa")
    }
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        console.log(e.target.value)

        const cText = e.target.name
        let lValid = true
        switch (cText) {
            case "name":
                if (e.target.value.length < 0) {
                    alert('Name can must be entered')
                    lValid = false

                }
                break;

            case "email":
            case "message":
                if (e.target.value.length <= 0) {
                    alert('Message can must be entered')
                    lValid = false

                }
                break;

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

                        <br /> <br />

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

                        <br /> <br />

                        <br />
                        <br />

                        <div id="subtitle">
                            Contact Me
                        </div>


                        <br />
                        <label for="name">Name:</label>
                        <input type="text" name="name" onBlur={handleChange} />
                        <br />
                        <label for="email">Email:</label>
                        <input type="email" name="email" onBlur={handleChange} />

                        <br />
                        <br />
                        <label for="message">Message:</label>
                        <textarea
                            name='message'
                            rows="10"
                            onBlur={handleChange}
                        ></textarea>

                        <br />


                        <button type="submit" >SUBMIT</button>
                    </div>

                </form>
            </div>
        </div>

    )

}

export default Contact