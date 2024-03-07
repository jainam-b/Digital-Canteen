// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//     const [userData, setUserData] = useState(null);
//     const userId = '65d80bea45cb8407e8765bd3'; // Replace with the userId you want to fetch
//     const url = `http://localhost:3001/api/info/${userId}`; // Appending the userId to the URL

//     useEffect(() => {
//         axios.get(url)
//             .then(response => {
//                 setUserData(response.data.user);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     }, [url]);

//     return (
//         <div>
//             <h2>User Information</h2>
//             {userData ? (
//                 <>
//                     <p><strong>Username:</strong> {userData.username}</p>
//                     <p><strong>Email:</strong> {userData.email}</p>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default Profile;


import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:3000');

// Example: Emit an order placement event
socket.emit('placeOrder', orderDetails, (ack) => {
    console.log('Order placement acknowledged:', ack);
});
