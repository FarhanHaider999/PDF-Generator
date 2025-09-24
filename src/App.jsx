import React, { useState } from "react";
import { FileDown } from "lucide-react";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import EmployeeForm from "./components/EmployeeForm";
import EmployeePDF from "./components/EmployeePDF";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    role: "",
    joiningDate: "",
    notes: "",
  });

  const [showDownload, setShowDownload] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      name: "",
      department: "",
      role: "",
      joiningDate: "",
      notes: "",
    });
    setShowDownload(false);
  };

  const handleGeneratePDF = async () => {
    setShowDownload(true);

    // open in new tab
    const blob = await pdf(<EmployeePDF data={formData} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  const isFormValid =
    formData.name.trim() && formData.department && formData.role.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Employee Form */}
        <EmployeeForm
          data={formData}
          onChange={handleInputChange}
          onClear={handleClear}
        />

        {/* Action Buttons */}
        <div className="flex flex-col items-center mt-6 space-y-4">
          {/* Generate PDF Button */}
          <button
            onClick={handleGeneratePDF}
            disabled={!isFormValid}
            className={`px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2 ${
              isFormValid
                ? "bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            <FileDown className="h-4 w-4" />
            Generate PDF / إنشاء PDF
          </button>

          {/* PDF Download Link */}
          {showDownload && isFormValid && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center w-full max-w-md">
              <p className="text-green-800 mb-3 font-medium">
                PDF ready for download! / PDF جاهز للتحميل!
              </p>
              <PDFDownloadLink
                document={<EmployeePDF data={formData} />}
                fileName={`employee-report-${formData.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}.pdf`}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {({ loading }) =>
                  loading ? (
                    "Loading document..."
                  ) : (
                    <>
                      <FileDown className="h-4 w-4" />
                      Download PDF / تحميل PDF
                    </>
                  )
                }
              </PDFDownloadLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
