app.controller('HeaderController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
  console.log("Header Controller worked.");
  $(function () {
    $('#hornavmenu').slicknav();
    $("div.slicknav_menu").addClass("hidden-lg");
  });
}]);