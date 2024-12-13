import React from 'react';
import Sidebar from '../src/components/sidebar';
import Header from '../src/components/header';
import Card from '../src/components/card'; // Importation du composant renommé

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <Card /> {/* Utilisation du composant Card */}
      </div>
    </div>
  );
}

export default App;
