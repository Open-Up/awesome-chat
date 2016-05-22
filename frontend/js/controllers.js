'use strict';

angular.module('esn.chat')
  .controller('chatController', function($scope, chat, DownloadInvitations, createDownloadInvitation) {
    $scope.messages = chat.messages;

    $scope.close = function() {
      chat.toggleWindow();
    };

    $scope.$on('chat:message:received', function() {
      $scope.$applyAsync();
    });

    $scope.downloadInvitations = DownloadInvitations.list;
    $scope.$on('downloadInvitation', function (event, otherGuy, fileNameList, wasAccepted) {
      DownloadInvitations.add(createDownloadInvitation(otherGuy, fileNameList))
    });

  });
