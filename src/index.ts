import './styles/index.scss';
import axios from 'axios';
import * as M from 'materialize-css';
import * as $ from 'jquery';
const request = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/',

})

const movies = request.get('movie', {
    params: {
        api_key: 'ce86c319e9b45d8eeb0d5ce8d3020ed1',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: true,
        include_video: false,
        page: 1
    }
})


$(()=> {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});

    movies.then(response=>{
        console.log(response.data.results)
        
        let moviesList = ''
        for (let item of response.data.results) {
            moviesList += `
            <article>
                <div class="card hoverable">
                    <div class="card-image ">
                        <img class="materialboxed" src="https://image.tmdb.org/t/p/original${item.backdrop_path}">
                        <span class="card-title"></span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <h3>${item.title}</h3>
                        <p> ${item.overview}</p>
                    </div>
                </div>
            </article>
            `        
        }
        $("#movies-list").append(moviesList);

    
    } );
    
})