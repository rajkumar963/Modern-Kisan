import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

interface CourseCardProps {
  title: string;
  description: string;
  hours: string;
  schedule: string;
  image: string;
}

const courses: CourseCardProps[] = [
  {
    title: "Smart Agriculture and IoT",
    description: "Learn about IoT sensors, automation, and AI in modern farming.",
    hours: "40 Hrs of Live Classes",
    schedule: "Weekday Evenings",
    image: "https://img.freepik.com/free-vector/agriculture-iot-concept_23-2148862517.jpg",
  },
  {
    title: "Hydroponics and Vertical Farming",
    description: "Master soil-less farming techniques for sustainable agriculture.",
    hours: "30 Hrs of Live Classes",
    schedule: "Weekend Classes",
    image: "https://img.freepik.com/free-vector/hydroponics-system-illustration_23-2148774198.jpg",
  },
  {
    title: "Precision Farming with AI & Drones",
    description: "Use AI and drones for precision agriculture and crop monitoring.",
    hours: "50 Hrs of Live Classes",
    schedule: "Weekday Evenings",
    image: "https://img.freepik.com/free-vector/drone-farming-technology_23-2148862561.jpg",
  },
  {
    title: "Organic Farming and Sustainable Practices",
    description: "Learn eco-friendly farming techniques and organic certification.",
    hours: "35 Hrs of Live Classes",
    schedule: "Weekend Classes",
    image: "https://img.freepik.com/free-vector/organic-farming-illustration_23-2148862531.jpg",
  },
  {
    title: "AgriTech Startups & Business Development",
    description: "Build your own AgriTech startup and learn market trends.",
    hours: "45 Hrs of Live Classes",
    schedule: "Weekday Evenings",
    image: "https://img.freepik.com/free-vector/startup-business-concept_23-2148871112.jpg",
  },
];

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  hours,
  schedule,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full hover:shadow-xl transition flex flex-col mt-[50px]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center text-gray-700">
            <FaClock className="text-blue-600 mr-2" />
            {hours}
          </p>
          <p className="flex items-center text-gray-700">
            <FaCalendarAlt className="text-blue-600 mr-2" />
            {schedule}
          </p>
        </div>
      </div>
      <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-6">
        View Course Details
      </button>
    </div>
  );
};

const AllCourses: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 mt-12">
      <h1 className="text-4xl font-bold mb-2 text-primary text-center">Modern Farming Courses</h1>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
