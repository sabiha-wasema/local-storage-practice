import Course from "../Course/Course";


const Courses = ({courses,handleAddToCourse}) => {
  return (
    <div className="mt-10">
      <div className="grid gri-cols-1 md:grid-cols-3 gap-10 px-20">
        {courses?.map((course, idx) => (
          <Course key={idx} course={course} handleAddToCourse={handleAddToCourse} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
