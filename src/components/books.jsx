import React from 'react';
import Navbar from './navabar';
import { Footer } from './FOOTER.JSX';
import InfiniteScrollLogos from './scrool';

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

export const Books = () => {
  return (
    <div>
      <Navbar></Navbar>
    <div className="min-h-screen flex items-center justify-center py-8 bg-gray-50">
      <div className="px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {books.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-60 hover:shadow-xl transition-shadow duration-300">
              <img src={book.image} alt={book.title} className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              {/* <p className="text-yellow-500">Rating: {book.rating}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className="px-8 py-1 bg-gray-100">
      <InfiniteScrollLogos></InfiniteScrollLogos>
    </section>

    <Footer></Footer>
    </div>
  );
};
