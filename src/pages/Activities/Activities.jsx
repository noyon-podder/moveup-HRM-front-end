import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { GrGallery } from "react-icons/gr";

const Activities = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="mt-10">
      <div className="relative left-[600px] top-7">
        <GrGallery className="cursor-pointer" color={"#ddd"} />
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />

      {/* use html  */}
      <div>
        {/* Use dangerouslySetInnerHTML to render the HTML content */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p>Backend </p>
        {content}
      </div>
    </div>
  );
};

export default Activities;
