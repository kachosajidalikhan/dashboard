import React, { useState } from "react";
import { IncomeTable } from "./incometable";
import { IncomeChart } from "./incomechart";

export default function IncomeReport() {
    const [activeTab, setActiveTab] = useState("table");
    const weeklyIncome = 12500;
    const monthlyIncome = 52000;
    const yearlyIncome = 624000;

    return (
        <div className="page-wrapper bg-gray-100 min-h-screen">
            <div className="content container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold mb-6">Income Report</h1>

                {/* Income Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-3">
                    {[
                        { title: "Weekly Income", amount: weeklyIncome, growth: "+10% from last week" },
                        { title: "Monthly Income", amount: monthlyIncome, growth: "+5% from last month" },
                        { title: "Yearly Income", amount: yearlyIncome, growth: "+15% from last year" },
                    ].map((card, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <div className="">
                                <h2 className="text-sm text-gray-600">{card.title}</h2>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-green-500">${card.amount.toLocaleString()}</div>
                                <p className="text-xs text-gray-500">{card.growth}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="bg-white p-2">
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setActiveTab("table")}
                            className={`bg-green-500 text-white px-4 py-2 focus:outline-none rounded-lg shadow-md ${activeTab === "table" ? "border-b-2 border-green-500 bg-green-600" : "text-gray-500"
                                }`}
                        >
                            Table View
                        </button>
                        <button
                            onClick={() => setActiveTab("chart")}
                            className={`bg-green-500 text-white px-4 py-2 focus:outline-none rounded-lg shadow-md ${activeTab === "chart" ? "border-b-2 border-green-500 bg-green-600" : "text-gray-500"
                                }`}
                        >
                            Chart View
                        </button>
                    </div>
                    {activeTab === "table" && (
                        <div className="space-y-4">
                            <IncomeTable />
                        </div>
                    )}
                    {activeTab === "chart" && (
                        <div className="space-y-4">
                            <IncomeChart />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
