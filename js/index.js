const url= "http://localhost:3000"
let info = document.getElementById("append")
let leftList = document.getElementById("list")


fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   {
        info.append(allMovies(data))
    })})
    
// printing movies to the DOM
 
function allMovies({title,runtime, showtime, description,poster,tickets_sold,id}) {
  
    let movies =document.createElement("container")
   movies.innerHTML =`
                        <div id="append" class="movie-db">
                        
                                <div class="movie-item ">
                                <div class="movie-img">
                                    <img src="${poster}" alt="poster">
                                </div>
                                <div class="movie-name">
                                    <h5>${title}</h5>
                                    <p><em>${description}/em></p>
                                    <p class="card-text">Runtime:  ${runtime}</p>
                                    <p class="card-text">Show Time:  ${showtime}</p>
                                    <p>Remaining tickets<p>
                                    <p id="span">${tickets_sold}</p>
                                    <button onclick="ticketSold(-1)" id="tickets${id}" 
                                    type="button" class=" btn btn-success">Purchase ticket</button>
                                </div>
                                </div>
                                  
                         </div>
    `;
 


    return movies
}
// creating list for movies and  printing it to the DOM

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   {
    list.append(movieList(data))
    })})

function movieList({title}) {
    let list = document.createElement("p")
   list.innerHTML =
   `<ul class="list-group">
                <li class="list-group-item mt-2">${title}</li>
                
              </ul>
        
    `;

    return list
}
movieList()


function ticketSold(clicks){
    const ticketSolds= document.getElementById("span")
    const totalTickets = parseInt(ticketSolds.innerText) + clicks
    ticketSolds.innerText = totalTickets
    
    if(totalTickets < 0){
        ticketSolds.innerText = 0
        alert("Tickets sold out, Please wait for the next movie")
    }
    return ticketSolds
     }