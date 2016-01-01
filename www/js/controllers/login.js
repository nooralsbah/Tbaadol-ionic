/**
 * Created by noor_ATM on 12/17/15.
 */
'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup,Auth) {

  $scope.emailLogin = function(){
      $scope.user = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/partials/login.html',
        title: 'تسجيل دخول',
        scope: $scope,
        buttons: [
          { text: '<b> إلغاء </b>',
            type: 'button-assertive'
          },

          {  text: '<b>دخـول </b>',
            type: 'button-calm',
            onTap: function(user) {
              user = $scope.user;
              Auth.login(user).then(function () {
                $state.go('tabsController.account');
              }, function(err){
                console.log('Error...', err);
              });
            }
          }
        ]
      });
    };

  $scope.emailRegister = function() {
    $scope.user = {};
    var myPopup = $ionicPopup.show({
      templateUrl: 'templates/partials/register.html',
      title: 'تـسـجـيـل',
      scope: $scope,
      buttons: [
        { text: '<b> إلغاء </b>',
          type: 'button-assertive '
        },
        {
          text: '<b>تـسـجـيـل</b>',
          type: 'button-calm ',
          onTap: function (user) {
            user = $scope.user;
            Auth.register(user).then(function () {
              console.log('user was register successfully');
              $state.go('tabsController.account');
            }, function (err) {
              console.log('Error...', err);
            });

          }
        }

      ]

    });
  }

});
