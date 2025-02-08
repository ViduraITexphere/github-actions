// import React, { useState } from "react";

// const PopupButton = () => {
//     const [showPopup, setShowPopup] = useState(false);

//     return (
//         <div>
//             <button data-testid="open-popup-btn" onClick={() => setShowPopup(true)}>
//                 Open Popup
//             </button>

//             {showPopup && (
//                 <div data-testid="popup" className="popup">
//                     <p>This is a popup!</p>
//                     <button data-testid="close-popup-btn" onClick={() => setShowPopup(false)}>
//                         Close
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PopupButton;
function sum(a, b) {
    return a + b;
}
module.exports = sum;