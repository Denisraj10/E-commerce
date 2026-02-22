import { useNavigate ,Link} from "react-router-dom";


const Home = ({ items }) => {
  console.log(items);

  const navigate = useNavigate();

  const handleLogout = () => {
      
  
    navigate("/"); // go back to login page

    
  };

  const handleadditem =() =>{
     

      navigate("/additem");
    }
  return (
    <div className="w-screen min-h-screen m-0 bg-slate-900 flex items-center justify-center ">

      <div className=" border border-white p-10  rounded-2xl text-center ">
        
        <nav className="flex justify-between  mb-4 "><h1 className="text-3xl text-red-300 font-bold mb-4">
           Welcome!
        </h1>
        <button className="m-2" onClick={handleadditem} >add item</button> </nav>
        
     
      
<div className=" gap-4 flex  m-5 mb-9 ">
       <input
        type='text'
        holder='user name'
        className='w-full mt-4 font-mono p-3 rounded-lg bg-gray-200 text-black border-2 border-b-gray-900 mb-4'
       />
       <button
          className=" text-white m-2 mt-4 px-4 py-2 rounded-2xl "
        >search </button>
</div>

     <div className="grid grid-cols-3 gap-6">

        {items.length === 0 ? (
          <p>No items added yet</p>
        ) : (
          items.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-700 p-5 rounded-xl"
            >
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="mt-2">{item.description}</p>
              <p className="mt-2 text-green-400">₹{item.price}</p>
              <p className="mt-2 size-3">{item.image.length} photos</p>
            </div>
          ))
        )}

      </div>



      




        <button
          onClick={handleLogout}
          className="fixed bottom-4 right-4 "
        >
          Click log out


        </button>

      </div>
    </div>
  );
};

export default Home;
