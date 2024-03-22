const Cart = ({ cart, remainingCreditHours, remainHours, totalPrice }) => {
  // console.log(remainingCreditHours)
  // console.log(cart);

  return (
    <div className="border-purple-300 border-2 px-5 rounded-md w-[700px] mx-auto">
      <div className="bg-white p-6 rounded-lg">
        <div>
          <h1 className="text-[#2F80ED] text-[18px] font-bold">
            Credit Hour Remaining <span>{remainHours}</span> hr{" "}
          </h1>
          <hr className="mt-4 text-[#1C1B1B] border-[1px]" />
        </div>
        <div>
          <h1 className="mt-2 text-[#1C1B1B] text-[20px] font-bold">
            Course Name
            <div>
              {cart?.map((c, idx) => (
                <div
                  className="flex justify-start items-center gap-3"
                  key={idx}
                >
                  <img className="w-8 h-8 rounded-full mt-2" src={c.image} alt="" />
                  <p className="text-[16px] font-medium">{c.course_title}</p>
                </div>
              ))}
            </div>
          </h1>
        </div>
        <hr className="mt-4 text-[#1C1B1B] border-[1px]" />
        <div className="mt-2">
          <h1 className="text-[#1C1B1B] font-medium text-[16px]">
            Total Credit Hour : <span> {remainingCreditHours}</span> hr
          </h1>
        </div>
        <hr className="mt-4 text-[#1C1B1B] border-[1px]" />
        <div className="mt-3">
          <h1 className="text-[#1C1B1B] font-semibold">
            Total Price : <span> {totalPrice} </span> USD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
