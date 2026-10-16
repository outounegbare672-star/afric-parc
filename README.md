# Afric-Parc

Marketplace de location de matériel BTP, construite avec React et Vite.

## Fonctionnalités

- Présentation Afric-Parc et catalogue d'engins
- Recherche par engin, ville ou loueur
- Filtres par catégorie
- Pages de connexion, d'inscription et tableau de bord

## Développement local

```bash
npm ci
npm run dev
```

## Vérification

```bash
npm run lint
npm run build
```

## Publication

Le site est publié sur GitHub Pages par le workflow `.github/workflows/deploy.yml` à chaque mise à jour de `main`. Le dépôt doit avoir GitHub Pages configuré avec la source **GitHub Actions**.

Render peut aussi déployer le site comme site statique à partir de `render.yaml`. Connectez le dépôt GitHub `outounegbare672-star/afric-parc` à Render et créez un Blueprint depuis ce fichier. Les mises à jour de la branche `main` seront déployées automatiquement.
