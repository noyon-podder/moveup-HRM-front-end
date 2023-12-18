import { RxCross1 } from 'react-icons/rx';

const AddDepartmentModal = ({ setIsOpen }) => {

    const handleSubmit = () => {
        setIsOpen(false)
    }

    return (
        <div className=''>
            <dialog id="addDepartment_modal" className="modal">
                <div className="modal-box xl:w-[800px] lg:w-[700px] max-w-5xl">
                    <div className='flex items-center justify-between mb-2'>
                        <h2 className="text-2xl font-semibold">Add Department</h2>
                        <button className='btn bg-white hover:bg-white border-0'><RxCross1 onClick={() => setIsOpen(false)} size={25}></RxCross1></button>
                    </div>
                    <hr />

                    <div className='mt-5'>
                    <h2 className="text-2xl font-semibold">Informations</h2>
                        <div className='flex items-center justify-between mt-4 gap-2'>
                            <input type="text" placeholder="Employee Id*" className="input input-bordered input-md w-full" />
                            <input type="text" placeholder="Name*" className="input input-bordered input-md w-full" />
                            <input type="text" placeholder="Email ID*" className="input input-bordered input-md w-full" />
                        </div>
                        <div className='flex items-center justify-between mt-4 gap-2'>
                            <input type="+tel" placeholder="Phone NO*" className="input input-bordered input-md w-full" />
                            <input type="text" placeholder="Start Date*" className="input input-bordered input-md w-full" />
                            <select className="select select-bordered w-full select-md text-[#8F9BB3]">
                                <option disabled selected className='text-[#8F9BB3]'>Select Role Type</option>
                                <option>Super Admin</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <hr className='my-5' />

                        <div className='mt-16 mb-24 flex items-center justify-between'>
                            <div>
                                <input style={{ display: 'none' }} type="file" id="fileInput" />
                                <label style={{ backgroundColor: '#EFF4FA', color: '#8F9BB3', padding: '50px 20px', borderRadius: '100px', cursor: 'pointer', border: '2px dotted #D7E1EC' }} htmlFor="fileInput" className="custom-file-label">Choose File</label>
                                <p className='absolute mt-14 text-[#8F9BB3]'>No File Selected</p>
                            </div>
                            <p className='text-[#8F9BB3]'>This is some placeholder block-level help text for the above input. It's a bit <br /> lightter and easily wraps to a new line.</p>
                        </div>

                        <h2 className="text-2xl font-semibold">Social Connect</h2>

                        <div className='flex items-center justify-between mt-4 gap-2'>
                            <input type="text" placeholder="Facebook" className="input input-bordered input-md w-full" />
                            <input type="text" placeholder="Twitter" className="input input-bordered input-md w-full" />
                        </div>

                        <div className='flex items-center justify-between mt-4 gap-2'>
                            <input type="text" placeholder="Linkedin" className="input input-bordered input-md w-full" />
                            <input type="text" placeholder="Instragram" className="input input-bordered input-md w-full" />
                        </div>

                    </div>




                    <div className="mt-3 flex justify-end items-center">
                        <button onClick={() => handleSubmit()} className="btn btn-sm bg-[#0095FF] hover:bg-[#0095FF] border-0 text-white">Submit</button>
                        <a onClick={() => setIsOpen(false)} className="underline btn border-0 text-[#8F9BB3] bg-white hover:bg-white">Close</a>
                    </div>
                </div>
            </dialog >
        </div >
    );
};

export default AddDepartmentModal;