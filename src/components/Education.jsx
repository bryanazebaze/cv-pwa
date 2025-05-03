import React from 'react';

function Education() {
  const educationList = [
    {
      degree: "Nom du Diplôme 1",
      institution: "Nom de l'Établissement 1",
      dates: "Année Début - Année Fin"
    },
    {
      degree: "Nom du Diplôme 2",
      institution: "Nom de l'Établissement 2",
      dates: "Année"
    }
    // ... ajoute d'autres formations
  ];

  return (
    <section id="education" className="cv-section">
      <h2>Diplômes et Formations</h2>
      <ul>
        {educationList.map((item, index) => (
          <li key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p>{item.dates}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;