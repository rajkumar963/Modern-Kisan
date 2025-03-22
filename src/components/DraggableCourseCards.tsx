
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Move } from 'lucide-react';

type DraggableCourse = {
  id: string;
  title: string;
  icon: string;
  category: string;
};

const DraggableCourseCards = () => {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [courses, setCourses] = useState<DraggableCourse[]>([
    { id: '1', title: 'Kesar Saffron Cultivation', icon: '🌷', category: 'Specialty Crops' },
    { id: '2', title: 'Smart Irrigation Systems', icon: '💧', category: 'Smart Farming' },
    { id: '3', title: 'Organic Farming Techniques', icon: '🥦', category: 'Sustainable Farming' },
    { id: '4', title: 'AI & IoT in Agriculture', icon: '🌾', category: 'AgriTech' },
    { id: '5', title: 'Farm-to-Fork Models', icon: '🚜', category: 'Entrepreneurship' },
    { id: '6', title: 'Drone Mapping for Farms', icon: '🚁', category: 'Precision Farming' },
  ]);

  const handleDragStart = (index: number) => {
    dragItem.current = index;
    setIsDragging(true);
  };

  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const _courses = [...courses];
      const draggedItem = _courses[dragItem.current];
      // Remove the dragged item
      _courses.splice(dragItem.current, 1);
      // Insert it at the new position
      _courses.splice(dragOverItem.current, 0, draggedItem);
      
      setCourses(_courses);
    }
    
    dragItem.current = null;
    dragOverItem.current = null;
    setIsDragging(false);
  };

  return (
    <section id="personalized-learning" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-kisan-50 text-kisan-700 mb-4">Interactive Learning</span>
          <h2 className="section-title text-kisan-900">
            Create Your Learning Path
          </h2>
          <p className="section-subtitle">
            Drag and rearrange courses to create your personalized learning path based on your farming interests.
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Move size={16} />
            <span>Drag to reorder your preferred courses</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={cn(
                "glass-card p-4 rounded-xl cursor-grab active:cursor-grabbing transition-all duration-200",
                isDragging && dragItem.current === index ? "scale-105 shadow-lg opacity-70" : "",
              )}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{course.icon}</span>
                <div>
                  <h3 className="font-medium text-kisan-900">{course.title}</h3>
                  <p className="text-xs text-muted-foreground">{course.category}</p>
                </div>
                <div className="ml-auto text-muted-foreground">
                  <Move size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="btn-primary">
            Start Learning Path
          </button>
        </div>
      </div>
    </section>
  );
};

export default DraggableCourseCards;
