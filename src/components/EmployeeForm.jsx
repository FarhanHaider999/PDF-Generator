import React from "react";
import { Calendar, Trash2 } from "lucide-react";

const EmployeeForm = ({ data, onChange, onClear }) => {
  const departmentOptions = [
    { value: "", label: "Select Department / اختر القسم" },
    { value: "HR", label: "Human Resources / الموارد البشرية" },
    { value: "Engineering", label: "Engineering / الهندسة" },
    { value: "Marketing", label: "Marketing / التسويق" },
    { value: "Finance", label: "Finance / المالية" },
    { value: "Operations", label: "Operations / العمليات" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        PDF Generator
      </h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name / الاسم
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department / القسم
          </label>
          <select
            value={data.department}
            onChange={(e) => onChange("department", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {departmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role / الدور
          </label>
          <input
            type="text"
            value={data.role}
            onChange={(e) => onChange("role", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Joining Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Joining Date / تاريخ الانضمام
          </label>
          <div className="relative">
            <input
              type="date"
              value={data.joiningDate}
              onChange={(e) => onChange("joiningDate", e.target.value)}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes / ملاحظات
          </label>
          <textarea
            value={data.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            placeholder="Add any relevant notes here... / أضف أي ملاحظات ذات صلة هنا..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Clear Button */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onClear}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            Clear / مسح
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
