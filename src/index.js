$(document).ready(() => {
  // Funcionalidad para imprimir todos los temas
  let output = '';

  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'GET',
    dataType: 'json',
    success: (data) => {
      $.each(data, function(index) {
        const element = data[index];
        
        output += `
        <div class="card my-2">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <h4>Por: ${element.author_name}</h4>
              <p>${element.content}</p>
              <footer class="blockquote-footer">Respuestas: ${element.responses_count}</footer>
            </blockquote>
          </div>
        </div>`;

        $('#posts').html(output);
      });
    },
    fail: handleError,
  });

  let handleError = (request) => {
    if (request) {
      alert(request.message);
    }
  };
});

$('.add-theme-js').on('click', function() {
  var authorName = $('.author-name-js').val();
  var contentTheme = $('.content-theme-js').val();
  var body = {
    'author_name': authorName,
    'content': contentTheme,
  };
  
  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      'author_name': authorName,
      'content': contentTheme,
    }),
    success: function(data) {
        
    },
    fail: handleError,
  });

  function handleError(request) {
    if (request) {
      alert(request.message);
    }
  }
});