
class TeamRecord {
  final int id;
  final String nom;
  final String ville;
  final String sport;
  final String logo;
  final String banniere;
  final List<TeamJoueur> joueurs;

  TeamRecord({
    required this.id,
    required this.nom,
    required this.ville,
    required this.sport,
    required this.logo,
    required this.banniere,
    required this.joueurs,
  });


  factory TeamRecord.fromJson(Map<String, dynamic> json) {
    return TeamRecord(
      id: json['id'],
      nom: json['nom'],
      ville: json['ville'],
      sport: json['sport'],
      logo: json['logo'],
      banniere: json['banniere'],
      joueurs: (json['joueurs'] as List).map((e) => TeamJoueur.fromJson(e)).toList(),
    );
  }
}

class TeamJoueur {
  final int id;
  final String nom;
  final String prenom;
  final String email;
  final String mdp;
  final String fonction;
  final int id_equipe;

  factory TeamJoueur.fromJson(Map<String, dynamic> json) {
    return TeamJoueur(
      id: json['id'],
      nom: json['nom'],
      prenom: json['prenom'],
      email: json['email'],
      mdp: json['mdp'],
      fonction: json['fonction'],
      id_equipe: json['id_equipe'],
    );
  }

  TeamJoueur({
    required this.id,
    required this.nom,
    required this.prenom,
    required this.email,
    required this.mdp,
    required this.fonction,
    required this.id_equipe,
  });
}

class Message {
  final int id;
  final String message;
  final int date;
  final TeamJoueur auteur;

  factory Message.fromJson(Map<String, dynamic> json) {
    return Message(
      id: json['id'],
      message: json['message'],
      date: json['date'],
      auteur: TeamJoueur.fromJson(json['auteur']),
    );
  }

  Message({
    required this.id,
    required this.message,
    required this.date,
    required this.auteur,
  });
}