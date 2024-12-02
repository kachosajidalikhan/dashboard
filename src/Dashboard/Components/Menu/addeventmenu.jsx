import React, { useState } from "react";

const AddEventMenu = ({ addNewEventMenu }) => {
  const [menuName, setMenuName] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState("");
  const [courses, setCourses] = useState([{ courseName: "", items: [""] }]);

  const handleAddCourse = () => {
    setCourses([...courses, { courseName: "", items: [""] }]);
  };

  const handleAddItem = (courseIndex) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex].items.push("");
    setCourses(updatedCourses);
  };

  const handleChangeCourse = (courseIndex, key, value) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex][key] = value;
    setCourses(updatedCourses);
  };

  const handleChangeItem = (courseIndex, itemIndex, value) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex].items[itemIndex] = value;
    setCourses(updatedCourses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEventMenu = { id: Date.now(), name: menuName, pricePerPerson, courses };
    addNewEventMenu(newEventMenu);
    // Reset form
    setMenuName("");
    setPricePerPerson("");
    setCourses([{ courseName: "", items: [""] }]);
  };

  return (
    <div className="page-wrapper bg-gray-100 min-h-screen">
      <div className="content container mx-auto px-4 py-6">
        <h4 className="text-lg font-semibold mb-6">Add Event Menu</h4>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Menu Name</label>
            <input
              type="text"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              placeholder="Enter menu name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price Per Person</label>
            <input
              type="number"
              value={pricePerPerson}
              onChange={(e) => setPricePerPerson(e.target.value)}
              placeholder="Enter price per person"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          {courses.map((course, courseIndex) => (
            <div key={courseIndex} className="mb-6">
              <label className="block text-sm font-medium mb-1">Course Name</label>
              <input
                type="text"
                value={course.courseName}
                onChange={(e) =>
                  handleChangeCourse(courseIndex, "courseName", e.target.value)
                }
                placeholder="Enter course name"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <h6 className="font-semibold mb-2">Items</h6>
              {course.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-4 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      handleChangeItem(courseIndex, itemIndex, e.target.value)
                    }
                    placeholder={`Item ${itemIndex + 1}`}
                    className="flex-1 p-2 border rounded"
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddItem(courseIndex)}
                className="btn bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Add Item
              </button>
            </div>
          ))}
          
          <div className="flex gap-4 flex-row">
          <button
            type="button"
            onClick={handleAddCourse}
            className="btn bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
            Add Course
          </button>
          <button
            type="submit"
            className="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
            Save Event Menu
          </button>
              </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventMenu;
