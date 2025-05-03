import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Importe le plugin PWA

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Met à jour le service worker automatiquement
      includeAssets: ['favicon.svg', 'ma-photo.png', 'apple-touch-icon.png', 'pwa-maskable-icon-512x512.png'], // Inclure ta photo et les icônes PWA
      manifest: {
        name: 'Bryan CV', // <<< Ton Nom - Nom complet de l'application
        short_name: 'Bryan CV', // <<< Ton Nom - Nom court de l'application
        description: 'Mon CV en tant qu\'application web progressive', // Description de l'application
        theme_color: '#2c3e50', // Couleur de la barre d'adresse/thème (souvent la couleur de la sidebar)
        background_color: '#f4f4f4', // Couleur de fond au démarrage
        display: 'standalone', // Mode d'affichage (standalone ressemble à une app native)
        start_url: '/', // URL de démarrage de l'app
        icons: [
          // Tu auras besoin de générer ces icônes à partir de ta photo
          {
            src: '/avatar.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/avatar.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
             src: '/avatar.png', // Icône "maskable" pour s'adapter aux formes des OS
             sizes: '512x512',
             type: 'image/png',
             purpose: 'maskable'
          }
          // Ajoute d'autres tailles si tu veux
        ]
      }
    })
  ],
});