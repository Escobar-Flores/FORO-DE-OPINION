'use strict';

$(document).ready(function () {
  // Funcionalidad para imprimir todos los temas
  var output = '';

  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'GET',
    dataType: 'json',
    success: function success(data) {
      $.each(data, function (index) {
        var element = data[index];

        output += '\n        <div class="card my-2">\n          <div class="card-body">\n            <blockquote class="blockquote mb-0">\n              <h4>Por: ' + element.author_name + '</h4>\n              <p>' + element.content + '</p>\n              <footer class="blockquote-footer">Respuestas: ' + element.responses_count + '</footer>\n            </blockquote>\n          </div>\n        </div>';

        $('#posts').html(output);
      });
    },
    fail: handleError
  });

  var handleError = function handleError(request) {
    if (request) {
      alert(request.message);
    }
  };
});

$('.add-theme-js').on('click', function () {
  var authorName = $('.author-name-js').val();
  var contentTheme = $('.content-theme-js').val();
  var body = {
    'author_name': authorName,
    'content': contentTheme
  };

  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      'author_name': authorName,
      'content': contentTheme
    }),
    success: function success(data) {},
    fail: handleError
  });

  function handleError(request) {
    if (request) {
      alert(request.message);
    }
  }
});