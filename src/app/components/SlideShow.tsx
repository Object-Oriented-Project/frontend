import Image from "next/image";

export default function Slideshow() {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box"style={{ maxHeight: '500px' }}>
      <div className="carousel-item">
        <Image
          src={"/menu/bakery-3.webp"} width={250} height={250}
          className="rounded-box" alt="bakery-3"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/food-3.webp"} width={250} height={250}
          className="rounded-box" alt="food-3"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/food-7.webp"} width={250} height={250}
          className="rounded-box" alt="food-7"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/beverage-2.webp"} width={250} height={250}
          className="rounded-box" alt="beverage-2"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/beverage-4.webp"} width={250} height={250}
          className="rounded-box" alt="beverage-4"
        />
      </div>
     
    </div>
  );
}
