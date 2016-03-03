$(function() {
  var socket = io();

  function getCurrentTime() {
    return new Date().toLocaleTimeString().
            replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  }

  $('body').on('click', '.signin', function(event) {
    var userName = $('.user-name').val();

    if (userName) {
      localStorage.setItem('userName', userName);
      location.href = 'http://localhost:3000/room';
    }
  });

  $('body').on('click', '.send-message', function() {
    var message = $('#message-to-send').val();
    if (message) {
      socket.emit('chat message', message);
    }
  });
sdg
  socket.on('chat message', function(msg) {
    var context = {
      message: msg,
      time: getCurrentTime
    };
    var template = Handlebars.compile($('#message-template').html());
    $('#message-to-send').val('');
    $('.chat-history').prepend(template(context));
    // $('.chat-history').prepend(msg);
    
  });
});
