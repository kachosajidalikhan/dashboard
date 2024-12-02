import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement, PointElement,
    CategoryScale, LinearScale, ArcElement, Tooltip, Legend
} from "chart.js";

ChartJS.register(LineElement, PointElement,
    CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const lineChartData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "Weekly Room Bookings",
                data: [10, 15, 25, 35, 20, 30, 40], // Example room booking numbers
                borderColor: "#007BFF", // Changed color for better representation
                tension: 0.3,
                fill: true,
                backgroundColor: "rgba(0, 123, 255, 0.1)", // Updated for a blueish theme
            },
        ],
    };

    const doughnutChartData = {
        labels: ["Single Rooms", "Double Rooms", "Suites"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
                hoverBackgroundColor: ["#43A047", "#FFB300", "#E53935"],
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-700">Good Morning SunGum!</h3>
                    <ul className="text-sm text-gray-600">
                        <li>Dashboard</li>
                    </ul>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-xl font-bold text-green-500">36</h3>
                        <p className="text-sm text-gray-600">Total Rooms</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-xl font-bold text-green-500">10</h3>
                        <p className="text-sm text-gray-600">Available Rooms</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-xl font-bold text-green-500">138</h3>
                        <p className="text-sm text-gray-600">Total Events Booking</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-xl font-bold text-green-500">$360400/year</h3>
                        <p className="text-sm text-gray-600">Collections</p>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="h-fit bg-white shadow-md rounded-lg p-4">
                        <h4 className="text-lg font-bold text-gray-700 mb-4">Visitors</h4>
                        <Line data={lineChartData} />
                    </div>
                    <div className="h-fit bg-white shadow-md rounded-lg p-4">
                        <h4 className="text-lg font-bold text-gray-700 mb-4">Rooms Booked</h4>
                        <Doughnut className="h-60" data={doughnutChartData} />
                    </div>
                </div>

                {/* Booking Table */}
                <div className="mt-6 bg-white shadow-md rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-gray-700">Recent Rooms Booking</h4>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
                            View All
                        </button>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b p-2">Booking ID</th>
                                <th className="border-b p-2">Name</th>
                                <th className="border-b p-2">Email</th>
                                <th className="border-b p-2">Aadhar Number</th>
                                <th className="border-b p-2">Room Type</th>
                                <th className="border-b p-2">Number</th>
                                <th className="border-b p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-b p-2">BKG-0001</td>
                                <td className="border-b p-2">Tommy Bernal</td>
                                <td className="border-b p-2">[email&nbsp;protected]</td>
                                <td className="border-b p-2">12414786454545</td>
                                <td className="border-b p-2">Double</td>
                                <td className="border-b p-2">631-254-6480</td>
                                <td className="border-b p-2">
                                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                                        INACTIVE
                                    </span>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>


                <div className="flex flex-row justify-center mt-6 bg-white shadow-md rounded-lg p-4">
                    <div className="w-[50%] mt-2 bg-white shadow-md rounded-lg p-2">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg font-bold text-gray-700">Recent Income</h4>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
                                View All
                            </button>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b p-2">Income ID</th>
                                    <th className="border-b p-2">Vocher Name</th>
                                    <th className="border-b p-2">Total Amount</th>
                                    <th className="border-b p-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b p-2">BKG-0001</td>
                                    <td className="border-b p-2">Room Rent</td>
                                    <td className="border-b p-2">$10,000</td>
                                    <td className="border-b p-2">12/02/2024</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-[50%] mt-2 ml-4 bg-white shadow-md rounded-lg p-2">
                    <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg font-bold text-gray-700">Recent Expence</h4>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
                                View All
                            </button>
                        </div>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b p-2">Expence ID</th>
                                    <th className="border-b p-2">Vocher Name</th>
                                    <th className="border-b p-2">Total Amount</th>
                                    <th className="border-b p-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b p-2">ID-0001</td>
                                    <td className="border-b p-2">Car Rent</td>
                                    <td className="border-b p-2">$10,000</td>
                                    <td className="border-b p-2">12/02/2024</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
