import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function AddBooks(){

  const notify = () => toast("New Book Added!!");

  const [bookData, setBookData] = useState({
    author: "",
    subject: "",
    publishYear: "",
    img: "",
  });

  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onPost = async () => {
    try {
      const res = await axios.post("http://localhost:8000/adds", bookData);
      console.log(res.data);
      alert("Book added successfully!");
      // Reset form
      setBookData({
        author: "",
        subject: "",
        publishYear: "",
        img: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. See console for details.");
    }
  };

    return(
        <div className="flex justify-center  items-center w-full p-8 h-screen shadow-lg rounded-lg bg-gray-300">
            <img src="https://plus.unsplash.com/premium_photo-1669828831467-bc0b867e2947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" 
            className="w-80 m-20 h-131 mt-27 rounded-md shadow-lg -ml-4"
                 />
        <div className="w-64 h-fit bg-gray-100 p-7 mt-8 -ml-17 shadow-lg rounded-lg">
            
      <h2 className="text-xl font-bold mb-6">Add your Books Here 😁❤</h2>

      {/* Author */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Author Name
        </label>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          placeholder="Enter author"
          className="w-full rounded-lg p-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={bookData.subject}
          onChange={handleChange}
          placeholder="Enter subject"
          className="w-full rounded-lg p-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Publish Year */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Publish Year
        </label>
        <input
          type="number"
          name="publishYear"
          value={bookData.publishYear}
          onChange={handleChange}
          placeholder="e.g. 2023"
          className="w-full rounded-lg p-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image Link
        </label>
        <input
          type="text"
          name="img"
          value={bookData.img}
          onChange={handleChange}
          placeholder="e.g. https://example.com/image.jpg"
          className="w-full rounded-lg p-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={()=>{
          onPost();
          notify();
        }} // ✅ call parent handler
        className="w-full py-2 mb-2 rounded-lg text-white font-medium
             bg-gradient-to-r from-blue-600 to-blue-800
             hover:from-blue-600 hover:to-blue-900
             transition duration-300 ease-in-out "
      >
        Post
      </button>
      <ToastContainer/>
      
      <button  className="w-full py-2 rounded-lg  font-medium
             bg-gradient-to-r from-green-800 to-black-800
             hover:from-red-600 hover:to-red-900
              " 
              onClick={() => navigate(-1)}
              >Back</button>
              </div>
      
    </div>
    )
}
        