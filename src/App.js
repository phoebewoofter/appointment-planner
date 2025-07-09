import { React, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [contactList, setContactList] = useState([]);

  const contacts = (name, number, email) => {
    return {
      name: name,
      number: number,
      email: email
    }
  }

  const appointments = (name, contact, date, time) => {
    return {
      name: name,
      contact: contact,
      date: date,
      time: time
    }
  }

  const handleAddContact = (name, number, email)  => {
   const newContact = contacts(name, number, email)
   setContactList([...contactList, newContact]) 
  }

  const handleAddAppointment = (name, contact, date, time) => {
    const newAppointment = appointments(name, contact, date, time);
    setAppointmentList([...appointmentList, newAppointment])
  }
 

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactList={contactList} handleAddContact={handleAddContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointmentList={appointmentList} contactList={contactList} handleAddAppointment={handleAddAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;