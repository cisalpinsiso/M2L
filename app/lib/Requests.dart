import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

Map<String, String> headers = {};
String base_url = 'http://localhost:3000/api';

Future<bool> login(String email, String password) async {
  final url = Uri.parse('$base_url/login');
  final response = await http.post(url, body: {
    'email': email,
    'password': password,
  });

  final data = jsonDecode(response.body);
  if (data['success']) {
    headers['cookie'] = response.headers['set-cookie']!;
    return true;
  } else {
    return false;
  }
}

Future<bool> getUser() async {
  final url = Uri.parse('$base_url/user');
  final response = await http.get(url, headers: headers);

  final data = jsonDecode(response.body)['user'];
  
  if (data == null) return false;

  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.setString('user', jsonEncode(data));

  return data;
}