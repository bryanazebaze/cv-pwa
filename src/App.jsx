import React, { useState, useEffect, useContext, createContext } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles/global.css'; // Importe les styles globaux

// Crée un Contexte pour le thème
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte facilement
export const useTheme = () => useContext(ThemeContext);

// Composant pour le bouton de basculement du thème
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        Basculer en mode {theme === 'light' ? 'Nuit' : 'Jour'}
      </button>
    </div>
  );
}


function App() {
  // Initialise le thème à partir du localStorage ou par défaut 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Met à jour la classe du body et le localStorage lorsque le thème change
  useEffect(() => {
    document.body.className = theme + '-mode'; // Ajoute la classe 'light-mode' ou 'dark-mode' au body
    localStorage.setItem('theme', theme); // Sauvegarde la préférence dans localStorage
  }, [theme]); // Dépendance sur la variable theme

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Fournit le thème et la fonction de basculement à toute l'application
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
       <div className="app-container">
         <Sidebar />
         <MainContent />
         {/* Place le ThemeSwitcher où tu veux qu'il apparaisse, par exemple dans la Sidebar */}
         {/* On va le mettre dans la Sidebar pour l'instant */}
       </div>
    </ThemeContext.Provider>
  );
}

export default App;