import React from 'react';
import maPhoto from '../assets/avatar.png'; // Assure-toi que le chemin est correct
import { useTheme } from '../App'; // Importe le hook useTheme depuis App.jsx
// Si tu utilises des icônes (ex: pour email, téléphone), tu peux les importer ici
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Exemple avec react-icons

function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div className="theme-switcher">
        <button onClick={toggleTheme} className="theme-toggle-button">
           {/* Tu peux utiliser des icônes ici, par exemple une lune et un soleil */}
          Basculer en mode {theme === 'light' ? 'Nuit' : 'Jour'}
        </button>
      </div>
    );
  }

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-photo-container">
        <img src={maPhoto} alt="Ma Photo" className="sidebar-photo" />
      </div>

      <h2 className="sidebar-name">Ton Nom Complet</h2>
      <p className="sidebar-title">Ton Titre / Profession</p>

      <div className="sidebar-contact">
        <h3>Contact</h3>
        {/* Utilise des liens ou simplement du texte */}
        <p>
          {/* Exemple avec icône si tu utilises react-icons */}
          {/* <FaEnvelope /> */}
          Email: <a href="mailto:ton.email@exemple.com">ton.email@exemple.com</a>
        </p>
        <p>
          {/* <FaPhone /> */}
          Téléphone: Ton Numéro de Téléphone
        </p>
        <p>
          {/* <FaMapMarkerAlt /> */}
          Localisation: Ta Ville, Ton Pays
        </p>
        {/* Ajoute d'autres informations comme LinkedIn, GitHub si pertinent */}
        <p>LinkedIn: <a href="URL_LinkedIn" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a></p>
        <p>GitHub: <a href="URL_GitHub" target="_blank" rel="noopener noreferrer">Profil GitHub</a></p>
      </div>

      {/* Ici viendra le bouton pour le mode Jour/Nuit */}
       {/* <div className="theme-switcher">
          <button>Changer de thème</button>
       </div> */}
       <ThemeSwitcher />
    </aside>
  );
}

export default Sidebar;