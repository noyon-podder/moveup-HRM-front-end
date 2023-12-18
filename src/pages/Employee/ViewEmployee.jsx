/* eslint-disable react/no-unescaped-entities */

import image from "../../assets/EmployeeProfileView/employeeView.png";
import watsapp from "../../assets/EmployeeProfileView/social copy 2.png";
import being from "../../assets/EmployeeProfileView/social copy 3.png";
import twiter from "../../assets/EmployeeProfileView/social copy.png";
import facebook from "../../assets/EmployeeProfileView/social.png";

import pic1 from "../../assets/allEmployee/Oval Copy 2 (1).png";
import pic2 from "../../assets/allEmployee/Oval Copy 2 (2).png";
import pic3 from "../../assets/allEmployee/Oval Copy 2 (3).png";

const ViewEmployee = () => {
  return (
    <div>
      <div className="grid grid-cols-11 gap-8 relative mt-[-192px] ml-14">
        <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
      </div>
      <div className="mt-[200px]">
        <div className="grid xl:grid-cols-9 lg:grid-cols-9 grid-cols-4 gap-6">
          <div className="xl:col-span-3 lg:col-span-3 col-span-1">
            <div className="border border-gray-300 bg-white rounded-lg">
              <div className="flex items-center gap-2 mt-5 ml-5 mb-4">
                <img src={image} alt="" className="w-13" />
                <div>
                  <h3 className="font-semibold">Hattie Watkins</h3>
                  <p className="text-[#8F9BB3]">Web Developer</p>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={facebook} alt="" />
                    <img src={twiter} alt="" />
                    <img src={watsapp} alt="" />
                    <img src={being} alt="" />
                  </div>
                </div>
              </div>
              <hr />
              <p className="mt-5 mx-5 text-[#8F9BB3]">
                Invest in life – in your life. No more wavering dreams, staring
                out the window and wishing and hoping. No more sleepless nights
                worrying about your future as you only see where you are now.
              </p>
              <button className="mt-5 mb-5 ml-5 btn bg-[#0095FF] hover:bg-[#0095FF] text-white btn-sm">
                <img src={twiter} alt="" className="w-6" />
                Follow
              </button>
            </div>

            <div className="relative">
              <select className="select select-bordered w-full mt-4 font-semibold text-[16px]">
                <option disabled selected>
                  Statitics
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <button className="absolute mt-7 right-10">X</button>
            </div>
          </div>

          <div className="xl:col-span-6 lg:col-span-6 col-span-3 border border-gray-300 bg-white rounded-lg">
            <ul
              className="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out mb-5"
              data-te-stepper-init
              data-te-stepper-type="vertical"
            >
              <li
                data-te-stepper-step-ref
                className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center p-6 pb-0 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-white text-sm font-medium text-black border-4 border-[#0095FF]"
                  ></span>
                  <p
                    data-te-stepper-head-text-ref
                    className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content]"
                  >
                    11 : 00 AM
                  </p>
                </div>
                <div
                  data-te-stepper-content-ref
                  className="left-0 overflow-hidden pb-1 pl-[67px] pr-6 duration-300 ease-in-out"
                >
                  <h3 className="font-semibold">Attendence</h3>
                  <h3 className="text-neutral-500">Computer Class</h3>
                </div>
              </li>

              <li
                data-te-stepper-step-ref
                className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center p-6 pb-0 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-white text-sm font-medium text-[#40464f] border-4 border-[#0095FF]"
                  ></span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content]"
                  >
                    11 : 30 AM
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref
                  className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-1  pl-[67px] pr-6 duration-300 ease-in-out"
                >
                  <h3 className="font-semibold">Added an interest</h3>
                  <h3 className="text-neutral-500">"Colunteer Activites"</h3>
                  <h3 className="text-neutral-500 mt-4">
                    Contrary to popular belief, Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim vietnam.
                  </h3>
                </div>
              </li>

              <li
                data-te-stepper-step-ref
                className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center p-6 pb-0 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-white text-sm font-medium text-[#40464f] border-4 border-[#0095FF]"
                  ></span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content]"
                  >
                    12 : 00 PM
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref
                  className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-1  pl-[67px] pr-6 duration-300 ease-in-out"
                >
                  <h3 className="font-semibold">Developer Team</h3>
                  <h3 className="text-neutral-500">Hangouts</h3>
                  <div className="flex items-center">
                    <div className="avatar-group -space-x-4">
                      <div className="avatar">
                        <div className="w-8">
                          <img src={pic1} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-8">
                          <img src={pic2} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-8">
                          <img src={pic3} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <span>+5</span>
                    </div>
                  </div>
                </div>
              </li>

              <li
                data-te-stepper-step-ref
                className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center p-6 pb-0 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-white text-sm font-medium text-[#40464f] border-4 border-[#0095FF]"
                  ></span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content]"
                  >
                    02 : 00 AM
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref
                  className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-1  pl-[67px] pr-6 duration-300 ease-in-out"
                >
                  <h3 className="font-semibold">Responded to need</h3>
                  <h3 className="text-neutral-500">"In-Kind Opportunity"</h3>
                </div>
              </li>

              <li
                data-te-stepper-step-ref
                className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-['']"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center p-6 pb-0 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-white text-sm font-medium text-[#40464f] border-4 border-[#0095FF]"
                  ></span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content]"
                  >
                    02 : 30 AM
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref
                  className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-1  pl-[67px] pr-6 duration-300 ease-in-out"
                >
                  <h3 className="font-semibold">Lunch Break</h3>
                </div>
              </li>

              <li data-te-stepper-step-ref>
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center p-6 pb-0 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-white text-sm font-medium text-[#40464f] border-4 border-[#0095FF]"
                  ></span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content]"
                  >
                    02 : 38 AM
                  </span>
                </div>
                <div
                  data-te-stepper-content-ref
                  className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-1  pl-[67px] pr-6 duration-300 ease-in-out"
                >
                  <h3 className="font-semibold">Finish</h3>
                  <h3 className="text-neutral-500">Go To Home</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
