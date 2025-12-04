import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { loadPDF } from "./loadPDF";

export default function PDFReader({ pdfUrl }) {
  const [pages, setPages] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadPDF(pdfUrl).then(({ numPages, images }) => {
      setPages(images);
      setNumPages(numPages);
    });
  }, [pdfUrl]);

  if (!pages.length)
    return <div className="text-center py-6">Loading PDF...</div>;

  return (
    <div className="flex flex-col items-center w-full">
      <HTMLFlipBook
        width={500}
        height={700}
        showCover={true}
        onFlip={(e) => setCurrentPage(e.data + 1)} // <- Track page
        className="shadow-xl"
      >
        {pages.map((img, i) => (
          <div
            key={i}
            className="page bg-white flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Page ${i + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </HTMLFlipBook>

      {/* Footer Page counter */}
      <div className="mt-3 text-sm font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-lg shadow">
        Page {currentPage} / {numPages}
      </div>
    </div>
  );
}
