import React, { Component, useState } from 'react';
import './portfolio.css';
import { capitalizeFirstLetter, capitalizeAllLetters } from '../utils/helpers';
// import profile from '../img/bennygabel.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { CarouselItem } from 'react-bootstrap';




/*  Github - Columbia's repos
        {ch:2, name:'portfolio', image: './2.jpg', description: 'first portfolio using HTML', github: 'https://github.com/BennyGabel/text_editor_19', deployed: 'https://text19editor.herokuapp.com/'},
        {ch:3, name:'PasswordGenerator', image: './3.jpg', description: 'Given a user criteria, including amount of characters, generates a password', github: 'https://github.com/BennyGabel/PasswordGenerator', deployed: 'https://bennygabel.github.io/PasswordGenerator/'},
        {ch:4, name:'coding_quiz_challenge', image: './4.jpg', description: 'code related Questionnaire: penallyze wrong answers - keep track of score by users', github: 'https://github.com/BennyGabel/coding_quiz_challenge', deployed: 'https://bennygabel.github.io/coding_quiz_challenge/'},
        {ch:5, name:'work_day_scheduler', image: './5.jpg', description: 'Day planner', github: 'https://github.com/BennyGabel/work_day_scheduler', deployed: 'https://bennygabel.github.io/work_day_scheduler/'},
        {ch:6, name:'WeatherDashboard', image: './6.jpg', description: 'By selecting a City, the web returns the current weather info as well as 5 day forecast', github: 'https://github.com/BennyGabel/WeatherDashboard', deployed: 'https://bennygabel.github.io/WeatherDashboard/'},
        {ch:7, name:'Movie-App', image: './7.jpg', description: 'project done with a group, let you choose currennt movies, option to search by type', github: 'https://github.com/bettinastaartjes/Movie-App', deployed: 'https://bettinastaartjes.github.io/Movie-App/'},
        {ch:9 , name:'readme-generator', image: './9.jpg', description: 'generates a README.md file', github: 'https://github.com/BennyGabel/readme-generator', deployed: 'not deployed'},
        {ch:10, name:'team_generator',image: './10.jpg',  description: 'generates an html file with information entered about company structure', github: 'https://github.com/BennyGabel/team_generator', deployed: 'not deployed'},
        {ch:11, name:'note_taker', image: './11.jpg', description: 'Let you take notes and saved them', github: 'https://github.com/BennyGabel/note_taker', deployed: 'https://notetaker-bg2022.herokuapp.com/'},
        {ch:12, name:'EmployeeTracker', image: './12.jpg', description: 'Track employees', github: 'https://github.com/BennyGabel/EmployeeTracker', deployed: ''},
        {ch:13, name:'e-commerce-back-end', image: './13.jpg', description: 'ORM Create back-end, using mysql and sequelize, routes to access information', github: 'https://github.com/BennyGabel/e-commerce-back-end', deployed: 'not deployed'},
        {ch:14, name:'ArtGallery', image: './14.jpg', description: 'Art-Gallery back-end. Uses MySql and sequelize to access over 200 items', github: 'https://github.com/BennyGabel/Art-Gallery', deployed: 'not deployed - data displayed in Insomnia'},
        {ch:17, name:'regex-tutroial', image: './17.jpg', description: 'Explanation of a regex string. Additional Technical information not only for the current regex-string', github: ' https://github.com/BennyGabel/regex-tutorial', deployed: 'https://gist.github.com/BennyGabel/b6725cc9128d9b7daaf2d25e2bb3927d#regex-deeper'},
        {ch:18, name:'social_network', image: './18.jpg', description: 'Social network back-end only. Allow to GET, POST, PUT, DELETE information', github: 'https://github.com/BennyGabel/social_network', deployed: 'not deployed'},        
        {ch:19, name:'text_editor_19', image: './19.jpg', description: 'Text editor Using Webpack (and plugins), IndexDB. Works online and offline Option to install app Use of Workbox and Service Worker', github: '	https://github.com/BennyGabel/text_editor_19', deployed: 'https://text19editor.herokuapp.com/'},        
*/



// Create function
const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [repos] = useState([
        { ch: 3, name: 'PasswordGenerator', image: './3.jpg', description: 'Given a user criteria, including amount of characters, generates a password', github: 'https://github.com/BennyGabel/PasswordGenerator', deployed: 'https://bennygabel.github.io/PasswordGenerator/' },
        { ch: 4, name: 'coding_quiz_challenge', image: './4.jpg', description: 'code related Questionnaire: penallyze wrong answers - keep track of score by users', github: 'https://github.com/BennyGabel/coding_quiz_challenge', deployed: 'https://bennygabel.github.io/coding_quiz_challenge/' },
        { ch: 5, name: 'work_day_scheduler', image: './5.jpg', description: 'Day planner', github: 'https://github.com/BennyGabel/work_day_scheduler', deployed: 'https://bennygabel.github.io/work_day_scheduler/' },
        { ch: 10, name: 'team_generator', image: './10.jpg', description: 'generates an html file with information entered about company structure', github: 'https://github.com/BennyGabel/team_generator', deployed: 'not deployed' },
        { ch: 11, name: 'note_taker', image: './11.jpg', description: 'Let you take notes and saved them', github: 'https://github.com/BennyGabel/note_taker', deployed: 'https://notetaker-bg2022.herokuapp.com/' },
        { ch: 17, name:'regex-tutroial', image: './17.jpg', description: 'Explanation of a regex string. Additional Technical information not only for the current regex-string', github: ' https://github.com/BennyGabel/regex-tutorial', deployed: 'https://gist.github.com/BennyGabel/b6725cc9128d9b7daaf2d25e2bb3927d#regex-deeper'},
        { ch: 19, name: 'text_editor_19', image: './19.jpg', description: 'Text editor Using Webpack (and plugins), IndexDB. Works online and offline Option to install app Use of Workbox and Service Worker', github: '	https://github.com/BennyGabel/text_editor_19', deployed: 'https://text19editor.herokuapp.com/' },
        { ch: 23, name: 'Project3', image: './23.jpg', description: 'Greene Shpop', github: 'https://github.com/BennyGabel/Project-3-React', deployed: '' },
    ])

    // Not DONE anything yet  -- FROM HERE
    /*
    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };
    */
    // Not DONE anything yet  -- UNTIL HERE


    // let curImage = "/../img/"+{repos[0].name}+".jpg"
    // let curImage = "/../img/1.jpg"

    const list = repos

    return (
        <div>

            {/* <div className="flex-row">
            <div className='card'>
                {repos[0].name} <br/>
                <img src='/../img/2.jpg' />

                {repos[0].ch+'.jpg'}
            </div>

            <div className='card'>
                {repos[1].name}
            </div>
            <div className='card'>
                {repos[2].name}
            </div>            
        

        </div> */}

            {/* {isModalOpen && ( 
    {item.name}

)} */}

            {
                <div className="flex-row">
                    {repos && repos.map((item) =>
                        <div key={item.ch}>
                            {/* <div className='card'> */}
                                {/* <div className='card'> */}
                                    {/* <div className='repopicture' key={item.ch}> */}
                                    {/* <div className='bold'> */}
                                        {/* {capitalizeAllLetters(item.name)} <br /> */}
                                    {/* </div> */}


                                        <img src={item.image} className="logo" alt="" /> <br />

                                        {item.github} <br />
                                    {item.deployed} <br />
                                    {/* </div> */}

                                {/* </div> */}
                            {/* </div> */}
                        </div>
                    )}
                </div>
            }

        </div>
    )
}

// Export Function 
// module.exports = Portfolio
export default Portfolio