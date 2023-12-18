const HeroSec = () => {
  return (
    <div className="mt-3 mb-[70px]">
      <div className="flex items-center justify-start gap-3 mb-5">
        <h2 className="text-[#222B45] text-base">Settings</h2>
        <h2 className="text-[#8F9BB3] text-base">Activity</h2>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
        <div className="rounded-[8px] bg-white">
          <h3 className="text-[#222B45] text-base p-5">Font Style</h3>
          <div className="flex items-center justify-start gap-3 px-5 border-t border-gray-200 pt-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Open Sans Font</h3>
          </div>
          <div className="flex items-center justify-start gap-3 px-5 pt-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Montserrat Google Font</h3>
          </div>
          <div className="flex items-center justify-start gap-3 px-5 py-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Robot Google Font</h3>
          </div>
        </div>
        <div className="rounded-[8px] bg-white">
          <h3 className="text-[#222B45] text-base p-5">Selected Menu Icon</h3>
          <div className="flex items-center justify-start gap-3 px-5 border-t border-gray-200 pt-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Lorem ipsum dolor</h3>
          </div>
          <div className="flex items-center justify-start gap-3 px-5 pt-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">
              Consectetur adipiscing elit
            </h3>
          </div>
          <div className="flex items-center justify-start gap-3 px-5 py-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Sed do eiusmod tempor</h3>
          </div>
        </div>
        <div className="rounded-[8px] bg-white">
          <h3 className="text-[#222B45] text-base p-5">Submenu List Icon</h3>
          <div className="flex items-center justify-start gap-3 px-5 border-t border-gray-200 pt-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Duis aute irure dolor</h3>
          </div>
          <div className="flex items-center justify-start gap-3 px-5 pt-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Montserrat Google Font</h3>
          </div>
          <div className="flex items-center justify-start gap-3 px-5 py-3">
            <input
              type="checkbox"
              className="checkbox-sm checkbox checkbox-info"
            />
            <h3 className="text-[#222B45] text-sm">Robot Google Font</h3>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 mt-5">
        <div className="rounded-[8px] bg-white">
          <h3 className="text-[#222B45] text-base p-5">General Settings</h3>
          <div className="flex items-center justify-between px-5 mb-4 border-t border-gray-200 pt-3">
            <h3 className="text-[#222B45] text-base">Night Mode</h3>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-[#222B45] text-base">Fix Navbar Top</h3>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-[#222B45] text-base">Header Drank</h3>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-[#222B45] text-base">Min Sidebar Dark</h3>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-[#222B45] text-base">Slidebar Dark</h3>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-[#222B45] text-base">Icon Color</h3>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-[#222B45] text-base">Gradient Color</h3>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-[#222B45] text-base">RTL Support</h3>
            <input type="checkbox" className="toggle" />
          </div>
        </div>
        <div className="rounded-[8px] bg-white h-max">
          <h3 className="text-[#222B45] text-base p-5">Storage</h3>
          <div className="px-5 mb-4 border-t border-gray-200 pt-3">
            <div className="flex items-center justify-end">
              <h6 className="text-base font-semibold ">{77}%</h6>
            </div>
            <div className="w-full h-2 bg-[#e4e8e4] rounded-md relative mt-[10px]">
              <div
                className="absolute top-0 left-0 transition-all duration-300 h-full rounded-md bg-[#0095FF]"
                style={{
                  width: "77%",
                  backgroundColor: "#0095FF",
                }}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-8 mb-6 px-5">
            <button className="bg-[#00E096] rounded-[8px] px-6 py-2 text-white font-semibold text-base">
              Update Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
