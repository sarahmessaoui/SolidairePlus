<?php

require 'jwt.php';


const KEY = 'N@f#o^r)m|y!W#Z$Z_N_I';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$host = 'localhost';  
$username = 'root'; 
$password = 'root';  
$database = 'projectpfa'; 

$conn = mysqli_connect($host, $username, $password, $database);
// mysqli_set_charset($conn, 'utf8');


if (!$conn) {
    die('Erreur de connexion à la base de données : ' . mysqli_connect_error());
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['endpoint'] === 'list') {
    $query = "SELECT * FROM don";
    $result = mysqli_query($conn, $query);
    if ($result) {
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode(['data' => $data]);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de la récupération des données']);
    }
    exit();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'add') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $Qt = mysqli_real_escape_string($conn, $data['Qt']);
    $desc = mysqli_real_escape_string($conn, $data['desc']);
    $lib = mysqli_real_escape_string($conn, $data['lib']);
    $photo = mysqli_real_escape_string($conn, $data['photo']);

    $query = "INSERT INTO don (Qt, lib, description, photo) VALUES ('$Qt', '$lib', '$desc', '$photo')";
    
    if (mysqli_query($conn, $query)) {
        http_response_code(201);
        echo json_encode(['message' => 'Données ajoutées avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de l\'ajout des données']);
    }

    exit();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'delete') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $id = mysqli_real_escape_string($conn, $data['id']);
  
    $query = "DELETE FROM don WHERE id = '$id'";
  
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(['message' => 'Donnée supprimée avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de la suppression de la donnée']);
    }
  
    exit();
  }
  
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'update') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $Qt = mysqli_real_escape_string($conn, $data['Qt']);
    $desc = mysqli_real_escape_string($conn, $data['desc']);
    $lib = mysqli_real_escape_string($conn, $data['lib']);
    $photo = mysqli_real_escape_string($conn, $data['photo']);
    $id = mysqli_real_escape_string($conn, $data['id']);
  
  
    $query = "UPDATE don 
              SET Qt = '$Qt', description = '$desc', lib = '$lib', photo = '$photo'
              WHERE id = '$id'";
  
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(['message' => 'Données modifiées avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de la modification des données']);
    }
  
    exit();
  }

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'register') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $cin = mysqli_real_escape_string($conn, $data['cin']);
    $tel = mysqli_real_escape_string($conn, $data['tel']);
    $nom = mysqli_real_escape_string($conn, $data['nom']);
    $prenom = mysqli_real_escape_string($conn, $data['prenom']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = mysqli_real_escape_string($conn, $data['password']);
    $role = mysqli_real_escape_string($conn, $data['role']);
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $query = "INSERT INTO user (cin, nom, prenom, email,tel,password,role,status)  VALUES ('$cin', '$nom', '$prenom', '$email','$tel', '$hashedPassword', '$role','Actif')";
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(['message' => 'user create successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Error registering admin user',$nom]);
    }
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'login') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = mysqli_real_escape_string($conn, $data['password']);

    $query = "SELECT * FROM user WHERE email = '$email'";
    $result = mysqli_query($conn, $query);
    if ($result && mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        if (password_verify($password, $user['password'])) {
            if($user['status']==="OFF"){
                http_response_code(401);
                echo json_encode(['message' => 'compte desactivé']);

            }else{
            $data = [
                'nom' => $user['nom'],
                'prenom' => $user['prenom'],
                'cin' => $user['cin'],
                'tel' => $user['tel'],
                'email' => $user['email'],
                'role' => 'User'
            ];
            $token = Token::Sign($data, KEY, 60*5);
            $response = [
                'message' => 'Connexion réussie',
                'token' => $token,
                'data' => $data
            ];

            http_response_code(200);
            echo json_encode($response);
        }
 
            // http_response_code(200);
            // echo json_encode(['message' => 'Connexion réussie']);
        } else {
            // Le mot de passe est incorrect
            http_response_code(401);
            echo json_encode(['message' => 'Nom de utilisateur ou mot de passe incorrect1']);
        }
    } else {
        // Utilisateur admin non trouvé
        http_response_code(401);
        echo json_encode(['message' => 'email n"a pas existe']);
    }
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['endpoint'] === 'listCompte') {
    $query = "SELECT * FROM user";
    $result = mysqli_query($conn,$query);
    if ($result) {
      $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
          $data[] = $row;
        }
          header('Content-Type: application/json');
          echo json_encode(['data' => $data]);
  } else {
      http_response_code(500);
      echo json_encode(['message' => 'Erreur lors de la récupération des données']);
  }
  
  exit();
  }

  if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'deleteCompte') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $cin = mysqli_real_escape_string($conn, $data['cin']);
  
    $query = "DELETE FROM user WHERE cin = '$cin'";
  
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(['message' => 'Donnée supprimée avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de la suppression de la donnée']);
    }
  
    exit();
  }


  if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'statuCompte') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $cin = mysqli_real_escape_string($conn, $data['cin']);

  
  
    $query = "UPDATE user 
              SET status = 'OFF'
              WHERE cin = '$cin'";
  
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(['message' => 'Données modifiées avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de la modification des données']);
    }
  
    exit();
  }

  if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'activeCompte') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $cin = mysqli_real_escape_string($conn, $data['cin']);

  
  
    $query = "UPDATE user 
              SET status = 'Actif'
              WHERE cin = '$cin'";
  
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(['message' => 'Données modifiées avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de la modification des données']);
    }
  
    exit();
  }
  
  


