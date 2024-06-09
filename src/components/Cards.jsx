import { db } from "../firebase"
import { useState, useEffect } from "react"
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import { FaTrash } from 'react-icons/fa'

export default function Cards() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      try{
        const querySnapshot = await getDocs(collection(db, "reservations"));
        const appointmentList = [];
        querySnapshot.forEach((doc) => {
          appointmentList.push({id: doc.id, ...doc.data()});
          setAppointments(appointmentList);
        })
      }catch(error) {
        console.error('error  ')
      }
    }
    
    getAppointments()
  }, [])

  const deleteAppointment = async (id) => {
    try {
      await deleteDoc(doc(db, "reservations", id));
      setAppointments(appointments.filter(appointment => appointment.id !== id));
    } catch (error) {
      console.error('Error deleting appointment: ', error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-center text-2xl uppercase text-amber-900">Liste des rendez-vous</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20">
       {appointments.map((el) => (
        <div key={el.id} className="bg-white relative p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2">{el.firstName} {el.lastName}</h2>
        <p className="text-gray-600 mb-2">Email: {el.email}</p>
        <p className="text-gray-600 mb-2">Telephone: {el.phone}</p>
        <p className="text-gray-600 mb-2">Date: {el.date}</p>
        <p className="text-gray-600 mb-2">Heure: {el.time}</p>
        <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => deleteAppointment(el.id)}
            >
              <FaTrash />
            </button>
        </div>
       ))}
      </div>
    </div>
  )
}
