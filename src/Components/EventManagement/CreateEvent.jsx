import React, { useState } from 'react'
import { useFirebase } from '../../Context/firebaseContext';
import { collection, addDoc } from 'firebase/firestore';

const CreateEvent = () => {
    const [eventName, setEventName] = useState('');
    const [facultyIncharge, setFacultyIncharge] = useState('');
    const [studentIncharge1, setStudentIncharge1] = useState('');
    const [studentIncharge2, setStudentIncharge2] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const {db} = useFirebase();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventsCollection = collection(db, 'events');
        try {
            await addDoc(eventsCollection, {
                eventName,
                facultyIncharge,
                studentIncharge1,
                studentIncharge2,
                eventType,
                eventCategory,
            });
            setEventName('');
            setEventType('');
            setEventCategory('');

            console.log('Event data uploaded to Firestore.');
        } catch (error) {
            console.error('Error uploading event data:', error);
        }

        // setEventName('');
        // setFacultyIncharge('');
        // setStudentIncharge1('');
        // setStudentIncharge2('');
        // setEventType('');
        // setEventCategory('');
    };
    return (
        <div>
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="facultyIncharge">Faculty Incharge:</label>
                    <input
                        type="text"
                        id="facultyIncharge"
                        value={facultyIncharge}
                        onChange={(e) => setFacultyIncharge(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="studentIncharge1">Student Incharge 1:</label>
                    <input
                        type="text"
                        id="studentIncharge1"
                        value={studentIncharge1}
                        onChange={(e) => setStudentIncharge1(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="studentIncharge2">Student Incharge 2:</label>
                    <input
                        type="text"
                        id="studentIncharge2"
                        value={studentIncharge2}
                        onChange={(e) => setStudentIncharge2(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="eventType">Event Type:</label>
                    <select
                        id="eventType"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        required
                    >
                        <option value="">Select Event Type</option>
                        <option value="Single">Single</option>
                        <option value="Group">Group</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="eventCategory">Event Category:</label>
                    <select
                        id="eventCategory"
                        value={eventCategory}
                        onChange={(e) => setEventCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Event Category</option>
                        <option value="Technical">Technical</option>
                        <option value="Cultural">Cultural</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div>
                    <button type="submit">Create Event</button>
                </div>
            </form>
        </div>
    )
}

export default CreateEvent