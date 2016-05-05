angular.module('app').controller('ApplicationController', ['$scope', '$window', function ($scope, $window) {
  // add 'ie' classes to html
  var device;
  var isIE = !!navigator.userAgent.match(/MSIE/i);
  if (isIE) {
    angular.element($window.document.body).addClass('ie');
    device = "ie";
  } else if (isSmartDevice($window)) {
    angular.element($window.document.body).addClass('smart')
    device = "smart";
  }

  $scope.app = {
    name: 'Relay Shipment',
    version: '1.0.0',
    device: device
  };


  function isSmartDevice ($window) {
    var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
    return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
  }
}]);
