const Menupage = () => {
  return (
    <div>
      <div className=" sm:mx-2 md:mx-4 mt-4">
        <div role="tablist" className=" tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Recommended"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-svh "
          >
            {/* grid of items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2px mt-5">
              {/* Item 1 */}
              <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
                  foodType
                </span>
                <img
                  className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt=""
                />
                <div className="flex flex-col items-center my-3 space-y-2">
                  <h1 className="text-gray-900 poppins text-lg">title</h1>
                  <p className="text-gray-500 poppins text-sm text-center">
                    description
                  </p>
                  <h2 className="text-gray-900 poppins text-2xl font-bold">
                    $price
                  </h2>
                  <label
                    htmlFor="my_modal_6"
                    className="btn bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                  >
                    Order Now
                  </label>

                  <input className="modal-toggle" />
                  <div className="modal" role="dialog">
                    //modal
                    <div className="modal-box">
                      <img
                        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt=""
                      />
                      <h1 className="text-gray-900 poppins text-xl font-bold ">
                        title
                      </h1>
                      <p className="text-gray-500 poppins text-sm text-center">
                        description
                      </p>

                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Red pill</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Blue pill</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                          />
                        </label>
                      </div>

                      <h2 className="text-gray-700 poppins text-xl font-bold ">
                        $price
                      </h2>
                      <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">
                          Add To Cart
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
                  foodType
                </span>
                <img
                  className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt=""
                />
                <div className="flex flex-col items-center my-3 space-y-2">
                  <h1 className="text-gray-900 poppins text-lg">title</h1>
                  <p className="text-gray-500 poppins text-sm text-center">
                    description
                  </p>
                  <h2 className="text-gray-900 poppins text-2xl font-bold">
                    $price
                  </h2>
                  <label
                    htmlFor="my_modal_6"
                    className="btn bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                  >
                    Order Now
                  </label>
                  <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    //modal
                    <div className="modal-box">
                      <img
                        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt=""
                      />
                      <h1 className="text-gray-900 poppins text-lg">title</h1>
                      <p className="text-gray-500 poppins text-sm text-center">
                        description
                      </p>

                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Red pill</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Blue pill</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                          />
                        </label>
                      </div>

                      <h2 className="text-gray-900 poppins text-2xl font-bold justify-self-end">
                        $price
                      </h2>
                      <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">
                          Add To Cart
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
                  foodType
                </span>
                <img
                  className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt=""
                />
                <div className="flex flex-col items-center my-3 space-y-2">
                  <h1 className="text-gray-900 poppins text-lg">title</h1>
                  <p className="text-gray-500 poppins text-sm text-center">
                    description
                  </p>
                  <h2 className="text-gray-900 poppins text-2xl font-bold">
                    $price
                  </h2>
                  <label
                    htmlFor="my_modal_6"
                    className="btn bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                  >
                    Order Now
                  </label>
                  <input
                    type="checkbox"
                    id="my_modal_6"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    //modal
                    <div className="modal-box">
                      <img
                        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt=""
                      />
                      <h1 className="text-gray-900 poppins text-lg">title</h1>
                      <p className="text-gray-500 poppins text-sm text-center">
                        description
                      </p>

                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Red pill</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Blue pill</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                          />
                        </label>
                      </div>

                      <h2 className="text-gray-900 poppins text-2xl font-bold justify-self-end">
                        $price
                      </h2>
                      <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">
                          Add To Cart
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* {foods.filter((item) => menuTab === item.foodType).map(item => (
                            loading ? <Skeleton key={item._id} /> : <FoodItem key={item._id} {...item} />
                        ))} */}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Beverages"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-svh"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Bakery"
          />
          <div
            role="tabpanel"
            className=" tab-content bg-base-100 border-base-300 rounded-box p-6 h-svh"
          >
            Tab content 3
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Appetizers"
          />
          <div
            role="tabpanel"
            className=" tab-content bg-base-100 border-base-300 rounded-box p-6 h-svh"
          >
            Tab content 5
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="MainDish "
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-svh"
          >
            Tab content 6
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menupage;

{
  /* menu */
}
//   <div className="grid grid-cols-2 gap-2 ml-10"></div>
