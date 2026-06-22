import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allBooksData = [
  {
    id: 1,
    genre: 'Fiction',
    title: 'The Little Prince of Flowers',
    author: 'Daniel Chidiac',
    price: '$15.99',
    image: '/images/In-place-of-fflowers.png'
  },
  {
    id: 2,
    genre: 'True Crime',
    title: 'The Murder of Princess Diana',
    author: 'Noel Botham',
    price: '$12.50',
    image: '/images/the-murder-of-princess-diana.png'
  },
  {
    id: 3,
    genre: 'Dark Fantasy',
    title: 'The Spirit of Yawa',
    author: 'Seyi Kekere-Ekun',
    price: '$18.75',
    image: '/images/the-spirit-of-danfo.png'
  },
  {
    id: 4,
    genre: 'Thriller',
    title: 'Beyond Any Doubt',
    author: 'Rita Ejikeme',
    price: '$14.25',
    image: '/images/beyond-and-doubtson-of-the-house.png'
  },
  {
    id: 5,
    genre: 'Sci-Fi / Afrofuturism',
    title: 'Children of Blood and Bone',
    author: 'Tomi Adeyemi',
    price: '$16.99',
    image: '/images/believers.png'
  },
  {
    id: 6,
    genre: 'Fantasy',
    title: 'Percy Jackson and the Olympians',
    author: 'Rick Riordan',
    price: '$11.50',
    image: '/images/percy-2.png'
  },
  {
    id: 7,
    genre: 'Fantasy',
    title: 'Harry Potter and the Cursed Child',
    author: 'J.K. Rowling',
    price: '$22.99',
    image: '/images/percy-1.png'
  },
  {
    id: 8,
    genre: 'Graphic Novel',
    title: 'Akiti the Great',
    author: 'Bolaji Olaloye',
    price: '$9.99',
    image: '/images/heroes.png'
  },
  {
    id: 9,
    genre: 'Business',
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    price: '$20.50',
    image: '/images/think.png'
  },
  {
    id: 10,
    genre: 'Biography',
    title: 'The Path and the Legacy',
    author: 'Babatunde Fashola',
    price: '$25.99',
    image: '/images/babangida.png'
  }
];

export default function Shop() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Shop All Books
        </h1>
        <p className="text-neutral-600">
          Discover your next great read from our curated collection
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {allBooksData.map((book) => (
          <div key={book.id} className="space-y-3 flex flex-col items-center text-center">
            <Link href={`/checkout?bookId=${book.id}&title=${encodeURIComponent(book.title)}&price=${encodeURIComponent(book.price)}`} className="relative w-full h-56 block hover:shadow-md transition-shadow border border-slate-100 rounded-sm overflow-hidden">
              <Image 
                src={book.image} 
                alt={book.title} 
                fill
                className="object-cover"
              />
            </Link>
            <div className="space-y-1 w-full">
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wide">{book.genre}</span>
              <h3 className="text-xs font-bold text-neutral-800 line-clamp-2 px-1">{book.title}</h3>
              <p className="text-[11px] font-semibold text-neutral-400">By {book.author}</p>
              <p className="text-xs font-black text-neutral-900 pt-1">{book.price}</p>
            </div>
            <Link href={`/checkout?bookId=${book.id}&title=${encodeURIComponent(book.title)}&price=${encodeURIComponent(book.price)}`} className="w-full">
              <button className="w-full border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-colors text-xs font-bold py-2 rounded-sm">
                Add to cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}