<?php

    $login = $_POST['login'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];



    $login = htmlspecialchars($login);
    $email = htmlspecialchars($email);
    $tel = htmlspecialchars($tel);

    $login = urldecode($login);
    $email = urldecode($email);
    $tel = urldecode($tel);

    $login = trim($login);
    $email = trim($email);
    $tel = trim($tel);



    if (mail("nfctyumen@mail.ru",
    "Новое письмо с сайта.",
    "Логин: ".$login."\n".
    "Email: ".$email."\n".
    "Телефон: ".$tel,
    "Form: no-reply@mydomain.ru \r\n")
    )
?>