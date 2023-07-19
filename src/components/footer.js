import React from 'react';

export default function FooterPage() {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-white">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          My Calculator Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
