import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ setItems }) => {


  const navigate = useNavigate();


  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState([]);

  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      alert("Maximum 3 photos onlyq");
      return;
    }

    setImage(files)
  };

  const handleSubmit = (e) => {



    if (image.length < 2) {
      alert("Minimum 2 photos required");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price,
      description,
      category,
      image
    };

      setItems(prev => [...prev, newItem]);
     navigate("/home");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center text-white">

      <form 
        onSubmit={handleSubmit} 

        className="border  p-10 rounded-2xl w-[550px] shadow-lg"
      >

        <h2 className="text-3xl mb-6 font-bold text-center">
          Add Item

               </h2>

        <input
          type="text"
          placeholder="Item Name"
          value={name}

          onChange={(e) => setName(e.target.value)}

          className="w-full p-3 mb-4 rounded-lg text-black bg-gray-300"
          required   />
        

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}


          className="w-full p-3 mb-4 rounded-lg text-black bg-gray-300"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}

          className="w-full p-3 mb-4 rounded-lg text-black bg-gray-300"
          required          />
        

        <textarea
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg text-black h-28 bg-gray-300"
          required />
        

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImage}
          className="mb-6 bg-gray-300 rounded-2xl p-3 w-full text-black"
        />

        <button 
          type="submit"
          className="w-full bg-green-600 py-3 rounded-xl text-lg  transition" >
        
          Submit Item
                </button>

      </form>
    </div>
  );
};

export default AddItem;
