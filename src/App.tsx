import React, { useState } from 'react';
import { Header } from './components/Header';
import { CameraButton } from './components/CameraButton';
import { ImagePreview } from './components/ImagePreview';
import { LoadingSpinner } from './components/LoadingSpinner';
import { DiseaseDetails } from './components/DiseaseDetails';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [detectedDisease, setDetectedDisease] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageCapture = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    analyzeImage();
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    // Simulate disease detection
    setTimeout(() => {
      const diseases = ['Leaf Blight', 'Powdery Mildew'];
      setDetectedDisease(diseases[Math.floor(Math.random() * diseases.length)]);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Header />
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <CameraButton onImageCapture={handleImageCapture} />
          
          {selectedImage && <ImagePreview imageUrl={selectedImage} />}
          
          {isAnalyzing && <LoadingSpinner />}
          
          {detectedDisease && <DiseaseDetails disease={detectedDisease} />}
        </div>
      </div>
    </div>
  );
}

export default App;