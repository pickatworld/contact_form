<?php

// Check If User Coming From A Request

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Assign Variables

    $user    = $_POST['username'];
    $mail    = $_POST['email'];
    $mobile  = $_POST['MobileNumber'];
    $msg     = $_POST['message'];

    // Creating Array Of Errors

    $formErrors = array();

    if (strlen($user) < 3) {
        $formErrors[] = '* User Name Must Be Larger Than 2 Characters';
    }

    if (strlen($mobile) <> 11) {
        $formErrors[] = '* Mobile Namer Must Be 11 Namer';
    }

    if (strlen($msg) <= 10) {
        $formErrors[] = '* Massage Can\'t Be Lass Than 10 Characters';
    }
}





?>

<!DoCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>contact Form</title>

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/all.min.css" />
    <link rel="stylesheet" href="css/contact.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@700;900&display=swap">
</head>

<body>

    <!-- Start Form -->

    <div class="container">
        <h2 class="text-center">Contact Me</h2>

        <form class="contact-form" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">


            <?php if (! empty($formErrors)) { ?>
                <div class="alert alert-danger" role="alert">
                    <?php
                    foreach ($formErrors as $error) {
                        echo $error . '<br/>';
                    }
                    ?>
                </div>
            <?php } ?>

            <div class="form-group">
                <input class="form-control" type="text" name="username"
                value="<?php if(isset($user)) {echo $user;}?>"
                 placeholder="User Name" />
                <i class="fa-solid fa-user"></i>
                <span class="asterisk">*</span>
            </div>
            <div class="form-group">
                <input class="form-control" type="email" name="email" 
                value="<?php if(isset($mail)) {echo $mail;}?>"
                placeholder="Your Email" />
                <i class="fa-solid fa-envelope"></i>
                <span class="asterisk">*</span>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" name="MobileNumber"
                value="<?php if(isset($mobile)) {echo $mobile;}?>" 
                placeholder="Your Mobile Number" />
                <i class="fa-solid fa-mobile"></i>
                <span class="asterisk">*</span>
            </div>
            
                <textarea class="form-control" 
                name="message"
                placeholder="Your Massage!">
                <?php if (isset($msg)) { echo $msg; } ?></textarea>
                <input class="btn btn-success" type="submit" value="send Massage" />
                <i class="fa-solid fa-paper-plane send-icon"></i>
            
        </form>
    </div>


    <!-- End Form -->





    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/frontEnd.js"></script>
</body>

</html>