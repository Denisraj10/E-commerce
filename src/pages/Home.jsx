import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Later you can clear login data here
    navigate("/"); // go back to login page
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center p-9 bg-gray-300">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-96">
        
        <h1 className="text-3xl text-red-300 font-bold mb-4">
           Welcome!
        </h1>
<div className="flex  mb-5 ">
       <input
        type='text'
        holder='user name'
        className='w-full  font-mono p-3 rounded-lg bg-gray-200 text-black border-2 border-b-gray-900 mb-4'
       /><button
          className=" text-white  "
        >search </button>
</div>

<button className="flex " >bidding item</button>




        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Click log out


        </button>

      </div>
    </div>
  );
};

export default Home;
