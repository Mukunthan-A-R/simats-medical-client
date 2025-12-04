import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min.mjs";

export async function loadPDF(pdfUrl) {
  const pdf = await pdfjsLib.getDocument(pdfUrl).promise;

  const numPages = pdf.numPages;

  // read metadata
  const metaData = await pdf.getMetadata().catch(() => ({}));
  const info = metaData?.info || {};
  const meta = {
    title: info.Title || "",
    author: info.Author || "",
    producer: info.Producer || "",
    creator: info.Creator || "",
    createdAt: info.CreationDate || "",
  };

  // convert all pages to images
  const images = [];

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1.8 });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport }).promise;

    images.push(canvas.toDataURL("image/png"));
  }

  return { numPages, meta, images };
}
