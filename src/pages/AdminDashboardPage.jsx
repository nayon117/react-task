import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { AuthContext } from "Context/Auth";

const leaderboardData = [
  {
    title: "Rune raises $100,000 for marketing through NFT butterflies sale",
    author: "nftninjanft",
    likes: 254,
    image: "/images/r2.png",
  },
  {
    title: "The Cryptocurrency Trading Bible",
    author: "deniscrypto",
    likes: 203,
    image: "/images/r3.png", // Placeholder image path
  },
  {
    title: "Designing our new company brand: Meta",
    author: "meto_world98",
    likes: 134,
    image: "/images/r4.png", // Placeholder image path
  },
  {
    title: "Connect media partners, earn exciting rewards for today",
    author: "kingdom43world",
    likes: 99,
    image: "/images/r5.png", // Placeholder image path
  },
];

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 10; // Number of videos to show per page

  useEffect(() => {
    fetchVideos();
  }, [currentPage]); // Fetch videos whenever currentPage changes

  // Mock function to fetch videos (replace with your actual API call)
  const fetchVideos = () => {
    // Mocking data for demonstration
    const start = (currentPage - 1) * videosPerPage;
    const end = start + videosPerPage;
    const fetchedVideos = leaderboardData.slice(start, end);
    setVideos(fetchedVideos);
  };

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); 
    window.location.href = "/admin/login"; 
  };
  // Handler for next page button
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Handler for previous page button
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl md:text-3xl font-bold">App</h1>
        <button onClick={handleLogout} className="bg-[#9BFF00] text-black px-4 py-2 rounded text-xs">
          Logout
        </button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold">Today's leaderboard</h1>
        <div className="flex items-center space-x-4">
          <span>30 May 2022</span>
          <button className="bg-[#9BFF00] text-black px-4 py-2 rounded text-xs">
            Submissions Open
          </button>
          <span>11:34</span>
        </div>
      </div>
      <main>
        <div className="overflow-x-auto rounded bg-gray-800 p-5 shadow">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Likes</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-600"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 mr-4 rounded"
                    />
                    {item.title}
                  </td>
                  <td className="px-4 py-2">{item.author}</td>
                  <td className="px-4 py-2">{item.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded mr-2"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
