import JSZip from "jszip";
import { useState } from "react";

export default function PptViewer() {
  const [pptxData, setPptxData] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setPptxData(event.target.result);
    };
    reader.readAsArrayBuffer(file);
  };

  const renderSlides = () => {
    if (!pptxData) {
      return null;
    }

    const zip = new JSZip(pptxData);
    const slides = [];

    const zipObj = new Object(zip.files);
    console.log(Object(zipObj));
    // console.log(zip.files[0]);
    Object.keys(zipObj).forEach((relativePath, zipEntry) => {
      console.log(relativePath);
      if (relativePath.startsWith("ppt/slides/slide")) {
        const slideData = zipEntry.async("blob");
        slides.push(slideData);
      }

      return slides.map((slide, index) => (
        <div key={index} className={index === slideIndex ? "active" : ""}>
          <img src={URL.createObjectURL(slide)} />
        </div>
      ));
    });
  };

  const handlePreviousSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (slideIndex < renderSlides().length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div>
      <input type="file" accept=".pptx" onChange={handleFileUpload} />
      <div className="slides">{renderSlides()}</div>
      <button onClick={handlePreviousSlide}>Previous</button>
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
}
