# API de Location de Vidéos

## Description

Il s'agit d'une API backend pour une application de location de vidéos, développée avec NestJS et PostgreSQL. L'API permet aux utilisateurs de gérer les locations de vidéos, les clients et les catégories, avec des fonctionnalités telles que l'authentification des utilisateurs et la gestion des locations.

## Fonctionnalités

- **Authentification des utilisateurs** : Les administrateurs et les utilisateurs réguliers peuvent s'authentifier via des tokens JWT.
- **Opérations CRUD** : Les utilisateurs peuvent créer, lire, mettre à jour et supprimer des enregistrements de location, des clients et des catégories.
- **Intégration avec la base de données** : L'application utilise PostgreSQL pour le stockage persistant des données avec TypeORM.

## Installation

### Prérequis

Assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (>=14.x.x)
- PostgreSQL (>=12.x.x)
- npm (>=6.x.x)

### Étape 1 : Cloner le dépôt

```bash
git clone https://github.com/Ambre-guia/exo_backend_sakila.git
cd video-rental
```

### Étape 2 : Installer les dépendances

```bash
npm install
```

### Étape 3 : Configurer la base de données

Mettez à jour le fichier ormconfig.json avec les détails de votre connexion PostgreSQL.

Exemple :

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "votre-username",
  "password": "votre-mot-de-passe",
  "database": "video_rental",
  "synchronize": true,
  "logging": true,
  "entities": ["src/**/*.entity{.ts,.js}"],
  "migrations": ["src/migrations/**/*{.ts,.js}"],
  "subscribers": ["src/subscribers/**/*{.ts,.js}"],
  "cli": {
    "migrationsDir": "src/migrations"
  }
}
```

### Étape 4 : Lancer l'application

```bash
npm run start:dev
```

### Étape 5 : Accéder à l'API

Une fois l'application lancée, vous pouvez accéder à l'API à l'adresse http://localhost:3000.

#### Points de terminaison (Endpoints)

##### Authentification

- POST /auth/login - Se connecter pour obtenir un token JWT.
- POST /auth/register - Créer un nouvel utilisateur.

##### Locations de Vidéos

- GET /rentals - Récupérer toutes les locations.
- POST /rentals - Créer une nouvelle location.
- PUT /rentals/:id - Mettre à jour une location.
- DELETE /rentals/:id - Supprimer une location.

##### Clients

- GET /customers - Récupérer tous les clients.
- POST /customers - Créer un nouveau client.
- PUT /customers/:id - Mettre à jour un client.
- DELETE /customers/:id - Supprimer un client.

##### Catégories

- GET /categories - Récupérer toutes les catégories.
- POST /categories - Créer une nouvelle catégorie.
- PUT /categories/:id - Mettre à jour une catégorie.
- DELETE /categories/:id - Supprimer une catégorie.

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
