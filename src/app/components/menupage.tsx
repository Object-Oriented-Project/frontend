
"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import MenuItem from './menuItem';
import { ord } from "../menu/page";
const Menupage = ({ order }) => {
  const [menuTab, setMenuTab] = useState("Recommended");
  const [loading, setLoading] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null); // Add state for error handling
  
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/api/menu');
        setMenuData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchMenuData();
  }, []);

  // Food menu tab handler
  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };

  return (
    <div>
      <div className="sm:mx-2 md:mx-4 mt-4">

        {/* Menu tabs */}
        <div className="flex items-center justify-center space-x-12 sm:mx-38 md:mx-74 lg:mx-96 rounded-full bg-slate-100" role="tablist">
          <a role="tab" className={menuTab === 'Recommended' ? "active_menu_tab poppins bg-rose-300 p-2 rounded-full" : "menu_tab poppins p-2 bg-gray-100 rounded-full"} onClick={() => handleMenuTabs('Recommended')}>Recommended</a>
          <a role="tab" className={menuTab === 'Beverage' ? "active_menu_tab poppins bg-rose-300 p-2 rounded-full" : "menu_tab poppins  p-2 bg-gray-100 rounded-full"} onClick={() => handleMenuTabs('Beverage')}>Beverage</a>
          <a role="tab" className={menuTab === 'Bakery' ? "active_menu_tab poppins bg-rose-300 p-2 rounded-full" : "menu_tab poppins  p-2 bg-gray-100 rounded-full"} onClick={() => handleMenuTabs('Bakery')}>Bakery</a>
          <a role="tab" className={menuTab === 'Food' ? "active_menu_tab poppins bg-rose-300 p-2 rounded-full" : "menu_tab poppins  p-2  bg-gray-100 rounded-full"} onClick={() => handleMenuTabs('Food')}>Food</a>
        </div>

        {/* All foods categorized by type*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ">

            {loading ? (
              <p>Loading menu items...</p>
            ) : error ? (
              <p>Error fetching menu items: {error.message}</p>
            ) : (
              menuData
                .filter(item => {
                  if (menuTab === "Recommended") {
                    return item.IsRecommended === true;
                  } else {
                    return item.ItemType === menuTab;
                  }
                })

                /* pass ID to identify Product card AND pass JSON item too*/
                .map(item => (
                  
                  <MenuItem key={item.ID} item={item}  />
                  // <div key={item.ID}>
                  //   <img src={item.PictureName}></img>
                  //   <h3>{item.ItemName}</h3>
                  //   <p>{item.ItemDescription}</p>
                  //   <p>Price: ${item.ItemPriceLarge}</p>
                  // </div>
                ))
            )}
          </div>
        </div>
      </div>
      );
};

export default Menupage;
