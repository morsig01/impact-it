"use client";
import React, { useState } from "react";
import Image from "next/image";
import employeesData from "@/data/employees.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  hireDate: string;
  salary: number;
}

export default function EmployeesPage() {
  const [employees] = useState<Employee[]>(employeesData.employees);

  const NextArrow = (props: any) => (
    <div
      className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={props.onClick}
    >
      <div className="bg-neutral-800 text-white p-6 rounded-full hover:bg-neutral-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );

  const PrevArrow = (props: any) => (
    <div
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={props.onClick}
    >
      <div className="bg-neutral-800 text-white p-6 rounded-full hover:bg-neutral-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full h-screen flex items-center justify-center text-black">
      <div className="w-[90%] flex flex-col items-center" style={{ marginTop: '-10%' }}>
        <h1 className="text-6xl font-bold mb-16">Our Team</h1>
        <div className="w-full">
          <Slider {...settings}>
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="px-2 py-2 flex justify-center"
              >
                <div className="p-4 bg-white shadow rounded-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center h-96">
                  <div className="relative w-52 h-52 mb-3 bg-gray-100 rounded-full overflow-hidden">
                    <Image
                      src={`/profile-placeholder.jpg`}
                      alt={`${employee.firstName} ${employee.lastName}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold mb-2">{`${employee.firstName} ${employee.lastName}`}</h2>
                  <div className="space-y-1 text-gray-600 text-sm">
                    <p>
                      <span className="font-semibold">Position:</span>{" "}
                      {employee.position}
                    </p>
                    <p>
                      <span className="font-semibold">Department:</span>{" "}
                      {employee.department}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
