import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-center py-4">
      <div className="copyright text-white">
        <p className="text-sm">
          Copyright © Designed &amp; Developed by{" "}
          <a
            href="http://dexignlab.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            InTouch Solution
          </a>{" "}
          2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
