import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { addToLS, getStoredCart } from "./utilities/localStorage";

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    // console.log(courses.length)
    if (courses.length > 0) {
      const storedCart = getStoredCart();
      // console.log(storedCart);
      const savedCart = [];
      for (const id of storedCart) {
        // console.log(id);
        const course = courses.find((course) => course.id === id);
        // console.log(course)
        if (course) {
          savedCart.push(course);
        }
        // console.log(savedCart);
      }
      setCart(savedCart);
    }
  }, [courses]);

  // console.log(courses)
  const handleAddToCourse = (course) => {
    //  console.log(course)
    const existingCartItem = cart?.find((item) => item.id === course.id);
    if (existingCartItem) {
      alert("Course already exists");
    } else {
      const newCart = [...cart, course];
      // console.log(newCart)
      setCart(newCart);
      addToLS(course.id);
    }
  };
  // console.log(cart)

  const remainingCreditHours = cart?.reduce(
    (total, c) => total + c.credit_hour,
    0
  );
  // console.log(remainingCreditHours);
  const remainHours = Math.max(20 - remainingCreditHours, 0);

  const totalPrice = cart.reduce((total, c) => total + c.price, 0).toFixed(2);
  // console.log(totalPrice);

  return (
    <div>
      <Header />
      <div className="px-20 py-10">
        <Cart
          cart={cart}
          remainHours={remainHours}
          remainingCreditHours={remainingCreditHours}
          totalPrice={totalPrice}
        />
        <Courses courses={courses} handleAddToCourse={handleAddToCourse} />
      </div>
    </div>
  );
}

export default App;
