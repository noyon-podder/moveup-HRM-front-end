import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";

const AddUserModal = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "myDatat");
  };
  return (
    <div className="">
      <dialog id="addUser_modal" className="modal">
        <div className="modal-box xl:w-[800px] lg:w-[700px] max-w-5xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">Add User</h2>
            <button className="btn bg-white hover:bg-white border-0">
              <RxCross1 onClick={() => setIsOpen(false)} size={25}></RxCross1>
            </button>
          </div>
          <hr />

          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("employeeID", { required: true })}
              type="text"
              placeholder="Employee ID*"
              className="input input-bordered input-sm w-full"
            />
            <div className="flex items-center justify-between mt-4 gap-2">
              <input
                {...register("FirstName", { required: true })}
                type="text"
                placeholder="First Name*"
                className="input input-bordered input-sm w-full"
              />
              <input
                {...register("LastName", { required: true })}
                type="text"
                placeholder="Last Name*"
                className="input input-bordered input-sm w-full"
              />
            </div>
            <div className="flex items-center justify-between mt-4 gap-2">
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="Email ID*"
                className="input input-bordered input-sm w-full"
              />
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Mobile NO*"
                className="input input-bordered input-sm w-full"
              />
              <select
                {...register("gender", { required: true })}
                className="select select-bordered w-full select-sm text-[#8F9BB3]"
              >
                <option
                  value="type"
                  disabled
                  selected
                  className="text-[#8F9BB3] "
                >
                  Select Role Type
                </option>
                <option value="superAdmin">Super Admin</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex items-center justify-between mt-4 gap-2">
              <input
                {...register("userName", { required: true })}
                type="text"
                placeholder="User Name*"
                className="input input-bordered input-sm w-full"
              />
              <input
                {...register("password", { required: true })}
                type="text"
                placeholder="Password*"
                className="input input-bordered input-sm w-full"
              />
              <input
                {...register("confirmPassword", { required: true })}
                type="text"
                placeholder="Confirm Password*"
                className="input input-bordered input-sm w-full"
              />
            </div>

            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
                <thead className="bg-[#EFF4FA]">
                  <tr>
                    <th className="text-[#8F9BB3]">Module Permission</th>
                    <th className="text-[#8F9BB3]">Read</th>
                    <th className="text-[#8F9BB3]">Write</th>
                    <th className="text-[#8F9BB3]">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Super Admin</td>
                    <td>
                      {" "}
                      <input
                        {...register("isSuperAdmin", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input
                        {...register("isSuperAdmin2", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                    <td>
                      <input
                        {...register("isSuperAdmin3", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Admin</td>
                    <td>
                      {" "}
                      <input
                        {...register("isAdmin", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input
                        {...register("isAdmin2", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                    <td>
                      <input
                        {...register("isAdmin3", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Employee Admin</td>
                    <td>
                      {" "}
                      <input
                        {...register("isEmployeeAdmin", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input
                        {...register("isEmployeeAdmin1", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                    <td>
                      <input
                        {...register("isEmployeeAdmin2", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>HR Admin</td>
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        {...register("isHrAdmin", { required: true })}
                        className="checkbox-sm checkbox"
                      />{" "}
                    </td>
                    <td>
                      <input
                        {...register("isHrAdmin2", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                    <td>
                      <input
                        {...register("isHrAdmin3", { required: true })}
                        type="checkbox"
                        className="checkbox-sm checkbox"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex justify-end items-center">
              <button
                type="submit"
                className="btn btn-sm bg-[#0095FF] hover:bg-[#0095FF] border-0 text-white"
              >
                Submit
              </button>
              <a
                onClick={() => setIsOpen(false)}
                className="underline btn border-0 text-[#8F9BB3] bg-white hover:bg-white"
              >
                Close
              </a>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddUserModal;
