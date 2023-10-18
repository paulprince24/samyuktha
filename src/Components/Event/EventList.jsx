import React, { useEffect, useState } from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import { useFirebase } from "../../Context/firebaseContext";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Skeleton, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CardList = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegisterClick = (eventName, eventId) => {
    navigate(`/details/${eventName}/${eventId}`);
  };

  // const { db } = useFirebase();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    AOS.init();
    const fetchEvents = async () => {
      try {
        axios
          .get("https://prismatic-licorice-09766e.netlify.app/v1/api/events")
          .then((response) => {
            setEvents(response.data);
            setLoading(true);
          });
      } catch (error) {}
    };

    fetchEvents();
  }, []);

  // console.log(events.events[0].eventname);
  return (
    <div className="container">
      <center>
        <h1 className="event_head text-warning p-3">Events</h1>
        <center>
          <span className="p-3" style={{ color: "grey" }}>
            Join us at 'Samyuktha 7.0' and be a part of a thrilling day where
            technology and artistry collide, creating an unforgettable
            experience for all. Save the date and prepare to unleash your
            potential at this year's 'Samyuktha' – it's set to be bigger and
            better than ever before!"
          </span>
        </center>
        <br />
      </center>
      <div className="container_flex">
        {loading ? (
          events.events?.map((event, index) => (
            <div key={index} className="card m-3" data-aos="zoom-in">
              <div className="card-image">
                <img src={event.cover} alt={event.eventname} />
              </div>

              <div className="card-details">
                <h5 className="card-title text-warning">{event.eventname}</h5>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    handleRegisterClick(event.eventname, event.id);
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          ))
        ) : (
          <Spin
            className="spinner"
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 100,
                  color: "orange",
                }}
                spin
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default CardList;
