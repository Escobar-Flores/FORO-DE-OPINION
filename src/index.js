// Funcionalidad para imprimir todos los temas
$(document).ready(() => {  
  let output = '';

  $.ajax({
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
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
  handleError();
});

// Funcionalidad para crear temas
$('.add-theme-js').on('click', () => {
  let authorName = $('.author-name-js').val();
  let contentTheme = $('.content-theme-js').val();
  let body = {
    'author_name': authorName,
    'content': contentTheme,
  };
  
  $.ajax({
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      'author_name': authorName,
      'content': contentTheme,
    }),
    success: (data) => {        
    },
    fail: handleError,
  });
  handleError();
});

// Funcionalidad para filtrar por título
$('#btnSearch').on('click', (event) => {
  event.preventDefault();
  let search = $('#search').val();
  $('#posts').empty();
  let output = '';

  $.ajax({ 
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'GET',
    dataType: 'json',
    success: (results) => { 
      let data = results.filter((response) => {       
        return response.content.toLowerCase().indexOf(search) !== -1;
      });

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
    }		
  });
  handleError();
  $('#search').val('');
});

let handleError = (request) => {
  if (request) {
    alert(request.message);
  }
};