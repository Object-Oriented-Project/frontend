'use client'
import Slideshow from "../components/SlideShow"
import Order from "../components/Order";
import {cust} from "../page";
import {Food} from "../components/Food";
import {Product} from "../components/Product"
import { Beverage } from "../components/Beverage";
import { useRouter } from "next/navigation";
export let ord : any;
export default function Summary() {
    // mock ไว้ add Product ก่อน 
    const menu11 = {
        "CreatedAt":"2024-04-12T15:05:30.377645+07:00",
        "UpdatedAt":"2024-04-12T15:05:30.377645+07:00",
        "DeletedAt":null,
        "ID":11,
        "ItemName":"Mama Tom Yum Kung",
        "ItemPriceSmall":70,
        "ItemPriceMedium":100,
        "ItemPriceLarge":159,
        "ItemType":"Food",
        "IsRecommended":false,
        "PictureName":"food-5.png",
        "ItemDescription":"A traditional Thai soup with fragrant lemongrass, galangal, and a spicy kick."}
    const menu28 =  {
        "CreatedAt": "2024-04-12T15:16:02.932999+07:00",
        "UpdatedAt": "2024-04-12T15:16:02.932999+07:00",
        "DeletedAt": null,
        "ID": 28,
        "ItemName": "Soft Drink",
        "ItemPriceSmall": 59,
        "ItemPriceMedium": 79,
        "ItemPriceLarge": 99,
        "ItemType": "Beverage",
        "IsRecommended": false,
        "PictureName": "beverage-11.png",
        "ItemDescription": "Your choice of popular carbonated soft drinks."
      }

      ord = new Order(cust.getUid());
      const router = useRouter()
    return (
        <div>
            <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            onClick={() => {ord.addProduct(new Food(menu11.ID, menu11.ItemName, menu11.ItemPriceLarge, "L",1,1)); console.log(ord.getProducts())}}>
                Mama Tom yum goong L
            </button>
            <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            onClick={() => {ord.addProduct(new Food(menu11.ID, menu11.ItemName, menu11.ItemPriceMedium, "M",1,1)); console.log(ord.getProducts())}}>
                Mama Tom yum goong M spicy1
            </button>
            <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            onClick={() => {ord.addProduct(new Food(menu11.ID, menu11.ItemName, menu11.ItemPriceMedium, "M",1,2)); console.log(ord.getProducts())}}>
                Mama Tom yum goong M spicy2
            </button>
            <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            onClick={() => {ord.addProduct(new Beverage(menu28.ID, menu28.ItemName, menu28.ItemPriceMedium, "M",1,"HOT",2)); console.log(ord.getProducts())}}>
                softdrink sweet50
            </button>
            {/* <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            onClick={() => {ord.removeProduct()}}>
                remove mama tom yum goong M 
            </button> */}
            <button onClick={() => {}}> DELETE</button>
            <button onClick={() => {console.log(ord.getProd()); router.push("/qr")}}> GO QR</button>
        </div>
        
    )
}