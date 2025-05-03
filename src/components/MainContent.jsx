import React, { useRef } from 'react'; // Importe useRef
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

function MainContent() {
  // Crée une référence pour l'élément que l'on veut capturer en PDF
  const cvContentRef = useRef(null);

  const handleDownloadPdf = () => {
    const input = cvContentRef.current; // L'élément à convertir (le main-content)

    html2canvas(input, { scale: 2 }).then((canvas) => { // scale: 2 pour une meilleure résolution
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' portrait, 'mm' unités, 'a4' format
      const imgWidth = 210; // Largeur de l'A4 en mm
      const pageHeight = 297; // Hauteur de l'A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Gérer le cas où le contenu dépasse une page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('mon_cv_bryan.pdf'); // Nom du fichier PDF téléchargé
    });
  };

  return (
    <main className="main-content" ref={cvContentRef}> {/* Attache la référence ici */}
      {/* Bouton de téléchargement PDF */}
      <div className="pdf-download-container">
        <button onClick={handleDownloadPdf} className="download-pdf-button">
          Télécharger en PDF
        </button>
      </div>


      {/* Les sections du CV */}
      <About />
      <Education />
      <Experience />
      <Skills />
    </main>
  );
}

export default MainContent;