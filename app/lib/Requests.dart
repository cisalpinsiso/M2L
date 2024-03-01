import 'dart:convert';
import 'package:app/Types.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

Map<String, String> headers = {};
String base_url = 'http://localhost:3000/api';

Future<void> updateHeadersWithCookie() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  String? cookie = prefs.getString('cookie');
  if (cookie != null && headers['cookie'] == null) {
    headers['cookie'] = cookie;
  } 
}

Future<bool> login(String email, String password) async {
  final url = Uri.parse('$base_url/login');
  final response = await http.post(url, body: {
    'email': email,
    'password': password,
  });

  final data = jsonDecode(response.body);
  if (data['success']) {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    headers['cookie'] = response.headers['set-cookie']!;
    prefs.setString('cookie', response.headers['set-cookie']!);
    return true;
  } else {
    return false;
  }
}

Future<bool> getUser() async {
  final url = Uri.parse('$base_url/user');
  await updateHeadersWithCookie();
  final response = await http.get(url, headers: headers);

  final data = jsonDecode(response.body)['user'];
  
  if (data == null) return false;

  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.setString('user', jsonEncode(data));

  return data;
}

Future<List<TeamRecord>> getTeams() async {
  final url = Uri.parse('$base_url/equipes');
  final response = await http.get(url, headers: headers);

  final data = jsonDecode(response.body)['equipes'];

  if (data == null || data is! List) return [];

  return data.map<TeamRecord>((item) => TeamRecord.fromJson(item)).toList();
}

Future<List<Message>> getMessages(int id) async {
  final url = Uri.parse('$base_url/messages/$id');
  final response = await http.get(url, headers: headers);

  final data = jsonDecode(response.body)['messages'];

  if (data == null || data is! List) return [];

  return data.map<Message>((item) => Message.fromJson(item)).toList();
}