import React, {useState} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

const initialMovieValues = {
        id: '',
        title: "",
        director: "",
        metascore: '',
        stars: []
}

const AddMovie = () => {
    const [newMovie, setNewMovie] = useState(initialMovieValues)
    const history = useHistory()

    const handleChanges = evt => {
        setNewMovie({...newMovie, [evt.target.name]: evt.target.value})
    }

    const submitMovie = (evt) => {
        evt.preventDefault()
        const starsArr = newMovie.stars.split(',')
        const movie = {...newMovie, stars: starsArr}
        Axios.post('http://localhost:5000/api/movies', movie)
        .then(res => {
            console.log(res)
            history.push('/')
        })
        .catch(err => {
            console.error(err)
        })
    }

    return(
        <div>
             <form onSubmit={submitMovie}>
                <label>
                    <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    id='title'
                    value={newMovie.title}
                    onChange={handleChanges}
                    >
                    </input>
                </label>
                <label>
                    <input
                    type='text'
                    placeholder='Director'
                    name='director'
                    id='director'
                    value={newMovie.director}
                    onChange={handleChanges}
                    >
                    </input>
                </label>
                <label>
                    <input
                        type='number'
                        max='100'
                        placeholder='Metascore'
                        name='metascore'
                        id='metascore'
                        value={newMovie.metascore}
                        onChange={handleChanges}
                    >
                    </input>
                </label>
                <label>
                    <input
                        type='text'
                        placeholder='Stars'
                        name='stars'
                        id='star'
                        value={newMovie.stars}
                        onChange={handleChanges}
                    >
                    </input>
                </label>
    
                <button>add movie</button>
            </form>
        </div>
    )
}

export default AddMovie