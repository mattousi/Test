import React from "react";
import img1 from "../assets/img1.png"; 
import img2 from "../assets/img2.png"; 
import img3 from "../assets/img3.png"; 
import img4 from "../assets/img4.png"; 
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png"; 
import img7 from "../assets/img7.png"; 
import img8 from "../assets/img8.png";  

const items = [
  { id: 1, name: "Name", image: img1, quantity: "" }, 
  { id: 2, name: "Name", image: img2, quantity: "" },
  { id: 3, name: "Name", image:img3, quantity: "" },
  { id: 4, name: "Name", image: img4, quantity: "" },
  { id: 5, name: "Name", image: img5, quantity: "" },
  { id: 6, name: "Name", image: img6, quantity: "" },
  { id: 7, name: "Name", image: img7, quantity: "" },
  { id: 8, name: "Name", image: img8, quantity: "" },
];

const CardList = () => {
  return (
    <main className="flex-grow p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex border rounded-md shadow-sm overflow-hidden bg-white min-h-[150px]"
          >
            {/* Section Image */}
            <div className="relative w-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full "
              />
            </div>

            {/* Section Texte */}
            <div className="p-2 py-2 pt-2 space-y-4">
              <p
                className="w-[43px] h-[21px] gap-0 text-[#191919] font-helvetica text-base font-normal leading-[20.8px]"
              >
                {item.name}
              </p>
              <p
                className="w-[43px] h-[21px] gap-0 text-[#191919] font-helvetica text-base font-normal leading-[20.8px]"
              >
                Weight {item.weight}
              </p>
              <p
                className="w-[43px] h-[21px] gap-0 text-[#191919] font-helvetica text-base font-normal leading-[20.8px]"
              >
                Quantity {item.quantity}
              </p>
              <p
                className="w-[43px] h-[21px] gap-0 text-[#191919] font-helvetica text-base font-normal leading-[20.8px]"
              >
                Price {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CardList;
