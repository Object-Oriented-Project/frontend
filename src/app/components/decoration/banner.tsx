import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  
  const banners = ["banner-1", "banner-2", "banner-3", "banner-4", "banner-5"];

  return (
    <div className="relative">
      <div className="carousel">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <Image
              src={`/banner/${banner}.webp`}
              className="w-full"
              alt="banner"
              width={1920}
              height={1080}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link
                href={`#slide${index === 0 ? banners.length : index}`}
                passHref
              >
                <span className="btn btn-circle">❮</span>
              </Link>
              <Link
                href={`#slide${index === banners.length - 1 ? 1 : index + 2}`}
                passHref
              >
                <span className="btn btn-circle">❯</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
