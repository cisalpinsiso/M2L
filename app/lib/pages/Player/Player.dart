import 'package:app/Requests.dart';
import 'package:app/main.dart';
import 'package:flutter/material.dart';
import 'package:flutterflow_ui/flutterflow_ui.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:app/pages/Player/PlayerModel.dart';
import 'package:app/Types.dart';

class ChatBubble extends StatelessWidget {
  final Message message;

  const ChatBubble({Key? key, required this.message}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final borderRadius = message.isCurrentUser
        ? BorderRadius.only(
            topLeft: Radius.circular(12),
            bottomLeft: Radius.circular(12),
            topRight: Radius.circular(12),
          )
        : BorderRadius.only(
            topRight: Radius.circular(12),
            bottomRight: Radius.circular(12),
            topLeft: Radius.circular(12),
          );
    return Container(
      padding: EdgeInsets.all(10),
      margin: EdgeInsets.symmetric(vertical: 4, horizontal: 8),
      decoration: BoxDecoration(
        color: message.isCurrentUser ? Colors.blue[100] : Colors.grey[300],
        borderRadius: borderRadius,
      ),
      child: Column(
        crossAxisAlignment: message.isCurrentUser
            ? CrossAxisAlignment.end
            : CrossAxisAlignment.start,
        children: [
          Text(message.auteur.prenom,
              style: TextStyle(fontWeight: FontWeight.bold)),
          Text(message.content),
        ],
      ),
    );
  }
}

class PlayerWidget extends StatefulWidget {
  const PlayerWidget({super.key});

  @override
  State<PlayerWidget> createState() => _PlayerWidgetState();
}

class _PlayerWidgetState extends State<PlayerWidget> {
  late PlayerModel _model;
  final scaffoldKey = GlobalKey<ScaffoldState>();

  late IO.Socket socket;
  final TextEditingController _messageController = TextEditingController();
  List<Message> messages = []; // Store chat messages.

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => PlayerModel());
    _initializeSocket();
  }

  void _initializeSocket() async {
    print(headers);
    socket = IO.io('http://localhost:3000', <String, dynamic>{
      'transports': ['websocket'],
      'autoConnect': false,
      'extraHeaders': headers,
    });

    socket.onConnect((_) async {
      print('Connected to socket server');
      socket.emit('register user');
    });

    socket.on('message', (data) {
      print("Received message: $data");

      final message = Message(
        id: data['id'],
        content: data['content'],
        date: data['date'],
        auteur: TeamJoueur.fromJson(
            data['auteur']), // Assuming you have a method to parse the author
        isCurrentUser: data['isCurrentUser']
      );

      setState(() {
        messages.add(message);
      });
    });

    socket.connect();
  }

  void _sendPrivateMessage(String messageText, int recipientId) async {
    if (messageText.isNotEmpty) {
      final messageData = {
        'recipientId': recipientId,
        'message': messageText,
      };

      socket.emit('message', messageData);

      _messageController.clear();
    }
  }

  @override
  void dispose() {
    socket.disconnect();
    _model.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // get player argument
    final player = ModalRoute.of(context)!.settings.arguments as TeamJoueur;

    return PopScope(
      onPopInvoked: (data) {
        currentRoute.value = "/teams";
      },
      child: Scaffold(
        key: scaffoldKey,
        appBar: AppBar(
          title: Text("${player.prenom} ${player.nom}",
              style: FlutterFlowTheme.of(context).titleLarge),
        ),
        body: Column(
          children: [
            Expanded(
              child: ListView.builder(
                itemCount: messages.length,
                itemBuilder: (context, index) {
                  final message = messages[index];
                  return ChatBubble(
                    message: message,
                  );
                },
              ),
            ),
            Container(
              padding: EdgeInsets.all(8),
              child: Row(
                children: [
                  Expanded(
                    child: TextFormField(
                      controller: _messageController,
                      decoration: InputDecoration(
                        hintText: "Type a message",
                      ),
                    ),
                  ),
                  IconButton(
                    icon: Icon(Icons.send),
                    onPressed: () {
                      _sendPrivateMessage(_messageController.text, player.id);
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
