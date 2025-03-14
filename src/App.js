import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ItineraryPDF from "./components/PDF/ItineraryPDF";
import sampleItinerary from "./data/sampleItinerary.json";

const App = () => {
  const [itinerary] = useState(sampleItinerary);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🗺 Itinerary PDF Generator</h1>

      {/* ✅ Preview Button */}
      <button
        onClick={() => setShowPreview(!showPreview)}
        style={{
          backgroundColor: "#17a2b8",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {showPreview ? "❌ Hide Preview" : "👀 Preview PDF"}
      </button>

      {/* ✅ Live PDF Preview (Shown when "Preview PDF" is clicked) */}
      {showPreview && (
        <PDFViewer style={{ width: "80%", height: "600px", border: "1px solid #ddd", marginBottom: "20px" }}>
          <ItineraryPDF data={itinerary} />
        </PDFViewer>
      )}

      {/* ✅ Download PDF Button */}
      <PDFDownloadLink document={<ItineraryPDF data={itinerary} />} fileName="itinerary.pdf" style={{ textDecoration: "none" }}>
        {({ loading }) => (
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            {loading ? "Generating..." : "📥 Download PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
