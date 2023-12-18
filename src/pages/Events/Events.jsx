import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Event.css";
import { useState } from "react";
import ShowEventDetailsModal from "./ShowEventDetailsModal";
import AddEventModal from "./AddEventModal";
const localizer = momentLocalizer(moment);


const events = [
  // year-month-date-time(hour-minute-second)
  {
    start: moment("2023-10-28T06:30:00").toDate(),
    end: moment("2023-10-28T07:45:00").toDate(),
    title: "ENT Appointment",
    address: "Sylhet",
    note: "good brain and I've said a lot of things. I'm speaking with myseft, number one."
  },
  {
    start: moment("2023-10-22T04:30:00").toDate(),
    end: moment("2023-10-22T05:45:00").toDate(),
    title: "GIT Appointment",
    address: "Chattogram",
    note: "I'm speaking with myseft, number one, because ",
    color: "Orange"
  },
  {
    start: moment("2023-10-24T22:30:00").toDate(),
    end: moment("2023-10-24T22:45:00").toDate(),
    title: "EBM Appointment",
    address: "Noakhali",
    note: "I'm speaking with myseft, number one, because I have a very good brain and I've said a lot of things. I'm speaking with myseft, number one.",
    color: "Red"
  },
  {
    start: moment("2023-10-25T01:30:10").toDate(),
    end: moment("2023-10-26T01:45:00").toDate(),
    title: "PLF Appointment",
    address: "Dhaka",
    note: "I'm speaking with myseft, number one, because I have a very good brain and I've said a lot of things. I'm speaking with myseft, number one.",
    color: "Green"
  },
  {
    start: moment("2023-10-20T14:30:10").toDate(),
    end: moment("2023-10-20T15:45:00").toDate(),
    title: "GCL Appointment",
    address: "Dhaka",
    note: "I'm speaking with myseft, number one, because I have a very good brain and I've said a lot of things. I'm speaking with myseft, number one.",
    color: "Purple"
  },

];


const Events = () => {

  const [modalShow, setModalShow] = useState(false);
  const [AddModalShow, setAddModalShow] = useState(false);
  const [data, setData] = useState({});

  const handleEventClick = (event) => {
    setModalShow(true);
    setData(event);
  }

  return (
    <div className="mb-10">
      <div className="flex justify-end mt-3 mb-4">
        <a
          className="btn bg-[#00E096] btn-md text-white hover:bg-[#00e095dc] rounded-lg capitalize  "
          onClick={() => setAddModalShow(true)}
          href="#addEventmodal"
        >
          Add New
        </a>
      </div>
      <a href="#showEventSetails_Modal">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={(slotInfo) => {
            const { start, end } = slotInfo;
            console.log(start, end);
          }}
          selectable
          popup={true}
          style={{ height: 700 }}
          onSelectEvent={handleEventClick}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.color || 'Blue',
            },
          })}
          className="bg-white p-10"
        />
      </a>
      {
        modalShow && data && <ShowEventDetailsModal data={data} setModalShow={setModalShow}></ShowEventDetailsModal>
      }
      {
        AddModalShow && <AddEventModal setAddModalShow={setAddModalShow}></AddEventModal>
      }
    </div>
  );
};

export default Events;




// const date = new Date('Sat Oct 28 2023 06:30:00 GMT+0600 (Bangladesh Standard Time)');

// const year = date.getFullYear();
// const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and pad with 0 if needed.
// const day = String(date.getDate()).padStart(2, '0');
// const hours = String(date.getHours()).padStart(2, '0');
// const minutes = String(date.getMinutes()).padStart(2, '0');
// const seconds = String(date.getSeconds()).padStart(2, '0');

// const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
// console.log(isoString); // Output: 2023-10-28T06:30:00
