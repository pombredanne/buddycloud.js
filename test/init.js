$(document).ready(function() {
  'use strict';

  var apiUrl = 'https://api.TEST.COM';

  module('buddycloud');

  test(
    'initialize',

    function() {
      buddycloud.init(apiUrl);
      equal(false, buddycloud.ready(), 'should not be ready yet');
    }
  );
});