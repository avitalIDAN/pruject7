import React from 'react';
import "./VideoModal.css";
const VideoModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Add video player or any other content you want to display */}
        <video controls>
        <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

        {/* Close button */}
        <h3> בואו להתנדב אצלנו! תלמידים, סטודנטים, יהיה כיף!</h3>
        <h3> לפרטים חייגו:</h3>
        <h3> אבי רכז מתנדבים: 050-6302055</h3>
        <button onClick={onClose}>סגור</button>
      </div>
    </div>
  );
};

export default VideoModal;
