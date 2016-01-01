/**
 * Created by noor_ATM on 12/17/15.
 */
'use strict';

  app.controller('accountCtrl', function ($scope,$state, $ionicPopup, Auth) {

  $scope.logout= function() {
    Auth.logout();
  };
  $scope.currentUser = Auth.user;

    $scope.changePassword = function(){
      $scope.user = {};

      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/partials/changePassword.html',
        title: 'تـسـجـيـل',
        scope: $scope,
        buttons: [
          { text: '<b>إلغاء الطلب </b>',
            type: 'button-calm'
          },

          {
            text: '<b>أضف الطلب</b>',
            type: 'button-calm',
            onTap: function (user) {
              user = $scope.user;
              Auth.changePassword(user).then(function() {
                // Reset form
                $scope.email = '';
                $scope.oldPass = '';
                $scope.newPass = '';

              });
              console.log('the Password is changed', user);
              $state.go('tabsController.account');

            }
          }
        ]
      });
    };

  });
