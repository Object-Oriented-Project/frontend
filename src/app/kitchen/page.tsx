"use client";
import React, { useState } from "react";
import TableMap from "../components/TableMap";

export default function KitchenPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [orders, setOrders] = useState([
    { id: 1, name: "Cookie", status: "Ongoing" },
    { id: 2, name: "Noodle", status: "Ongoing" },
  ]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const filterOrders = (orders, status) => {
    return status === "All"
      ? orders
      : orders.filter((order) => order.status === status);
  };

  const updateOrderStatus = (orders, orderId, newStatus) => {
    return orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
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

  return (
    <div>
      <div> Your Job</div>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => handleFilterClick("All")}
        >
          All
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleFilterClick("Done")}
        >
          Done
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleFilterClick("Ongoing")}
        >
          Ongoing
        </button>
      </div>
      <div>
        {filterOrders(orders, filterStatus).map((order) => (
          <div
            key={order.id}
            className="container sm mb-4 bg-red-200 flex flex-col ml-5 w-80"
          >
            <div className="flex flex-row justify-between items-center rounded-md bg-blue-300">
              <span className="font-semibold">{order.name}</span>
              <p>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Done">Done</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </p>
              <button
                className=" bg-gray-200 text-left p-2 mb-2"
                onClick={() => toggleOrderDetails(order.id)}
              >
                <span>{expandedOrderId === order.id ? "-" : "+"}</span>
              </button>
            </div>
            {expandedOrderId === order.id && (
              <div className="bg-gray-100 flex flex-col mt-2">
                <div>
                  <div>Order ID: {order.id}</div>
                  <div>Status: {order.status}</div>
                  <div>Order Name: {order.name}</div>
                </div>
                {/* Add additional order details here */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
