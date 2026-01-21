# TrackLolExtension

Squelette de base pour une extension de navigateur compatible avec Chrome, Firefox, Opera GX, etc.

## Structure du projet

- `manifest.json` : Fichier de configuration principal (Manifest V3).
- `src/` : Code source de l'extension.
    - `icons/` : Icônes de l'extension.
    - `popup/` : Interface utilisateur du popup (HTML, CSS, JS).
    - `scripts/` : Scripts de fond (background) et scripts de contenu (content scripts).

## Installation

### Google Chrome / Opera / Brave / Edge

1. Ouvrez `chrome://extensions/` (ou l'équivalent du navigateur).
2. Activez le "Mode développeur".
3. Cliquez sur "Charger l'extension non empaquetée".
4. Sélectionnez le dossier racine du projet.

### Firefox

1. Ouvrez `about:debugging#/runtime/this-firefox`.
2. Cliquez sur "Charger un module complémentaire temporaire...".
3. Sélectionnez le fichier `manifest.json` du projet.

## Développement

L'extension utilise le Manifest V3. Notez que pour Firefox, certaines fonctionnalités peuvent nécessiter des ajustements mineurs, bien que le Manifest V3 soit de plus en plus supporté.
