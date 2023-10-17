import React, { useEffect, useState } from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useMediaQuery } from "@mui/material";
import MobileNav from "../Components/Mobilenav/MobileNav";
import "../App.css";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  setDoc,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useFirebase } from "../Context/firebaseContext";
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
import AOS from 'aos'
import 'aos/dist/aos.css'




export default function Details() {
  const { name } = useParams();
  const { id } = useParams();

  const isSmallScreen = useMediaQuery("(max-width: 784px)");
  const [drawer, setDrawer] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(name);

  const { db } = useFirebase();
  const [events, setEvents] = useState([]);

  const [user, setUser] = useState("");

  useEffect(() => {
    AOS.init();
    const fetchEvents = async () => {
      try {
        const eventsCollectionRef = collection(db, "events");
        const q = query(eventsCollectionRef, where("eventName", "==", name));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const eventsData = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            eventsData.push(data);
          });
          setEvents(eventsData);

          const uid = localStorage.getItem("uid");

          if (eventsData.length > 0 && eventsData[0].participants) {
            if (uid in eventsData[0].participants) {
              setIsRegistered(true);
              console.log("User is registered for the event");
            } else {
              setIsRegistered(false);
              console.log("User is not registered for the event");
            }
          } else {
            setIsRegistered(false);
            console.log("Event data is not available.");
          }
        });

        return () => {
          // Unsubscribe from the listener when the component unmounts
          unsubscribe();
        };
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, [db, name]);
  const openDrawer = () => {
    setDrawer(true);
  };
  console.log(events);

  const handleSignin = () => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            setUser(user);
            localStorage.setItem("userEmail", user.email);
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("uid", user.uid);

            console.log(localStorage.getItem("user"));
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

  return (
    <div>
      <section>
        <>
          {isSmallScreen ? (
            <div onClick={openDrawer} style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "2.0em" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          ) : (
            <NavBar />
          )}
          {drawer && (
            <MobileNav open={drawer} anchor="left" setDrawer={setDrawer} />
          )}
        </>
      </section>
      {events.map((event, index) => (
        <div>
          <section
            key={index}
            className="container p-5 d-sm-flex justify-space-around"
          >
            <img src={event.cover} className="img-thumbnail thum_image m-3" data-aos='zoom-in' />
            <div className="container p-2 pt-4" data-aos='fade-left'>
              <h1 className="text-warning details_head">{event.eventName}</h1>
              <button className="btn btn-outline-warning btn-sm btn-rounded text-warning m-2">
                {event.eventCategory}
              </button>
              <button className="btn btn-outline-warning btn-sm btn-rounded text-warning m-2">
                {event.eventType}
              </button>
              <br />
              <p className="text-light">{event.eventDesc}</p>
              <br />

              <p className="text-light"></p>
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
                      style={{ fontFamily: "Creepster", letterSpacing: "1px" }}
                    >
                      You have successfully registered for the event
                    </p>
                    <p
                      className="text-warning"
                      style={{ fontFamily: "Creepster", letterSpacing: "1px" }}
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
                    strength={event.teamStrength}
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
          <div className="d-sm-flex justify-space-around rules_main">
            <div className="rule_card rounded-9 m-3 p-3" data-aos= 'fade-right' data-aos-duration='1500'>
              <center>
                <h4 className="text-warning">Rules</h4>
              </center>
              <ul>
                {event.ruleList &&
                  event.ruleList.map((rule, index) => (
                    <li className="" key={index}>
                      - {rule}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="rounded-7 m-3 p-3 contact_card " data-aos= 'fade-down' data-aos-duration='1500'>
              <center>
                <CallIcon fontSize="1px" className="icon_detail" />
              </center>
              <div className="d-flex justify-content-around align-items-center p-3">
                <div>
                  <span className="text-light prize_text m-1">
                    {event.studentIncharge1} :{" "}
                  </span>
                </div>
                <span className="text-light prize_text">
                  {event.studentIncharge1Mobile}
                </span>{" "}
                <br />
              </div>
              <div className="d-flex justify-content-around align-items-center p-3">
                <div>
                  <span className="text-light prize_text">
                    {event.studentIncharge2} :{" "}
                  </span>
                </div>
                <span className="text-light prize_text">
                  {event.studentIncharge2Mobile}
                </span>{" "}
                <br />
              </div>
              {/* <span  className="text-light m-5">{event.studentIncharge2} : </span><span>{event.studentIncharge2Mobile}</span> */}
            </div>
            <div className="rounded-7 m-3 p-3 contact_card" data-aos= 'fade-left' data-aos-duration='1500'>
              <center>
                <EmojiEventsIcon fontSize="3px" className="icon_detail" />
              </center>
              <div className="d-flex justify-content-around align-items-center p-2">
                <div>
                  <span className="text-light prize_text m-1">1st :</span>
                </div>
                <span className="text-light prize_text">{event.firstPrize} /-</span> <br />
              </div>
              <div className="d-flex justify-content-around p-2">
                <div>
                  <span className="text-light prize_text m-1">2st :</span>
                </div>
                <span className="text-light prize_text">{event.secondPrize} /-</span> <br />
              </div>
              {/* <span  className="text-light m-5">{event.studentIncharge2} : </span><span>{event.studentIncharge2Mobile}</span> */}
            </div>
          </div>
        </div>
      ))}
      <br /><br />

      <Footer />
    </div>
  );
}
