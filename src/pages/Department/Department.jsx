import { useState } from "react";
import { FaGripHorizontal, FaListUl } from "react-icons/fa";
import AddDepartmentModal from "./AddDepartmentModal";
import GridDepartmentPage from "./GridDepartmentPage";
import TableDepartmentPage from "./TableDepartmentPage";

const Department = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPage, setIsPage] = useState(1);

  return (
    <div className="mt-6 w-full mb-10">
      <div className="flex items-center justify-end gap-6 ">
        {isPage == 1 ? (
          <div className="flex items-center justify-between w-[150px]  border border-[#EFF4FA] cursor-pointer rounded-[10px]">
            <div
              onClick={() => setIsPage(1)}
              className="w-1/2 text-center px-4 py-2 bg-[#0095FF] border border-[#0095FF]"
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <FaListUl size={32} color="#fff"></FaListUl>
            </div>
            <div
              onClick={() => setIsPage(2)}
              className="px-4 text-center py-2 bg-[#F9FBFD] hover:bg-[#F9FBFD] w-1/2 cursor-pointer"
            >
              <FaGripHorizontal size={32} color="#8F9BB3"></FaGripHorizontal>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-[150px]  border border-[#EFF4FA] cursor-pointer rounded-[10px]">
            <div
              onClick={() => setIsPage(1)}
              className="px-4 text-center py-2  w-1/2 cursor-pointer bg-[#F9FBFD] hover:bg-[#F9FBFD] border border-[#f9fbfd]"
            >
              <FaListUl size={32} color="#8F9BB3"></FaListUl>
            </div>
            <div
              onClick={() => setIsPage(2)}
              className="w-1/2 text-center px-4 py-2 bg-[#0095FF] border border-[#0095FF]"
              style={{
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <FaGripHorizontal size={32} color="#fff"></FaGripHorizontal>
            </div>
          </div>
        )}
        {/* {isPage == 1 ? (
          <div className="flex items-center mr-8">
            <button
              onClick={() => setIsPage(1)}
              className="btn bg-[#0095FF] hover:bg-[#0095FF] border-t border-l border-b"
            >
              <FaListUl size={32} color="#FFFFFF"></FaListUl>
            </button>
            <button
              onClick={() => setIsPage(2)}
              className="btn border border-gray-300 bg-[#F9FBFD] hover:bg-[#F9FBFD] border-t border-r border-b"
            >
              <FaGripHorizontal size={32} color="#8F9BB3"></FaGripHorizontal>
            </button>
          </div>
        ) : (
          <div className="flex items-center mr-8">
            <button
              onClick={() => setIsPage(1)}
              className="btn bg-[#F9FBFD] hover:bg-[#F9FBFD] border-t border-l border-b"
            >
              <FaListUl size={32} color="#8F9BB3"></FaListUl>
            </button>
            <button
              onClick={() => setIsPage(2)}
              className="btn border-gray-300 bg-[#0095FF] hover:bg-[#0095FF]  border-t border-r border-b"
            >
              <FaGripHorizontal size={32} color="#ffffff"></FaGripHorizontal>
            </button>
          </div>
        )} */}
        <a href="#addDepartment_modal" onClick={() => setIsOpen(true)}>
          <button className="btn bg-[#00E096] hover:bg-[#00E096] text-white">
            Add Department
          </button>
        </a>
      </div>
      {isPage == 1 ? (
        <TableDepartmentPage></TableDepartmentPage>
      ) : (
        <GridDepartmentPage></GridDepartmentPage>
      )}
      {isOpen && (
        <AddDepartmentModal setIsOpen={setIsOpen}></AddDepartmentModal>
      )}
    </div>
  );
};

export default Department;
