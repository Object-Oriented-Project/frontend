import Image from "next/image";
import Bakery1 from "../../menu/bakery-1.webp"
import Bakery3 from "../../menu/bakery-3.webp"
import Food3 from "../../menu/food-3.webp"
import Food7 from "../../menu/food-7.webp"
import Beverage2 from "../../menu/beverage-2.webp"
export default function Slideshow() {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box"style={{ maxHeight: '450px' }}>
      <div className="carousel-item">
        <Image
          src={Bakery1}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={Food3}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={Food7}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={Bakery3}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={Beverage2}
          className="rounded-box" alt="bakery"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          className="rounded-box"
        />
      </div>
    </div>
  );
}
