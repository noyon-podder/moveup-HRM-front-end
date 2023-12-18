import React from 'react';
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "./Event.css";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";

const AddEventModal = ({setAddModalShow}) => {

    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
  const [mounted, setMounted] = useState(false);

    return (
        <>

            <dialog id="addEventmodal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <div className="flex justify-between items-center border-b border-[#EFF4FA] pb-2">
                            <h2 className="text-[#222B45] text-[17px] font-semibold">
                                Add Event
                            </h2>
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() =>setAddModalShow(false)}>
                                ✕
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between py-[11px] ">
                        <p className="text-[15px] font-normal text-[#C5CEE0]">
                            Information Event
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="cursor-pointer w-4  h-4 rounded-full bg-[#0095FF]"></div>
                            <div className="cursor-pointer w-4  h-4 rounded-full bg-[#00E096]"></div>
                            <div className="cursor-pointer w-4  h-4 rounded-full bg-[#FFB45E]"></div>
                            <div className="cursor-pointer w-4  h-4 rounded-full bg-[#FF2D55]"></div>
                            <div className="cursor-pointer w-4  h-4 rounded-full bg-[#884DFF]"></div>
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full outline-none border border-[#EFF4FA] rounded-lg placeholder-[#8F9BB3] text-sm font-normal py-[9px] px-3"
                            placeholder="Title*"
                        />
                    </div>
                    <div className="mt-[15px]">
                        <input
                            type="text"
                            className="w-full outline-none border border-[#EFF4FA] rounded-lg placeholder-[#8F9BB3] text-sm font-normal py-[9px] px-3"
                            placeholder="Address*"
                        />
                    </div>

                    {/* date and time  */}
                    <div className="flex flex-col gap-4 w-full my-[17px]">
                        <div className="w-1/2">
                            <h6 className="text-[#C5CEE0] text-[15px] font-normal mb-[17px]">
                                Start Time
                            </h6>
                            <div className="w-full">
                                <DateTimePicker onChange={onChange} value={value} />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <h6 className="text-[#C5CEE0] text-[15px] font-normal mb-[17px]">
                                End Time
                            </h6>
                            <div className="">
                                <DateTimePicker onChange={onChange2} value={value2} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="outline-none resize-none h-20 border border-[#EFF4FA] w-full py-[9px] px-3 rounded-lg placeholder-[#8F9BB3] font-normal text-sm"
                            placeholder="Type your note..."
                        ></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <p className="text-xs font-normal text-[#8F9BB3]">Notification</p>
                            <button
                                onClick={() =>
                                    mounted === false ? setMounted(true) : setMounted(false)
                                }
                                className={
                                    "flex items-center gap-[10px] text-[#00e09556] text-sm font-medium hover:text-main hover:font-semibold"
                                }
                            >
                                {mounted === true ? (
                                    <BiToggleRight size={40} color="#00E096" />
                                ) : (
                                    <BiToggleLeft size={40} color="#00e09556" />
                                )}
                            </button>
                        </div>
                        <div className="flex gap-[24px]">
                            <button className="btn btn-sm bg-[#0095FF] text-white hover:bg-[#0095ffda] capitalize">
                                Add New
                            </button>
                            <button className="text-[13px] font-normal text-[#8F9BB3]" onClick={() => setAddModalShow(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AddEventModal;