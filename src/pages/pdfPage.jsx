import React from 'react';

const Pdf = () => {
  const handleOpenPDF = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#112D1A]">
      <div className="bg-white text-black rounded-2xl p-8 shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">View Your Resume</h2>
        <p className="mb-6">Click the button below to view the PDF file.</p>
        <button
          onClick={handleOpenPDF}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Open PDF
        </button>
      </div>
    </div>
  );
};

export default Pdf;
