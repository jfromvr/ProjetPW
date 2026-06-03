# CRIOT — Version Bootstrap

Mini-projet web universitaire respectant le cahier des charges :
- **JavaScript (ES6+)** + **ReactJS**
- **React Router** pour la navigation
- **Bootstrap 5** pour le style
- Gestion d'état avec `useState` / `useEffect`
- Aucune dépendance backend (données statiques)

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Build de production

```bash
npm run build
```

## Structure

```
src/
├── assets/         # Images (logo, membres)
├── components/     # Navbar, Footer
├── pages/          # Home, About, Events, Team, Join
├── App.jsx         # Routes
└── main.jsx        # Point d'entrée
```
