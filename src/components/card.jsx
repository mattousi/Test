import React from 'react';

const items = [
  { id: 1, name: 'Asparagus', image: 'https://via.placeholder.com/150', price: '$3.00' },
  { id: 2, name: 'Strawberry', image: 'https://via.placeholder.com/150', price: '$2.50' },
  { id: 3, name: 'Orange', image: 'https://via.placeholder.com/150', price: '$1.80' },
  { id: 4, name: 'Broccoli', image: 'https://via.placeholder.com/150', price: '$2.00' },
  { id: 5, name: 'Peppers', image: 'https://via.placeholder.com/150', price: '$3.50' },
  { id: 6, name: 'Fish', image: 'https://via.placeholder.com/150', price: '$4.20' },
];

const Card = () => {
  return (
    <main className="flex-grow p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-1">{item.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500">
                  Add to Cart
                </button>
                <span className="text-sm text-gray-500">Quantity: 1</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Card;
