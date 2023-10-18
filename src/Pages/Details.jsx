import React, { useEffect, useState } from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useMediaQuery } from "@mui/material";
import MobileNav from "../Components/Mobilenav/MobileNav";
import "../App.css";
import { useParams } from "react-router-dom";
// import {
//   collection,
//   getDocs,
//   query,
//   setDoc,
//   onSnapshot,
//   where,
// } from "firebase/firestore";
// import { useFirebase } from "../Context/firebaseContext";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CallIcon from "@mui/icons-material/Call";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import RegistrationForm from "../Components/Modal/RegistrationModel/RegistrationModel";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Divider, List, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default function Details() {
  const { name } = useParams();
  const { id } = useParams();

  const isSmallScreen = useMediaQuery("(max-width: 784px)");
  const [drawer, setDrawer] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rule, setRule] = useState([]);

  // const { db } = useFirebase();
  const [events, setEvents] = useState([]);

  const [user, setUser] = useState("");

  useEffect(() => {
    AOS.init();
    const fetchEvents = async () => {
      try {
        axios
          .get(
            "https://prismatic-licorice-09766e.netlify.app/v1/api/events/5f32aa49-a0bb-4ce7-af96-2db5266f4753"
          )
          .then((response) => {
            setEvents(response.data);
            setLoading(true);
          });
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  // const openDrawer = () => {
  //   setDrawer(true);
  // };

  const handleSignin = () => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);

            console.log("j_key", credential.idToken);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            setUser(user);
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("uid", user.uid);

            // IdP data available using getAdditionalUserInfo(result)
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    const extractedRules = events.rules?.map((obj) => obj.rules).flat();
    setRule(extractedRules);
  }, []);

  return (
    <div>
      <section>
        <>{isSmallScreen ? <MobileNav /> : <NavBar />}</>
      </section>

      {loading ? (
        events.events?.map((event, index) => (
          <div>
            <section
              key={index}
              className="container p-5 d-sm-flex justify-space-around"
            >
              <img
                src={event.cover}
                className="img-thumbnail thum_image m-3"
                data-aos="zoom-in"
              />
              <div className="container p-2 pt-4" data-aos="fade-left">
                <h1 className="text-warning details_head">{event.eventname}</h1>
                <button className="btn btn-outline-warning btn-sm btn-rounded text-warning m-2">
                  {event.eventcategory}
                </button>
                <button className="btn btn-outline-warning btn-sm btn-rounded text-warning m-2">
                  {event.eventtype}
                </button>
                <br />
                <p className="text-light">{event.eventdescription}</p>
                <br />

                <p className="text-warning">
                  Registration Fee: {event.regfee}/-
                </p>
                <h3 className="m-2"></h3>

                <section>
                  {localStorage.getItem("uid") === null ? (
                    <button
                      className="btn btn-warning mr-3"
                      onClick={() => {
                        handleSignin();
                      }}
                    >
                      REGISTER
                    </button>
                  ) : isRegistered ? (
                    <>
                      <p
                        className="registered text-warning"
                        style={{
                          fontFamily: "Creepster",
                          letterSpacing: "1px",
                        }}
                      >
                        You have successfully registered for the event
                      </p>
                      <p
                        className="text-warning"
                        style={{
                          fontFamily: "Creepster",
                          letterSpacing: "1px",
                        }}
                      >
                        {" "}
                        Get ready for the spooky day
                      </p>
                    </>
                  ) : (
                    <RegistrationForm
                      email={localStorage.getItem("userEmail")}
                      eventName={name}
                      eventId={id}
                      strength={event.teamstrength}
                    />
                  )}

                  {/* <p className="text-warning mt-2">Registration starts soon</p> */}

                  {/* {localStorage.getItem("userEmail") && (
                  <p>Logged in {localStorage.getItem("userEmail")}</p>
                )} */}
                  <span> </span>
                </section>
              </div>
              <br />
              <br />
            </section>
            <div className="d-sm-flex justify-space-around rules_main ">
              <div
                className="rule_card rounded-9 m-3 p-3 "
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <center>
                  <h4 className="text-warning">Rules</h4>
                </center>
                <List
                  size="small"
                  dataSource={events.rules?.map((obj) => obj.rules).flat()}
                  style={{ color: "white" }}
                  renderItem={(item) => (
                    <List.Item style={{ color: "white" }}>- {item}</List.Item>
                  )}
                />
                {/* <ul>
                  {events.rules?.map((el, index) => {
                    return <li key={index}>- {el.rules}</li>;
                  })}
                </ul> */}
              </div>
              <div>
                <div
                  className="rounded-7 m-3 p-3 contact_card "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <center>
                    <CallIcon fontSize="1px" className="icon_detail" />
                  </center>
                  <div className="d-flex justify-content-around align-items-center p-3">
                    <div>
                      <span className="text-light prize_text m-1">
                        {event.studentincharge1} :{" "}
                      </span>
                    </div>
                    <span className="text-light prize_text">
                      {event.studentincharge1mobile}
                    </span>{" "}
                    <br />
                  </div>
                  <div className="d-flex justify-content-around align-items-center p-3">
                    <div>
                      <span className="text-light prize_text">
                        {event.studentincharge2} :{" "}
                      </span>
                    </div>
                    <span className="text-light prize_text">
                      {event.studentincharge2mobile}
                    </span>{" "}
                    <br />
                  </div>
                  {/* <span  className="text-light m-5">{event.studentIncharge2} : </span><span>{event.studentIncharge2Mobile}</span> */}
                </div>
                <div
                  className="rounded-7 m-3 p-3 contact_card "
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  style={{ height: "250px" }}
                >
                  <center>
                    <EmojiEventsIcon fontSize="3px" className="icon_detail" />
                  </center>
                  <div className="d-flex px-4 align-items-center h-75 justify-content-around">
                    <div className="d-flex flex-column gap-3">
                      <div>
                        <span className="text-light prize_text m-1">1st :</span>
                      </div>
                      <div>
                        <span className="text-light prize_text m-1">2nd :</span>
                      </div>
                      <br />
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <span className="text-light prize_text">
                        {event.firstprize} /-
                      </span>{" "}
                      <span className="text-light prize_text">
                        {event.secondprize} /-
                      </span>{" "}
                      <br />
                    </div>
                  </div>
                  {/* <span  className="text-light m-5">{event.studentIncharge2} : </span><span>{event.studentIncharge2Mobile}</span> */}
                </div>
              </div>
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

      <br />
      <br />

      <Footer />
    </div>
  );
}
