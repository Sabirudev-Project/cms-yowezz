<!DOCTYPE html>
<html lang="en" ng-app="home">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <title>CMS YOWEZ</title>
    <base href="/" />

    <!-- AngularJS Setup -->
    <script src="/node_modules/angular/angular.min.js"></script>
    <script src="https://code.angularjs.org/1.8.2/angular-sanitize.min.js"></script>
    <script src="https://code.angularjs.org/1.8.2/angular-route.js"></script>
    <script src="/Apps/app.js?v=1"></script>
    <script src="/Apps/controller.js"></script>
    <script src="/Apps/env.js"></script>
    <script src="/Apps/controller/admin.js"></script>
    <script src="/Apps/controller/auth.js"></script>

    <!-- Mazer Panel Setup -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/public/mazer-main/dist/assets/css/bootstrap.css">
    <link rel="stylesheet" href="/public/mazer-main/dist/assets/vendors/bootstrap-icons/bootstrap-icons.css">
    <link rel="stylesheet" href="/public/mazer-main/dist/assets/css/app.css">
    <link rel="stylesheet" href="/public/mazer-main/dist/assets/vendors/iconly/bold.css">
    <link rel="stylesheet" href="/public/mazer-main/dist/assets/vendors/perfect-scrollbar/perfect-scrollbar.css">
    <link rel="stylesheet" href="/public/mazer-main/dist/assets/vendors/toastify/toastify.css">
    <script src="/public/mazer-main/dist/assets/vendors/jquery/jquery.min.js"></script>

</head>

<body>
    <div id="app">
        <ng-view></ng-view>
    </div>

    <!-- JScript Mazer Panel -->
    <script src="/public/mazer-main/dist/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <script src="/public/mazer-main/dist/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/public/mazer-main/dist/assets/vendors/apexcharts/apexcharts.js"></script>
    <script src="/public/mazer-main/dist/assets/vendors/toastify/toastify.js"></script>
    <script src="/node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js"></script>
    <script src="/node_modules/ng-file-upload/dist/ng-file-upload.min.js"></script>
</body>

</html>