import React from 'react'
import { Footer } from './FOOTER.JSX';
import Navbar from './navabar';
import InfiniteScrollLogos from './scrool';

export const Aboutpage = () => {

  const books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/7520647-L.jpg" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://covers.openlibrary.org/b/id/7225732-L.jpg" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
    { id: 4, title: "1984", author: "George Orwell", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  ];

  return (
    <>
    <Navbar></Navbar>
    <div>
    <section className="px-6 py-16 bg-gray-100">
    <div className="container mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Book Management System</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the world of books, explore new genres, and keep track of your favorite reads with ease. Our
          Book Management System is designed to provide a seamless experience for book lovers, librarians, and
          readers alike. Whether you're a student, professional, or simply a book enthusiast, we offer a wide range of features to make your reading journey more enjoyable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Features of Our Book Management System</h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 space-y-4">
            <li>Easy-to-use interface for searching and borrowing books</li>
            <li>Browse through categories like fiction, non-fiction, sci-fi, mystery, and more</li>
            <li>Track your borrowed books and return dates</li>
            <li>Personalized book recommendations based on your reading history</li>
            <li>Manage and view your reading lists and wishlists</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Our Book Collection</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our library offers a vast collection of books, ranging from timeless classics to the latest bestsellers.
            Below is a preview of some of the books you can find in our collection:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105">
                <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                <p className="text-gray-600">by {book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our Book Management System was created with the goal of simplifying library operations, making them more efficient and accessible. We understand the importance of books in shaping minds and fostering creativity. Whether you're a student, professional, or book enthusiast, our platform ensures a smooth and enjoyable experience.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          With a vast collection of books and cutting-edge features like real-time availability checks, personalized recommendations, and easy borrowing, our LMS offers everything you need to stay on top of your reading journey.
        </p>
      </div>

      <div className="text-center space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Join Us Today</h3>
        <p className="text-lg text-gray-600 mb-8">
          Sign up now to explore thousands of books, create your personalized library, and enjoy the full features of our Book Management System. Get started today!
        </p>
      </div>
    </div>

  </section>
  </div>

  <section className="px-8 py-1  bg-gray-100">
      <InfiniteScrollLogos></InfiniteScrollLogos>
    </section>
  <Footer></Footer>
  </>
  )
}
