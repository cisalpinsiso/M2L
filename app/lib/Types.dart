
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
  final String fonction;
  final dynamic id_equipe;

  factory TeamJoueur.fromJson(Map<String, dynamic> json) {
    return TeamJoueur(
      id: json['id'],
      nom: json['nom'],
      prenom: json['prenom'],
      email: json['email'],
      fonction: json['fonction'],
      id_equipe: json['id_equipe'],
    );
  }

  TeamJoueur({
    required this.id,
    required this.nom,
    required this.prenom,
    required this.email,
    required this.fonction,
    required this.id_equipe,
  });
}

class Message {
  final String id;
  final String content;
  final int date;
  final TeamJoueur auteur;
  final bool isCurrentUser;

  factory Message.fromJson(Map<String, dynamic> json) {
    return Message(
      id: json['id'],
      content: json['message'],
      date: json['date'],
      auteur: TeamJoueur.fromJson(json['auteur']),
      isCurrentUser: json['isCurrentUser'],
    );
  }

  Message({
    required this.id,
    required this.content,
    required this.date,
    required this.auteur,
    required this.isCurrentUser,
  });
}


class Chat {
  final String logo;
  final String recipientName;
  final int recipientId;
  final String recipientType;
  final String lastMessage;
  final int lastMessageDate;

  Chat({
    required this.logo,
    required this.recipientName,
    required this.recipientId,
    required this.recipientType,
    required this.lastMessage,
    required this.lastMessageDate,
  });


  factory Chat.fromJson(Map<String, dynamic> json) {
    return Chat(
      logo: json['logo'],
      recipientName: json['recipientName'],
      recipientId: json['recipientId'],
      recipientType: json['recipientType'],
      lastMessage: json['lastMessage'],
      lastMessageDate: json['lastMessageDate'],
    );
  }
}