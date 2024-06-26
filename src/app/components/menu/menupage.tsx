"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "./menuItem";
import ItemModal from "./itemModal";

const Menupage = () => {
  
  const [menuTab, setMenuTab] = useState("Recommended");
  const [loading, setLoading] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/api/menu");
        setMenuData(response.data);
        setLoading(false);
      } catch (error : any) {
        setLoading(false);
        setError(error);
      }
    };

    fetchMenuData();
  }, []);

  // Food menu tab handler
  const handleMenuTabs = (type : string) => {
    setMenuTab(type);
  };

  const openModal = (item : any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <div>
      <div className="sm:mx-2 md:mx-4 mt-4">
        {/* Menu tabs */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 rounded-full bg-slate-100 p-2 " role="tablist">
          <a role="tab" className={menuTab === 'Recommended' ? "active_menu_tab poppins font-bold bg-[#c62d70] text-white  p-2 rounded-full" : "menu_tab poppins font-bold py-2   bg-slate-100 rounded-full"} onClick={() => handleMenuTabs('Recommended')}>Recommended</a>
          <a role="tab" className={menuTab === 'Beverage' ? "active_menu_tab poppins font-bold bg-[#c62d70] text-white  p-2 rounded-full" : "menu_tab poppins font-bold  p-2 bg-slate-100 rounded-full"} onClick={() => handleMenuTabs('Beverage')}>Beverage</a>
          <a role="tab" className={menuTab === 'Bakery' ? "active_menu_tab poppins font-bold bg-[#c62d70] text-white  p-2 rounded-full" : "menu_tab poppins font-bold  p-2 bg-slate-100 rounded-full"} onClick={() => handleMenuTabs('Bakery')}>Bakery</a>
          <a role="tab" className={menuTab === 'Food' ? "active_menu_tab poppins font-bold bg-[#c62d70] text-white p-2 rounded-full" : "menu_tab poppins font-bold  p-2  bg-slate-100 rounded-full"} onClick={() => handleMenuTabs('Food')}>Food</a>
        </div>

        {/* All foods categorized by type*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ">
          {loading ? (
            <p>Loading menu items...</p>
          ) : error ? (
            <p>Error fetching menu items: {error.message}</p>
          ) : (
            menuData
              .filter((item : any) => {
                if (menuTab === "Recommended") {
                  return item.IsRecommended === true;
                } else {
                  return item.ItemType === menuTab;
                }
              })

              .map((item : any) => (
                <MenuItem key={item.ID} item={item} openModal={openModal} />
              ))
          )}
        </div>
      </div>
      {showModal && selectedItem && (
        <ItemModal item={selectedItem} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Menupage;
