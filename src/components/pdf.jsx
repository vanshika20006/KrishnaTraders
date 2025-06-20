import React from 'react';

const PDFSection = () => {
  const handleOpenPDF = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div onClick={handleOpenPDF} style={{ cursor: 'pointer', color: 'blue' }}>
      Click here to view PDF
    </div>
  );
};

export default PDFSection;
