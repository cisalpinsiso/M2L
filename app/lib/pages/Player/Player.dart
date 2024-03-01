import 'package:app/Requests.dart'; // Assuming this contains getTeams()
import 'package:app/pages/Player/PlayerModel.dart';
import 'package:app/pages/Teams/TeamRecord.dart';
import 'package:flutter/material.dart';
import 'package:flutterflow_ui/flutterflow_ui.dart';

class PlayerWidget extends StatefulWidget {
  const PlayerWidget({super.key});

  @override
  State<PlayerWidget> createState() => _PlayerWidgetState();
}

class _PlayerWidgetState extends State<PlayerWidget> {
  late PlayerModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();

    _model = createModel(context, () => PlayerModel());
  }

  @override
  void dispose() {
    _model.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // get player argument
    final player = ModalRoute.of(context)!.settings.arguments as TeamJoueur;

    return Scaffold(
          key: scaffoldKey,
          appBar: AppBar(
            title: Text(player.prenom, style: FlutterFlowTheme.of(context).titleLarge),
          ),
          body: new Divider()
    );
  }
}