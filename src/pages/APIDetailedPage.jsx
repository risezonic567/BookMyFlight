// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const APIDetailedPage = () => {
//   const { id } = useParams(); // URL se 'id' mil gayi (e.g. ABC-123)
//   const navigate = useNavigate();
//   const [details, setDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFullDetails = async () => {
//       try {
//         setLoading(true);
//         // Backend ka naya route call karenge jo sirf ek flight ki detail dega
//         const res = await axios.get(`http://localhost:5000/api/flights/details/${id}`);
//         setDetails(res.data.data); 
//       } catch (err) {
//         console.error("Detail fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFullDetails();
//   }, [id]);

//   if (loading) return <div className="p-20 text-center text-white bg-slate-900 min-h-screen">Loading Details...</div>;

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-8">
//       <button onClick={() => navigate(-1)} className="text-blue-400 mb-6">← Back to Results</button>
      
//       <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
//         <h1 className="text-3xl font-bold mb-4 text-blue-400">Flight Confirmation</h1>
//         <p className="text-slate-400 mb-8">Flight ID: {id}</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-700 pt-8">
//           <div>
//             <h3 className="text-slate-500 uppercase text-sm tracking-widest mb-2">Airline</h3>
//             <p className="text-xl font-semibold">IndiGo Airlines</p>
//           </div>
//           <div>
//             <h3 className="text-slate-500 uppercase text-sm tracking-widest mb-2">Baggage</h3>
//             <p className="text-xl font-semibold">15 KG Check-in | 7 KG Cabin</p>
//           </div>
//           {/* Yahan aap API se aane wala aur bhi data dikha sakte hain */}
//         </div>

//         <button className="w-full mt-12 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-all">
//           BOOK THIS FLIGHT NOW
//         </button>
//       </div>
//     </div>
//   );
// };

// export default APIDetailedPage;

import React from 'react'

function APIDetailedPage() {
  return (
    <div>
      
    </div>
  )
}

export default APIDetailedPage
