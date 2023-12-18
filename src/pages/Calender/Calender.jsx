import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import ShowEventDetailsModal from "../Events/ShowEventDetailsModal";
import { AiOutlinePlus } from "react-icons/ai";
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

const Calender = () => {

    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState({});

    const handleEventClick = (event) => {
        setModalShow(true);
        setData(event);
    }

    return (
        <div className="grid xl:grid-cols-12 lg:grid-cols-10 grid-cols-4 mt-8 mb-8 gap-4">
            <div className="xl:col-span-3 lg:col-span-3 col-span-1">
                <div className="bg-white p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-xl">Event List</h2>
                        <AiOutlinePlus size={25}></AiOutlinePlus>
                    </div>
                    <hr className="my-5" />
                    <p className="py-2 px-3 bg-purple-700 rounded-lg text-white"><span className="font-semibold">02 : 30 AM</span> Long Event</p>
                    <p className="py-2 px-3 bg-green-600 rounded-lg text-white mt-2"><span className="font-semibold">09 : 00 AM</span> Marketing Meeting</p>
                    <p className="py-2 px-3 bg-red-500 rounded-lg text-white mt-2"><span className="font-semibold">05 : 30 AM</span> My Event 1</p>
                    <p className="py-2 px-3 bg-orange-400 rounded-lg text-white mt-2"><span className="font-semibold">08 : 15 AM</span> Company party</p>
                    <p className="py-2 px-3 bg-blue-500 rounded-lg text-white mt-2"><span className="font-semibold">09 : 30 AM</span> My Event 2</p>
                </div>
                <div className="bg-white p-4 mt-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-xl">TODO List</h2>
                        <AiOutlinePlus size={25}></AiOutlinePlus>
                    </div>
                    <hr className="my-5" />

                    <div className="flex items-center justify-start gap-3">
                        <input type="checkbox" className="checkbox-sm checkbox checkbox-primary" checked />
                        <del className="text-[#222B45] font-semibold">Contrary to popular belief</del>
                    </div>
                    <hr className="my-5"/>
                    <div className="flex items-center justify-start gap-3">
                        <input type="checkbox" className="checkbox-sm checkbox checkbox-primary" />
                        <h3 className="text-[#222B45] font-semibold">New logo design for Admin</h3>
                    </div>
                    <hr className="my-5"/>
                    <div className="flex items-center justify-start gap-3">
                        <input type="checkbox" className="checkbox-sm checkbox checkbox-primary" checked />
                        <del className="text-[#222B45] font-semibold">Consectetur adipiscing elit</del>
                    </div>
                    <hr className="my-5"/>
                    <div className="flex items-center justify-start gap-3">
                        <input type="checkbox" className="checkbox-sm checkbox checkbox-primary" />
                        <h3 className="text-[#222B45] font-semibold">Adipiscing elit, sed do list</h3>
                    </div>

                </div>
            </div>
            <div className="xl:col-span-9 lg:col-span-7 col-span-3 bg-white p-5">
                <h3 className="font-semibold">Sara Hopkins</h3>
                <hr className="my-5" />
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
                    />
                </a>
                {
                    modalShow && data && <ShowEventDetailsModal data={data} setModalShow={setModalShow}></ShowEventDetailsModal>
                }
            </div>
        </div>
    );
};

export default Calender;