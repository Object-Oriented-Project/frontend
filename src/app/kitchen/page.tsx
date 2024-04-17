"use client";
import React, { useEffect, useState } from "react";
import TableMap from "../components/TableMap";

export default function KitchenPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const filterOrders = (orders, status) => {
    return status === "All"
      ? orders
      : orders.filter((order) => order.order_status === status);
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
          onClick={() => handleFilterClick("ONGOING")}
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
              <span className="font-semibold">{order.customer_name}</span>
              <p>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={order.order_status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Done">Done</option>
                  <option value="ONGOING">Ongoing</option>
                </select>
              </p>
              <button
                className=" bg-gray-200 text-left p-2 mb-2"
                onClick={() => toggleOrderDetails(order.order_id)}
              >
                <span>{expandedOrderId === order.id ? "-" : "+"}</span>
              </button>
            </div>
            {expandedOrderId === order.order_id && (
              <div className="bg-gray-100 flex flex-col mt-2">
                <div>
                  <div>Order ID: {order.order_id}</div>
                  <div>Status: {order.order_status}</div>
                  <div>Order Name: {order.customer_name}</div>
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
