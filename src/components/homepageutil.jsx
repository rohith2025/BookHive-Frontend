import React from 'react';
import { useEffect } from 'react';
import './homepageutil.css'
import InfiniteScrollLogos from './scrool';

function BookManagementHomepage() {
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
    { id: 2, title: "1984", author: "George Orwell", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", image: "https://covers.openlibrary.org/b/id/8225265-L.jpg" },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://covers.openlibrary.org/b/id/5898321-L.jpg" },
    { id: 5, title: "Moby Dick", author: "Herman Melville", image: "https://covers.openlibrary.org/b/id/7222276-L.jpg" },
    { id: 6, title: "War and Peace", author: "Leo Tolstoy", image: "https://covers.openlibrary.org/b/id/6105831-L.jpg" },
    { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", image: "https://covers.openlibrary.org/b/id/8225321-L.jpg" },
    { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
    { id: 9, title: "Brave New World", author: "Aldous Huxley", image: "https://covers.openlibrary.org/b/id/7222161-L.jpg" },
    { id: 10, title: "Jane Eyre", author: "Charlotte Brontë", image: "https://covers.openlibrary.org/b/id/8265881-L.jpg" },
    { id: 11, title: "Wuthering Heights", author: "Emily Brontë", image: "https://covers.openlibrary.org/b/id/6979876-L.jpg" },
    { id: 12, title: "Fahrenheit 451", author: "Ray Bradbury", image: "https://covers.openlibrary.org/b/id/7984916-L.jpg" },
    { id: 13, title: "The Odyssey", author: "Homer", image: "https://covers.openlibrary.org/b/id/5231062-L.jpg" },
    { id: 14, title: "Crime and Punishment", author: "Fyodor Dostoevsky", image: "https://covers.openlibrary.org/b/id/6000610-L.jpg" },
    { id: 15, title: "The Divine Comedy", author: "Dante Alighieri", image: "https://covers.openlibrary.org/b/id/7137085-L.jpg" },
    { id: 16, title: "Frankenstein", author: "Mary Shelley", image: "https://covers.openlibrary.org/b/id/7222241-L.jpg" },
    { id: 17, title: "The Picture of Dorian Gray", author: "Oscar Wilde", image: "https://covers.openlibrary.org/b/id/6979812-L.jpg" },
    { id: 18, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", image: "https://covers.openlibrary.org/b/id/7222166-L.jpg" },
    { id: 19, title: "Anna Karenina", author: "Leo Tolstoy", image: "https://covers.openlibrary.org/b/id/8225278-L.jpg" },
    { id: 20, title: "The Adventures of Huckleberry Finn", author: "Mark Twain", image: "https://covers.openlibrary.org/b/id/7984906-L.jpg" },
    { id: 21, title: "Les Misérables", author: "Victor Hugo", image: "https://covers.openlibrary.org/b/id/6979806-L.jpg" },
    { id: 22, title: "Don Quixote", author: "Miguel de Cervantes", image: "https://covers.openlibrary.org/b/id/9265040-L.jpg" },
  ];




  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');

    const intervalId = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center" style={{ backgroundImage: "url('https://www.reganagency.com/wp-content/uploads/2023/10/Library-Management.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 text-white rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to the BookHive</h1>
          <p className="mt-4 text-lg">Your one-stop platform for managing and discovering amazing books</p>
        </div>
      </section>

      <section className="px-8 py-12 bg-gray-100">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Books</h2>
  <div className="relative">
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
      onClick={() => document.getElementById('scroll-container').scrollBy({ left: -200, behavior: 'smooth' })}
    >
      &lt;
    </button>
    <div
      id="scroll-container"
      className="flex overflow-x-scroll space-x-4 scrollbar-hide"
      onScroll={(e) => {
        const container = e.target;
        if (container.scrollLeft === 0) {
          container.scrollLeft = container.scrollWidth / 2;
        } else if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = container.scrollWidth / 2;
        }
      }}
    >
      {[...books, ...books].map((book, index) => (
        <div key={`${book.id}-${index}`} className="bg-white rounded-lg shadow-lg w-60 min-w-[240px] p-4">
          <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600">by {book.author}</p>
        </div>
      ))}
    </div>

    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
      onClick={() => document.getElementById('scroll-container').scrollBy({ left: 200, behavior: 'smooth' })}
    >
      &gt;
    </button>
  </div>
</section>

    
      <section className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
        <ul className="space-y-4 text-gray-600">
          <li>📚 Browse through thousands of book titles in our collection.</li>
          <li>🔍 Use our search tool to quickly find books by title, author, or genre.</li>
          <li>📑 Organize your book list by adding books to your reading list or wishlist.</li>
          <li>📈 Get personalized recommendations based on your preferences.</li>
        </ul>
      </section>



      <section className="px-8 py-4 bg-gray-100">

        <InfiniteScrollLogos></InfiniteScrollLogos>
      </section>
      
    </div>
  );
}

export default BookManagementHomepage;
