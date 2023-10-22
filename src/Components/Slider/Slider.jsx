import React, { useEffect, useState } from "react";
import "./Slider.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Slider = () => {
  useEffect(() => {
    AOS.init();
  });

  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleView = async () => {
    navigate("/events");
  };

  const items = [
    {
      backgroundImage:
        "url(https://cdn.discordapp.com/attachments/1164078126838595616/1164078338181185627/treasure_hunt_1.jpg?ex=6541e76f&is=652f726f&hm=7c83bd45eae7ba52f104d6daf0a8687d8f42441365b869330d3a0362b28fee39&)",
      title: "Treasure Hunt",
      description:
        "Prepare to put your problem-solving skills to the test as you follow cryptic clues, solve riddles, and uncover hidden treasures",
    },
    {
      backgroundImage:
        "url(https://media.discordapp.net/attachments/1164078126838595616/1164078335496826971/football_1_1.jpg?ex=6541e76e&is=652f726e&hm=d326a593b32db52373704d9474fcb34f3d0e8313d6f5b7744f83045875c9f8fe&=&width=530&height=662)",
      title: "Football",
      description:
        "The cheers of the crowd reverberate through the campus, creating an atmosphere of exhilaration and camaraderie",
    },
    {
      backgroundImage:
        "url(https://cdn.discordapp.com/attachments/1164078126838595616/1164078821046243419/ideathon_1_1.jpg?ex=6541e7e2&is=652f72e2&hm=da2d712aa0ff21e96bb4946af933d8b8b48b31921b367cdb5d484b9f63d11a6c&)",
      title: "Ideathon",
      description:
        "Craft your innovative solutions and present them in a concise 10-slide PowerPoint presentation.",
    },
    {
      backgroundImage:
        "url(https://cdn.discordapp.com/attachments/1164078126838595616/1164082792011931750/ty00_1_1.jpg?ex=6541eb95&is=652f7695&hm=b73c75466e68a457681c511af737359bd226af70046de55cc1ae28f5ba543fbe&)",
      title: "Speed Typing",
      description:
        "Test your typing skills, reflexes, and accuracy as you race against the clock and fellow participants",
    },
  ];

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <center>
      <section
        className="game-section"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="2500"
      >
        <center>
          <h2 className="text-light about_head h2">
            Featured <span className="text-warning">Events</span>
          </h2>
        </center>
        <center>
          <div className="owl-carousel d-sm-flex justify-space-between custom-carousel owl-theme align-items-center ">
            {items.map((item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className={`item ${index === activeItem ? "active" : ""}`}
                style={{ backgroundImage: item.backgroundImage }}
                onClick={() => handleItemClick(index)}
              >
                <div className="item-desc">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <button
                    onClick={handleView}
                    className="btn btn-sm btn-outline-warning"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </center>
        <center>
          <Link to="/events" className="btn btn-warning">
            Explore more
          </Link>
        </center>
      </section>
    </center>
  );
};

export default Slider;
