import React, { useEffect, useState } from 'react';
import './Slider.css'
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Slider = () => {


  useEffect(()=>{
    AOS.init();
  })

  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate()

  const handleView = async() =>{
    navigate('/events')
  }

  const items = [
    {
      backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/samyuktha70-42ee8.appspot.com/o/sample%2FSINGING01.jpg?alt=media&token=3fe4401d-6722-4096-9155-a4db6aa74056&_gl=1*1rvbc2m*_ga*NjI4OTk5NzMuMTY5NzQ3NDgzNQ..*_ga_CW55HF8NVT*MTY5NzUxODUwMC4zLjEuMTY5NzUxODUyMi4zOC4wLjA)',
      title: 'Best Singer',
      description:
        'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    },
    {
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/samyuktha70-42ee8.appspot.com/o/sample%2Ffootball.jpg?alt=media&token=5cfafcee-3cfa-4a5a-8a61-1bdcb55ddb31&_gl=1*1oa6lyz*_ga*NjI4OTk5NzMuMTY5NzQ3NDgzNQ..*_ga_CW55HF8NVT*MTY5NzUxODUwMC4zLjEuMTY5NzUxODUzNi4yNC4wLjAg)',
        title: 'Football',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
      {
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/samyuktha70-42ee8.appspot.com/o/sample%2Fideathon.jpg?alt=media&token=d0fe0c44-487a-4fe9-b1f1-9e60f36490ac&_gl=1*17fwv9u*_ga*NjI4OTk5NzMuMTY5NzQ3NDgzNQ..*_ga_CW55HF8NVT*MTY5NzUxODUwMC4zLjEuMTY5NzUxODU0My4xNy4wLjAg)',
        title: 'Ideathon',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
      {
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/samyuktha70-42ee8.appspot.com/o/sample%2Fty00.jpg?alt=media&token=3810ba3f-64bf-4ac3-8bfd-f53532110d18&_gl=1*1bcbks1*_ga*NjI4OTk5NzMuMTY5NzQ3NDgzNQ..*_ga_CW55HF8NVT*MTY5NzUxODUwMC4zLjEuMTY5NzUxODU1Mi44LjAuMA..)',
        title: 'Speed Typing',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
    
  ];

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <center>
      <section className="game-section" data-aos='fade-up' data-aos-delay= '500' data-aos-duration = '2500'>
        <center><h2 className='text-light about_head h2'>Featured <span className='text-warning'>Events</span></h2></center>
      <center>
      <div className="owl-carousel d-sm-flex justify-space-between custom-carousel owl-theme align-items-center ">
        {items.map((item, index) => (
          <div
          data-aos='fade-up'
            key={index}
            className={`item ${index === activeItem ? 'active' : ''}`}
            style={{ backgroundImage: item.backgroundImage }}
            onClick={() => handleItemClick(index)}
          >
            <div className="item-desc">
              <h4>{item.title}</h4> 
              <p>{item.description}</p>
              <button onClick={handleView} className='btn btn-sm btn-outline-warning'>View</button>
            </div>
          </div>
        ))}
      </div>
      </center>
      <center><Link to='/events' className="btn btn-warning">Explore more</Link></center>
    </section>
    </center>
  );
};

export default Slider;
