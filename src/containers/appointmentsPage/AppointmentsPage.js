import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ handleAddAppointment, contactList, appointmentList }) => {
  const [currentName, setCurrentName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState({});
 
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddAppointment(currentName, contact, date, time);

    setCurrentName('');
    setDate('');
    setTime('');
    setContact({});

    window.alert('Appointment successfully scheduled');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={currentName} setTitle={setCurrentName} date={date} setDate={setDate} time={time} setTime={setTime} contact={contact} setContact={setContact} contacts={contactList} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointmentList}/>
      </section>
    </div>
  );
};