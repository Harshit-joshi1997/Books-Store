import { useState } from "react";
import Sidebar from "./Sidebar";

type Book = {
  _id: string;
  author: string;
  subject: string;
  publishYear: number;
};

export default function Cards() {
  const [filters, setFilters] = useState({
    author: "",
    subject: "",
    publishYear: "",
  });
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await fetch(`http://localhost:8000/books?${query}`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar with filters */}
      <Sidebar filters={filters} setFilters={setFilters} onSearch={handleSearch} />


      {/* Cards Section */}
      <div className="flex-1 mt-15 ml-10 p-2 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-2 rounded-lg
       text-white font-medium bg-gradient-to-r from-blue-200 to-blue-100 hover:from-blue-100 hover:to-blue-200
             transition duration-300 ease-in-out" style={{ maxHeight: 'calc(115vh - 200px)', overflowY: 'auto' }}>
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Subject: {book.subject}</p>
            <p className="text-gray-600">Published: {book.publishYear}</p>
          </div>
        ))}

        {books.length === 0 && (
          <p className="text-gray-600 col-span-full text-center mt-10">
            No books found. Try adjusting filters.
          </p>
        )}
      </div>
    </div>
  );
}
