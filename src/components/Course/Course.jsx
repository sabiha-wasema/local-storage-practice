const Course = ({ course,handleAddToCourse }) => {
  // console.log(course);

  const { course_title, id, image, credit_hour ,price} = course;


  return (
    <div className="py-4 border-2 border-green-300 rounded-lg flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-[20px] font-bold">{course_title}</h1>

        <div className="flex justify-center items-center mt-2">
          <img className=" rounded-lg" src={image} alt="" />
        </div>
        <p className="font-semibold mt-2 text-[16px]">Credit Hour: {credit_hour} hr</p>
        <p className="font-semibold mt-2 text-[16px]">Price : {price} USD</p>
        <button
        onClick={() =>handleAddToCourse(course)}
         className="py-1 px-8 text-white bg-red-400 mt-2 rounded-md">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Course;
