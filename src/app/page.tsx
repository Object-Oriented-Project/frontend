export default function Home() {
  return <section className="relative"> 
  {/* child element will be positioned relative to this container */}

  {/* Illustration behind hero content */}
  {/* transform -translate-x-1/2 = horizontal centered by translating it back 50% of its own width
  bottom-0 = positioned at the bottom of the container */}
  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#EAEAEA" offset="77.402%" />
          <stop stopColor="#DFDFDF" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="url(#illustration-01)" fillRule="evenodd">
        <circle cx="1232" cy="128" r="128" />
        <circle cx="155" cy="443" r="64" />
      </g>
    </svg>
  </div>
  {/* max-w-6xl mx-auto px-4 sm:px-6, which ensures the content is centered and constrained to a maximum width of 6xl (6 times the font size). */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    {/* Hero content */}
    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
      {/* Section header */}
      <div className="text-center pb-12 md:pb-16">

          {/* font-extrabold makes the text bold.
    leading-tighter tightens the line height.
    tracking-tighter tightens the letter spacing. */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Discover Your Favorites  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">Now</span></h1>
        <div className="max-w-3xl mx-auto">
          
          <input type="text" placeholder="Enter your name" className="input input-bordered input-info w-full max-w-xs" />
          <button className="btn btn-square btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
        </div>
      </div>


    </div>

  </div>
</section>
}