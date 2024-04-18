"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function KitchenPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const filterOrders = (orders, status) => {
    return status === "All"
      ? orders
      : orders.filter((order) => order.order_status === status);
  };

  const updateOrderStatus = (orders, orderId, newStatus) => {
    return orders.map((order) => {
      if (order.order_id === orderId) {
        return { ...order, order_status: newStatus };
      }
      return order;
    });
  };

  const handleStatusChange = (oid, newStatus) => {
    const newOrders = updateOrderStatus(orders, oid, newStatus);
    setOrders(newOrders);
  };
  const handleFilterClick = (status) => {
    setFilterStatus(status);
  };

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001/api/kitchen/ws/kitchen");
    socket.onopen = () => {
      console.log("Connected to the kitchen websocket server");
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received data from the kitchen websocket server", data);
      //append the new order to the orders array
      setOrders((orders) => [...orders, data]);
    };
    return () => {
      socket.close();
    };
  }
    , []);

  useEffect(() => {
    //use axios
    axios.get("http://localhost:3001/api/menu").then((response) => {
      console.log("Received orders from the server", response.data);
      setMenuItems(response.data);
    }
    );
  }
    , []);

  return (
    <div>
      <div>
        <div className="py-10 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 pt-6 text-center text-black">
              Incoming Orders
            </h2>
            <ul className="menu menu-horizontal menu-xs bg-base-200 rounded-box mt-6 w-full justify-around">
              {/* menu All Ongoing Finished */}
              <li>
                <a
                  className={`menu-item ${filterStatus === "All" ? "active" : ""}`}
                  onClick={() => handleFilterClick("All")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`menu-item ${filterStatus === "ONGOING" ? "active" : ""}`}
                  onClick={() => handleFilterClick("ONGOING")}
                >
                  Ongoing
                </a>
              </li>
              <li>
                <a
                  className={`menu-item ${filterStatus === "FINISHED" ? "active" : ""}`}
                  onClick={() => handleFilterClick("FINISHED")}
                >
                  Finished
                </a>
              </li>
            </ul>
            <div className="overflow-x-auto p-5">
              {filterOrders(orders, filterStatus).map((order) => (
                <div
                  key={order.order_id}
                  className="card bordered mb-4"
                  onClick={() => toggleOrderDetails(order.order_id)}
                >
                  <div className="card-body">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="card-title">{order.customer_name}</h2>
                        <p className="text-xs text-gray-500 ">
                          Order ID: {order.order_id}
                        </p>
                        <p className="text-xs text-gray-500 ">
                          Table: {order.order_table} - {order.order_status}
                        </p>
                      </div>
                      <div>
                        <button
                          className={`btn ${order.order_status === "ONGOING"
                            ? "btn-warning"
                            : "btn-success"
                            }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(order.order_id, "FINISHED");
                          }}
                        >
                          {order.order_status === "ONGOING" ? "Finish" : "Done"}
                        </button>
                      </div>
                    </div>
                    {expandedOrderId === order.order_id && (
                      <div className="mt-4">
                        <ul className="menu menu-horizontal menu-xs rounded-box w-full">
                          <div className=" flex flex-col gap-3 w-full">
                            {order.order_items.map((item) => (
                              <li key={item.menu_id}>
                                <div className="flex bg-base-200 rounded-box p-3 w-full">
                                  <Image
                                    src={`/menu/${menuItems.find((mi) => mi.ID === item.menu_id).PictureName} `}
                                    alt=""
                                    width={150}
                                    height={150}
                                    className="rounded-lg"
                                  />
                                  <div className=" flex flex-col gap-2 mx-5">
                                    <span className="text-lg font-bold">
                                      {menuItems.find((mi) => mi.ID === item.menu_id).ItemName}
                                    </span>
                                    <span className="text-xs">
                                      {menuItems.find((mi) => mi.ID === item.menu_id).ItemDescription}
                                    </span>
                                    <span className="text-sm flex">
                                      <p className=" font-bold">Quantity:</p>
                                      <span className="badge badge-outline">
                                        {item.quantity}
                                      </span>
                                    </span>
                                    <span className="text-sm flex">
                                      <p className=" font-bold">Spice Level:</p>
                                      <span className={`badge ${item.spicy_level === "Low" ? "badge-success" : item.spicy_level === "Medium" ? "badge-warning" : "badge-error"}`}>
                                        {item.spicy_level}
                                      </span>
                                    </span>
                                    <span className="text-sm flex">
                                      <p className=" font-bold">Size:</p>
                                      <span className={`badge ${item.size === "SMALL" ? "badge-success" : item.size === "MEDIUM" ? "badge-warning" : "badge-error"}`}>
                                        {item.size}
                                      </span>
                                    </span>
                                    <span className="text-sm flex">
                                      <p className=" font-bold">Sweetness:</p>
                                      <span className={`badge ${item.sweetness === "LESS" ? "badge-success" : item.sweetness === "NORMAL" ? "badge-warning" : "badge-error"}`}>
                                        {item.sweetness}
                                      </span>
                                    </span>
                                    <span className="text-sm flex">
                                      <p className=" font-bold">Note:</p>
                                      {item.note}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </div>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}