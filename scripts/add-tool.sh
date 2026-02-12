#!/usr/bin/env bash
set -euo pipefail

# add-tool.sh — Intègre un composant React (TSX) comme outil interactif dans le site Docusaurus.
#
# Usage:
#   bash scripts/add-tool.sh <fichier.tsx> <slug> "Titre de la page" "Description SEO"
#
# Exemple:
#   bash scripts/add-tool.sh mon-outil.tsx calculateur-dose "Calculateur de dose" "Calcul d'activité injectée selon le poids"
#
# Résultat:
#   - Composant copié dans src/components/outils/MonOutil.tsx (PascalCase)
#   - Page wrapper créée dans src/pages/outils/<slug>.tsx
#   - URL résultante: /outils/<slug>

SITE_DIR="tep-oncology-site"

usage() {
  echo "Usage: bash scripts/add-tool.sh <fichier.tsx> <slug> \"Titre\" \"Description\""
  echo ""
  echo "Arguments:"
  echo "  fichier.tsx    Fichier source TSX (export default attendu)"
  echo "  slug           Slug URL (ex: assistant-tep-fdg)"
  echo "  Titre          Titre affiché dans <Layout>"
  echo "  Description    Description SEO pour les métadonnées"
  echo ""
  echo "Exemple:"
  echo "  bash scripts/add-tool.sh mon-outil.tsx calculateur-dose \"Calculateur\" \"Description\""
  exit 1
}

if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  usage
fi

if [[ $# -lt 4 ]]; then
  echo "Erreur: 4 arguments requis."
  usage
fi

SRC_FILE="$1"
SLUG="$2"
TITLE="$3"
DESC="$4"

if [[ ! -f "$SRC_FILE" ]]; then
  echo "Erreur: fichier '$SRC_FILE' introuvable."
  exit 1
fi

# Convertir le nom de fichier en PascalCase pour le composant
BASENAME=$(basename "$SRC_FILE" .tsx)
PASCAL=$(echo "$BASENAME" | sed -E 's/(^|[-_])([a-z])/\U\2/g')

COMP_DIR="$SITE_DIR/src/components/outils"
PAGE_DIR="$SITE_DIR/src/pages/outils"

mkdir -p "$COMP_DIR" "$PAGE_DIR"

# 1. Copier le composant
COMP_FILE="$COMP_DIR/${PASCAL}.tsx"
cp "$SRC_FILE" "$COMP_FILE"

# 2. Générer la page wrapper
PAGE_FILE="$PAGE_DIR/${SLUG}.tsx"
cat > "$PAGE_FILE" <<EOF
import Layout from '@theme/Layout';
import App from '../../components/outils/${PASCAL}';

export default function ${PASCAL}Page() {
  return (
    <Layout title="${TITLE}" description="${DESC}">
      <App />
    </Layout>
  );
}
EOF

echo ""
echo "=== Outil intégré avec succès ==="
echo ""
echo "  Composant : $COMP_FILE"
echo "  Page      : $PAGE_FILE"
echo "  URL       : /outils/$SLUG"
echo ""
echo "N'oubliez pas :"
echo "  - Ajouter un lien navbar/footer dans docusaurus.config.js si nécessaire"
echo "  - Vérifier avec: cd $SITE_DIR && bun run build"
