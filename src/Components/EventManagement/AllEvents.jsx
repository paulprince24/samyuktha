import React, { useState, useEffect } from 'react'
import { useFirebase } from '../../Context/firebaseContext';
import { collection, getDocs } from 'firebase/firestore';

const AllEvents = () => {
    const {db} = useFirebase();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsCollectionRef = collection(db, 'events');
                const querySnapshot = await getDocs(eventsCollectionRef);
                const eventsData = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    eventsData.push(data);
                });
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, [db]);
    return (
        <div>
            <h2>All Events</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event.eventName}</li>
                ))}
            </ul>
        </div>
    );
}

export default AllEvents