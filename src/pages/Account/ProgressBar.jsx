const ProgressBar = ({ progress, bg, text }) => {
  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <p className="text-[#8F9BB3]">{text}</p>
        <h6 className="text-base font-semibold ">{progress}%</h6>
      </div>

      <div className="w-full h-2 bg-[#e4e8e4] rounded-md relative mt-[10px]">
        <div
          className="absolute top-0 left-0 transition-all duration-300 h-full rounded-md"
          style={{
            width: `${progress}%`,
            backgroundColor: `${bg}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
