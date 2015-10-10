angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Waduk Jatiluhur',
    lastText: 'Purwakarta, Jawa Barat',
    face: 'img/waduk-jatiluhur.jpg',
    latitude: -6.523611,
    longitude: 107.388333
  }, {
    id: 1,
    name: 'Waduk Cirata',
    lastText: 'Cianjur, Jawa Barat',
    face: 'img/waduk-cirata.jpg',
    latitude: -6.769014,
    longitude: 107.275054
  }, {
    id: 2,
    name: 'Waduk Saguling',
    lastText: 'Bandung, Jawa Barat',
    face: 'img/waduk-saguling.jpg',
    latitude: -6.946683,
    longitude: 107.431576
  }, {
    id: 3,
    name: 'Waduk Kedungombo',
    lastText: 'Grobogan, Jawa Tengah',
    face: 'img/waduk-kedungombo.jpg',
    latitude: -7.255699,
    longitude: 110.8359898
  }, {
    id: 4,
    name: 'Danau Maninjau',
    lastText: 'Bukit Tinggi, Jawa Barat',
    face: 'img/danau-maninjau.jpg',
    latitude: -0.309006,
    longitude: 100.193094
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

