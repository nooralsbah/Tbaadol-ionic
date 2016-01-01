/**
 * Created by noor_ATM on 12/17/15.
 */
'use strict';

  app.controller('browseCtrl', function($scope, $state, Auth,Task,$stateParams,$ionicPopup) {
    $scope.searchTask = '';
    $scope.tasks = Task.all;
    $scope.signedIn = Auth.signedIn;



    $scope.createTask = function(){
      $scope.task = {} ;
      $scope.task.status = 'open';
      $scope.task.gravatar = Auth.user.profile.gravatar;
      $scope.task.name = Auth.user.profile.name;
      $scope.task.poster = Auth.user.uid;

       $ionicPopup.show({
        templateUrl: 'templates/partials/post.html',
        title: 'إضافة طلب تبادل',
        scope: $scope,
        buttons: [
          { text: '<b>إلغاء الطلب </b>',
            type: 'button-calm'
          },

          {
            text: '<b>أضف الطلب</b>',
            type: 'button-calm',
            onTap: function (task) {
             task = $scope.task;
              Task.createTask(task).then(function(ref) {
                $scope.task = {
                  title: '',
                  school: '',
                  grade: '',
                  governorate: '',
                  wilayat: '',
                  residential: '',
                  description: '',
                  status: 'open',
                  gravatar: '',
                  name: '',
                  poster: ''
                };
                $state.go('tabsController.browse' + ref.key());

              });

            }
          }
        ]
      });
    };
  });
