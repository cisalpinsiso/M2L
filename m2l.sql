-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 08 déc. 2023 à 11:12
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

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
  `sport` varchar(100) NOT NULL,
  `logo` varchar(128) NOT NULL,
  `banniere` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `equipe`
--

INSERT INTO `equipe` (`id`, `nom`, `ville`, `sport`, `logo`, `banniere`) VALUES
(1, 'Purple Crown', 'London', 'foot', '/purplecrown.png', 'https://cdn.britannica.com/39/239139-050-49A950D1/French-soccer-player-Kylian-Mbappe-FIFA-World-Cup-December-10-2022.jpg'),
(2, 'Maze Dragon', 'Madrid', 'foot', '/mazedragon.png', 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8f189ff0c52f9885/63af578868ce201ffcda00c0/Ronny_cover(1).jpg'),
(3, 'Imperial Tiger', 'Manchester', 'foot', '/imperialtiger.png', 'https://assets-fr.imgfoot.com/media/toujours-pas-de-c1-pour-ibra_175990.jpg'),
(4, 'Horse Riders', 'Manchester', 'foot', '/horseriders.png', 'https://i.insider.com/5fd350fae00bce00188bab82?width=1000&format=jpeg&auto=webp'),
(5, 'Blue Tail', 'London', 'foot', '/bluetail.png', 'https://deshpee.com/wp-content/uploads/2023/08/image-1.png'),
(6, 'Black Pirates', 'Milan', 'foot', '/blackpirates.png', 'https://cdn.images.express.co.uk/img/dynamic/67/590x/400172_1.jpg?r=1686998680160');

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

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id`, `nom`, `quantite`, `prix`, `description`, `image`) VALUES
(1, 'Équipement d\'entraînement', 80, 147, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(2, 'Chaussettes de football', 23, 192, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(3, 'Équipement d\'entraînement', 80, 147, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(4, 'Équipement d\'entraînement', 80, 147, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(5, 'Chaussettes de football', 23, 192, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(6, 'Maillot de football', 52, 23, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(7, 'Protège-tibias', 91, 20, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(8, 'Équipement d\'entraînement', 85, 139, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(9, 'Short de football', 92, 43, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(10, 'Chaussettes de football', 4, 179, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(11, 'Maillot de football', 40, 94, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(12, 'Veste de football', 80, 193, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket'),
(13, 'Short de football', 60, 85, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(14, 'Veste de football', 22, 77, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket'),
(15, 'Chaussettes de football', 14, 11, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(16, 'Protège-tibias', 66, 184, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(17, 'Gants de gardien', 48, 197, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves'),
(18, 'Équipement d\'entraînement', 9, 187, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(19, 'Chaussures de football', 15, 35, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(20, 'Chaussettes de football', 54, 109, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(21, 'Maillot de football', 51, 56, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(22, 'Protège-tibias', 43, 134, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(23, 'Chaussettes de football', 35, 46, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(24, 'Chaussures de football', 99, 190, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(25, 'Gants de gardien', 71, 174, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves'),
(26, 'Chaussures de football', 68, 43, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(27, 'Équipement d\'entraînement', 90, 20, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(28, 'Short de football', 37, 149, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(29, 'Équipement d\'entraînement', 80, 147, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(30, 'Chaussettes de football', 23, 192, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(31, 'Maillot de football', 52, 23, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(32, 'Protège-tibias', 91, 20, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(33, 'Équipement d\'entraînement', 85, 139, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(34, 'Short de football', 92, 43, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(35, 'Chaussettes de football', 4, 179, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(36, 'Maillot de football', 40, 94, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(37, 'Veste de football', 80, 193, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket'),
(38, 'Short de football', 60, 85, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(39, 'Veste de football', 22, 77, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket'),
(40, 'Chaussettes de football', 14, 11, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(41, 'Protège-tibias', 66, 184, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(42, 'Gants de gardien', 48, 197, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves'),
(43, 'Équipement d\'entraînement', 9, 187, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(44, 'Chaussures de football', 15, 35, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(45, 'Chaussettes de football', 54, 109, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(46, 'Maillot de football', 51, 56, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(47, 'Protège-tibias', 43, 134, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(48, 'Chaussettes de football', 35, 46, 'Chaussettes hautes et élastiques, offrant un bon soutien.', 'https://source.unsplash.com/featured/?soccer,socks'),
(49, 'Chaussures de football', 99, 190, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(50, 'Gants de gardien', 71, 174, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves'),
(51, 'Chaussures de football', 68, 43, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(52, 'Équipement d\'entraînement', 90, 20, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(53, 'Short de football', 37, 149, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(54, 'Sac de sport', 44, 34, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag'),
(55, 'Sac de sport', 97, 21, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag'),
(56, 'Short de football', 40, 77, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(57, 'Veste de football', 8, 21, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket'),
(58, 'Gants de gardien', 8, 83, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves'),
(59, 'Équipement d\'entraînement', 87, 163, 'Équipement varié pour améliorer les performances et la condition physique.', 'https://source.unsplash.com/featured/?training,gear'),
(60, 'Chaussures de football', 58, 132, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(61, 'Short de football', 58, 105, 'Short léger et confortable, permet une grande liberté de mouvement.', 'https://source.unsplash.com/featured/?soccer,shorts'),
(62, 'Gants de gardien', 94, 107, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves'),
(63, 'Veste de football', 7, 84, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket'),
(64, 'Veste de football', 3, 70, 'Veste résistante, idéale pour les entraînements par temps froid.', 'https://source.unsplash.com/featured/?soccer,jacket'),
(65, 'Ballon de football', 86, 80, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball'),
(66, 'Chaussures de football', 82, 175, 'Chaussures offrant une bonne adhérence et un contrôle optimal du ballon.', 'https://source.unsplash.com/featured/?soccer,shoes'),
(67, 'Protège-tibias', 45, 193, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(68, 'Gants de gardien', 22, 72, 'Gants rembourrés pour une protection maximale et une bonne prise du ballon.', 'https://source.unsplash.com/featured/?goalkeeper,gloves'),
(69, 'Maillot de football', 30, 64, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(70, 'Maillot de football', 88, 15, 'Maillot confortable et respirant, idéal pour les matchs et l\'entraînement.', 'https://source.unsplash.com/featured/?soccer,jersey'),
(71, 'Protège-tibias', 94, 10, 'Protège-tibias robustes et légers, assurant une protection efficace.', 'https://source.unsplash.com/featured/?shin,guards'),
(72, 'Ballon de football', 68, 39, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball'),
(73, 'Sac de sport', 70, 38, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag'),
(74, 'Sac de sport', 77, 154, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag'),
(75, 'Ballon de football', 8, 161, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball'),
(76, 'Ballon de football', 53, 10, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball'),
(77, 'Ballon de football', 73, 158, 'Ballon durable, adapté pour tous les types de terrains.', 'https://source.unsplash.com/featured/?soccer,ball'),
(78, 'Sac de sport', 76, 200, 'Sac spacieux, parfait pour transporter tout l\'équipement de football.', 'https://source.unsplash.com/featured/?sports,bag');

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
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `email`, `mdp`, `fonction`) VALUES
(2, 'Test', 'Test', 'test@gmail.com', '$2b$10$2g8Kh9Mb1AvP1bYOj0VZJumPdgRGZSgSkY0rsjnP9ErDDLU7e.KPS', 'joueur'),
(3, 'Test', 'Test', 'test@gmail.com', '$2b$10$.O4HwtAzcAnuUySsCKeAVObZCzjag2GbvnwjBo8fbGqfxH6RpXlSG', 'joueur'),
(4, 'Test', 'Test', 'test@gmail.com', '$2b$10$E/oc.2VHPZhJsIZGK7Tqi.VR0K8edPp176J9d5LzIk1N.aVQgt.Ce', 'joueur');

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
