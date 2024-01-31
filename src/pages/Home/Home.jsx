import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className=" card hero-content text-center bg-neutral-content shadow-2xl p-8">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello User</h1>
          <p className="py-8 text-justify">
            The Phonebook application is ideal for individuals or businesses who need a simple and
            intuitive solution for managing their contacts. Whether it's storing important phone
            numbers, keeping track of business contacts, or managing personal connections, the
            Phonebook application provides a user-friendly interface for organizing and accessing
            contact information.It allows users to add and delete contacts, as well as filter
            contacts by name.
          </p>
          <Link to="/contacts" className="btn bg-[#ffd300] hover:bg-[#ffa902]">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
