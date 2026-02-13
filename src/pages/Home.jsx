import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Later you can clear login data here
    navigate("/"); // go back to login page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-96">
        
        <h1 className="text-3xl font-bold mb-4">
          🎉 Welcome!
        </h1>

        <p className="text-cyan-500 font-bold text-2xl mb-6">
          
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Click 
        </button>

      </div>
    </div>
  );
};

export default Home;
