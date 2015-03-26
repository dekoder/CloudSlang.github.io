'use strict';

angular.module('scoreWebsiteApp')
    .controller('DocsCtrl', function ($rootScope, MessagesService, $location) {

        if ($location.hash()) {
            var aTag = $('#' +  $location.hash());
            if (!_.isEmpty(aTag)) {
                $('html, body').animate({scrollTop: aTag.offset().top}, 'slow');
            }
        }

        _.forEach($('.navbar-collapse'), function(target) {
            $(target).collapse({'toggle': false});
        });

        $rootScope.sections = [
            { id: 'overview', title: $rootScope.messages.navDocsScoreTitle },
            { id: 'slang', title: $rootScope.messages.navDocsSlangTitle },
            { id: 'developer', title: $rootScope.messages.navDocsDeveloperTitle }
        ];

        $rootScope.titles = [
            { id: 'first', title: 'first' },
            { id: 'second', title: 'second' },
            { id: 'third', title: 'third' }
        ];

        _.forEach($('.anchor'), function(target) {
            $rootScope.titles.append($(target).id);
        });

        $rootScope.navSwitch = { uri: '', title: $rootScope.messages.navBackToSiteTitle };
    });