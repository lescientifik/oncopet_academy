# Docusaurus Site Management Skill

Ce skill vous aide à gérer un site Docusaurus : scaffolding initial et gestion du serveur de développement.

## Instructions

Quand l'utilisateur demande de :
1. **Créer/scaffolder un nouveau projet Docusaurus**
2. **Démarrer le serveur de développement**
3. **Arrêter le serveur de développement**

Suivez les étapes ci-dessous selon la demande.

---

## 1. Scaffolding d'un nouveau projet Docusaurus

### Commande de base
```bash
npx create-docusaurus@latest <nom-du-projet> classic
```

### Avec TypeScript
```bash
npx create-docusaurus@latest <nom-du-projet> classic --typescript
```

### Étapes détaillées

1. **Vérifier les prérequis** :
   - Node.js version 18.0 ou supérieure recommandée
   - npm ou yarn installé

2. **Créer le projet** :
   ```bash
   npx create-docusaurus@latest <nom-du-projet> classic
   ```

   Remplacez `<nom-du-projet>` par le nom souhaité (ex: `tep-oncology-site`)

3. **Structure créée** :
   ```
   <nom-du-projet>/
   ├── blog/              # Articles de blog
   ├── docs/              # Documentation
   ├── src/
   │   ├── components/    # Composants React
   │   ├── css/          # Styles CSS
   │   └── pages/        # Pages statiques
   ├── static/           # Assets statiques (images, etc.)
   ├── docusaurus.config.js  # Configuration principale
   ├── package.json
   └── sidebars.js       # Configuration de la sidebar
   ```

4. **Installer les dépendances** :
   ```bash
   cd <nom-du-projet>
   npm install
   ```

---

## 2. Démarrer le serveur de développement

### Commande de base
```bash
npm start
```

### Avec options personnalisées

**Port personnalisé** :
```bash
npm start -- --port 9000
```

**Exposer sur le réseau** :
```bash
npm start -- --host 0.0.0.0
```

**Port + Host** :
```bash
npm start -- --port 9000 --host 0.0.0.0
```

### Comportement
- Le site sera accessible à `http://localhost:3000` (ou le port spécifié)
- Le serveur recharge automatiquement à chaque modification
- Le hot-reload est activé par défaut

### Utilisation avec run_in_background
Pour démarrer le serveur en arrière-plan (utile pour travailler en parallèle) :
```bash
npm start
```
avec le paramètre `run_in_background: true` dans l'outil Bash.

---

## 3. Arrêter le serveur de développement

### Si démarré en mode normal
- Appuyez sur `Ctrl+C` dans le terminal

### Si démarré en arrière-plan
Utilisez l'outil `KillShell` avec le `shell_id` correspondant.

Ou utilisez :
```bash
pkill -f "docusaurus start"
```

Ou trouvez et tuez le processus :
```bash
lsof -ti:3000 | xargs kill -9
```
(Remplacez 3000 par votre port si différent)

---

## Commandes supplémentaires utiles

### Build de production
```bash
npm run build
```

### Servir le build de production localement
```bash
npm run serve
```

### Vider le cache
```bash
npm run clear
```

### Déploiement
```bash
npm run deploy
```

---

## Workflow typique

1. **Première fois** :
   ```bash
   npx create-docusaurus@latest mon-site classic
   cd mon-site
   npm install
   npm start
   ```

2. **Développement quotidien** :
   ```bash
   cd mon-site
   npm start
   # Faire des modifications
   # Ctrl+C pour arrêter
   ```

3. **Build et déploiement** :
   ```bash
   npm run build
   npm run serve  # Test local du build
   npm run deploy  # Déploiement
   ```

---

## Conseils

- **Hot reload** : Les modifications sont reflétées instantanément, pas besoin de redémarrer
- **Configuration** : Modifiez `docusaurus.config.js` pour personnaliser le site
- **Documentation** : Ajoutez des fichiers Markdown dans `docs/`
- **Blog** : Ajoutez des articles dans `blog/`
- **Pages custom** : Créez des composants React dans `src/pages/`

---

## En cas d'erreur

1. **Port déjà utilisé** :
   ```bash
   npm start -- --port 3001
   ```

2. **Problèmes de cache** :
   ```bash
   npm run clear
   rm -rf node_modules .docusaurus
   npm install
   ```

3. **Dépendances manquantes** :
   ```bash
   npm install
   ```
