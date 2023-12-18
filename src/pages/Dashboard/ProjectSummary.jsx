import axios from "axios";
import { useEffect, useState } from "react";

const ProjectSummary = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Projects.json")
      .then((data) => {
        setProjectsData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(projectsData);
  return (
    <div className=" border border-gray-300 rounded-lg bg-white">
      <h2 className="mt-3 ml-3 font-bold">Project Summary</h2>
      <div className="mt-4">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#EFF4FA]">
              <tr>
                <th className="text-[#8F9BB3]">#</th>
                <th className="text-[#8F9BB3]">Client Name</th>
                <th className="text-[#8F9BB3]">Team</th>
                <th className="text-[#8F9BB3]">Project</th>
                <th className="text-[#8F9BB3]">Project Cost</th>
                <th className="text-[#8F9BB3]">Payment</th>
                <th className="text-[#8F9BB3]">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {projectsData?.map((projectData, index) => (
                <tr key={index}>
                  <td>{projectData?.client_id}</td>
                  <td> {projectData?.client_name}</td>
                  <td className="flex items-center">
                    <div className="avatar-group -space-x-4">
                      <div className="avatar">
                        <div className="w-8">
                          <img src={projectData?.teamImg1} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-8">
                          <img src={projectData?.teamImg2} />
                        </div>
                      </div>
                      {projectData?.teamImg3 && (
                        <div className="avatar">
                          <div className="w-8">
                            <img src={projectData?.teamImg3} />
                          </div>
                        </div>
                      )}
                    </div>
                    {projectData?.teamImg3 && (
                      <div>
                        <span>+{projectData?.more}</span>
                      </div>
                    )}
                  </td>
                  <td>
                    <p>{projectData?.project_name}</p>{" "}
                  </td>
                  <td>
                    <p>${projectData?.cost}</p>{" "}
                  </td>
                  <td>
                    <p>{projectData?.payment_status}</p>{" "}
                  </td>
                  <td>
                    <div className="flex items-center">
                      <span
                        className="w-2 h-2 rounded-full mr-1"
                        style={{
                          backgroundColor: `${projectData?.bg_color}`,
                        }}
                      ></span>
                      <p>{projectData?.status}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
