'use client'
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Menupage from "../components/menupage";
import Order from "../components/Order";
import {cust} from "../page";
import {Food} from "../components/Food";
import { useState } from "react";


export let ord : Order;

export default function Menu() {
    // create new Order obj for each customer
    ord = new Order(cust.getUid());

    // ord = new Order(cust.getUid());
   
    return (
        <div>
            <Navbar ord={ord}/>
            <Banner />
            <Menupage ord={ord}/>
            {/* <Footer /> */}
        </div>
    );
}