if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'changePasswordI') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $cin = mysqli_real_escape_string($conn, $data['cin']);
    $passwordA = mysqli_real_escape_string($conn, $data['passwordA']);
    $passwordN = mysqli_real_escape_string($conn, $data['passwordN']);
    $hashedPassword = password_hash($passwordN, PASSWORD_DEFAULT);
    $query = "SELECT * from user WHERE cin = '$cin' ";
    $result = mysqli_query($conn, $query);
    if ($result && mysqli_num_rows($result) > 0) {
        $data=mysqli_fetch_assoc($result);
        if (password_verify($passwordA, $data['password'])) {
            $query_1 = "UPDATE user SET password = '$hashedPassword' WHERE cin = '$cin'";
            $result_1 = mysqli_query($conn, $query_1);
            if ($result_1) {
                http_response_code(200);
                echo json_encode(['message' => 'Password changed successfully']);
            } else {
                http_response_code(400);
                echo json_encode(['message' => 'Error occurred while changing password']);
            }
        }else{
            http_response_code(404);
            echo json_encode(['message' => 'Incorrect password']);
        }
        
    } else {
        http_response_code(405);
        echo json_encode(['message' => 'error']);
    }
    exit();
} 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['endpoint'] === 'updateCompte') {
    // Récupérer les données JSON de la requête
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Valider les données
    if (!isset($data['cin']) || !isset($data['nouvelEmail']) || !isset($data['nouveauPassword'])) {
        http_response_code(400);
        echo json_encode(['message' => 'Paramètres manquants']);
        exit();
    }

    // Échapper les valeurs pour éviter les injections SQL
    $cin = mysqli_real_escape_string($conn, $data['cin']);
    $email = mysqli_real_escape_string($conn, $data['nouvelEmail']);
    $password = mysqli_real_escape_string($conn, $data['nouveauPassword']);

    // Préparer la requête SQL pour mettre à jour le compte
    $query = "UPDATE user SET email = '$email', password = '$password' WHERE cin = '$cin'";

    // Exécuter la requête
    if (mysqli_query($conn, $query)) {
        http_response_code(200);
        echo json_encode(['message' => 'Compte mis à jour avec succès']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur lors de la mise à jour du compte']);
    }
  
    exit();
}


function generateRandomPassword($length = 10) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    $password = '';
    $characterCount = strlen($characters);

    for ($i = 0; $i < $length; $i++) {
        $password .= $characters[rand(0, $characterCount - 1)];
    }

    $password = str_replace('"', '', $password);


    return $password;
}


?>


