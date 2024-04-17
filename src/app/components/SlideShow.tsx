import Image from "next/image";

export default function Slideshow() {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box"style={{ maxHeight: '450px' }}>
      <div className="carousel-item">
        <Image
          src={"/menu/bakery-3.webp"} width={200} height={200}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/food-3.webp"} width={200} height={200}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/food-7.webp"} width={200} height={200}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/beverage-2.webp"} width={200} height={200}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={"/menu/beverage-2.webp"} width={200} height={200}
          className="rounded-box" alt="bakery"
        />
      </div>
     
    </div>
  );
}
