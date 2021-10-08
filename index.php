<!DOCTYPE html>
<html lang="en" ng-app="home">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <!-- <link rel="icon" href="public/assets/favicon.ico" type="image/x-icon" /> -->
    <title>CMS YOWEZ</title>
    <!-- Custom CSS -->
    <base href="/" />
    <script src="/node_modules/angular/angular.min.js"></script>
    <script src="https://code.angularjs.org/1.8.2/angular-sanitize.min.js"></script>
    <script src="https://code.angularjs.org/1.8.2/angular-route.js"></script>
    <script src="https://code.angularjs.org/1.8.2/angular-loader.js"></script>
    <script src="https://code.angularjs.org/1.8.2/angular-aria.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ng-meta/1.0.3/ngMeta.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.js"></script>

    <!-- <script src="/public/apps/app.js?v=1"></script>
    <script src="/public/apps/controller.js?v=3"></script> -->
    <script src="/Apps/app.js"></script>
    <script src="/Apps/controller.js"></script>
    <script src="/Apps/env.js"></script>
    <script src="/Apps/main.js"></script>
    <link rel="stylesheet" href="public/assets/css/custom.css?v=5" />
    <link rel="stylesheet" href="/public/games/TemplateData/style.css">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
    <!-- Font Awesome -->

    <link rel="stylesheet" href="public/assets/css/font-awesome/css/all.min.css" />
    <!-- Owl Carousel -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossorigin="anonymous" />

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous">
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
    <script src="https://apis.google.com/js/platform.js?onload=appStart" async="" defer="" gapi_processed="true"></script>
</head>

<body>

    <ng-view></ng-view>

</body>

</html