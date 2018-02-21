// let output = '';
// let request = new XMLHttpRequest();

// request.open('GET', 'http://examen-laboratoria-sprint-5.herokuapp.com/topics');

// request.onreadystatechange = function() {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());

//     const data = JSON.parse(this.responseText);

//     $.each(data, function(index) {
//       const element = data[index];
      
//       output += `
//       <div class="card my-2">
//         <div class="card-body">
//           <blockquote class="blockquote mb-0">
//             <h4>Por: ${element.author_name}</h4>
//             <p>${element.content}</p>
//             <footer class="blockquote-footer">Respuestas: ${element.responses_count}</footer>
//           </blockquote>
//         </div>
//       </div>`;

//       $('#posts').html(output);
//     });
//   };
// };
// request.send();