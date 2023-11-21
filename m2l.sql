-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 13 oct. 2023 à 15:52
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `m2l`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonce_global`
--

CREATE TABLE `annonce_global` (
  `id` int(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `id_utilisateur` int(255) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `auteur` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

CREATE TABLE `equipe` (
  `id` int(255) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `sport` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `joueur`
--

CREATE TABLE `joueur` (
  `id_utilisateur` int(255) NOT NULL,
  `id_equipe` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `match_rencontre`
--

CREATE TABLE `match_rencontre` (
  `id` int(255) NOT NULL,
  `id_equipe1` int(255) NOT NULL,
  `id_equipe2` int(255) NOT NULL,
  `date` datetime NOT NULL,
  `resultat` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(255) NOT NULL,
  `contenu` int(255) NOT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `message_equipe`
--

CREATE TABLE `message_equipe` (
  `id_equipe` int(255) NOT NULL,
  `id_utilisateur` int(255) NOT NULL,
  `id_message` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `message_prive`
--

CREATE TABLE `message_prive` (
  `id_utilisateur1` int(255) NOT NULL,
  `id_utilisateur2` int(255) NOT NULL,
  `id_message` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id` int(255) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `quantite` int(10) NOT NULL,
  `prix` int(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(255) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mdp` varchar(100) NOT NULL,
  `fonction` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annonce_global`
--
ALTER TABLE `annonce_global`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `joueur`
--
ALTER TABLE `joueur`
  ADD KEY `id_utilisateur` (`id_utilisateur`),
  ADD KEY `id_equipe` (`id_equipe`);

--
-- Index pour la table `match_rencontre`
--
ALTER TABLE `match_rencontre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `message_equipe`
--
ALTER TABLE `message_equipe`
  ADD KEY `id_equipe` (`id_equipe`),
  ADD KEY `id_utilisateur` (`id_utilisateur`),
  ADD KEY `id_message` (`id_message`);

--
-- Index pour la table `message_prive`
--
ALTER TABLE `message_prive`
  ADD KEY `id_message` (`id_message`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annonce_global`
--
ALTER TABLE `annonce_global`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `equipe`
--
ALTER TABLE `equipe`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `match_rencontre`
--
ALTER TABLE `match_rencontre`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonce_global`
--
ALTER TABLE `annonce_global`
  ADD CONSTRAINT `annonce_global_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`);

--
-- Contraintes pour la table `joueur`
--
ALTER TABLE `joueur`
  ADD CONSTRAINT `joueur_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`),
  ADD CONSTRAINT `joueur_ibfk_2` FOREIGN KEY (`id_equipe`) REFERENCES `equipe` (`id`);

--
-- Contraintes pour la table `message_equipe`
--
ALTER TABLE `message_equipe`
  ADD CONSTRAINT `message_equipe_ibfk_1` FOREIGN KEY (`id_equipe`) REFERENCES `equipe` (`id`),
  ADD CONSTRAINT `message_equipe_ibfk_2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`),
  ADD CONSTRAINT `message_equipe_ibfk_3` FOREIGN KEY (`id_message`) REFERENCES `message` (`id`);

--
-- Contraintes pour la table `message_prive`
--
ALTER TABLE `message_prive`
  ADD CONSTRAINT `message_prive_ibfk_1` FOREIGN KEY (`id_message`) REFERENCES `message` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Équipement d\'entraînement', 80, 147, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussettes de football', 23, 192, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Maillot de football', 52, 23, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Protège-tibias', 91, 20, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Équipement d\'entraînement', 85, 139, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Short de football', 92, 43, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussettes de football', 4, 179, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Maillot de football', 40, 94, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Veste de football', 80, 193, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Short de football', 60, 85, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Veste de football', 22, 77, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussettes de football', 14, 11, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Protège-tibias', 66, 184, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Gants de gardien', 48, 197, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Équipement d\'entraînement', 9, 187, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussures de football', 15, 35, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussettes de football', 54, 109, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Maillot de football', 51, 56, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Protège-tibias', 43, 134, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussettes de football', 35, 46, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussures de football', 99, 190, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Gants de gardien', 71, 174, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussures de football', 68, 43, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Équipement d\'entraînement', 90, 20, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Short de football', 37, 149, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Sac de sport', 44, 34, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Sac de sport', 97, 21, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Short de football', 40, 77, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Veste de football', 8, 21, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Gants de gardien', 8, 83, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Équipement d\'entraînement', 87, 163, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussures de football', 58, 132, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Short de football', 58, 105, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Gants de gardien', 94, 107, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Veste de football', 7, 84, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Veste de football', 3, 70, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Ballon de football', 86, 80, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Chaussures de football', 82, 175, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Protège-tibias', 45, 193, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Gants de gardien', 22, 72, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Maillot de football', 30, 64, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Maillot de football', 88, 15, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Protège-tibias', 94, 10, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Ballon de football', 68, 39, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Sac de sport', 70, 38, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Sac de sport', 77, 154, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Ballon de football', 8, 161, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Ballon de football', 53, 10, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Ballon de football', 73, 158, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball');
INSERT INTO stock (nom, quantite, prix, description, image) VALUES ('Sac de sport', 76, 200, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag');