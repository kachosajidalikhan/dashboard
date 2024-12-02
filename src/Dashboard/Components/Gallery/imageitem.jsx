import React from "react";

function ImageItem({ image }) {
  return (
    <div className="rounded-lg overflow-hidden shadow">
      <div className="h-40">
        <img
          src={image.src}
          alt={image.alt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-2 p-3">
        {image.tags.map((tag) => (<>
          <span
            key={tag}
            className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
          >
            {tag}
          </span>
          <div className=" flex gap-1 ">
          <button
            className="text-xs border rounded shadow-md block focus:outline-none text-left px-2 py-1 hover:bg-gray-100"
            // onClick={handleDelete}
          >
            Delete
          </button>
          {/* <button
            className="text-xs text-white bg-gray-400 border rounded shadow-md block focus:outline-none text-left px-3 py-1 hover:bg-gray-100"
            // onClick={() => handleEdit()}
          >
            Edit
          </button> */}
        </div>
        </>))}
      </div>
    </div>
  );
}

export default ImageItem;