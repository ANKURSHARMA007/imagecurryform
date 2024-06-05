<?php
  // Get the form data
  $name = $_POST['fname'];
  $address = $_POST['add'];
  $contact = $_POST['cont'];
  $email = $_POST['email'];
  $designation = $_POST['des'];
  $gender = $_POST['gender'];

  // Save the data to a database or file
  // For example, let's save it to a text file
  $data = array(
    'name' => $name,
    'address' => $address,
    'contact' => $contact,
    'email' => $email,
    'designation' => $designation,
    'gender' => $gender
  );

  $fp = fopen('responses.txt', 'a');
  fwrite($fp, json_encode($data) . "\n");
  fclose($fp);

  // Redirect the user to a thank-you page
  header('Location:');
  exit;
?>