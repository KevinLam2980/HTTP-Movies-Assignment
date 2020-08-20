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
        setNewMovie({[evt.target.name]: evt.target.name})
    }

    const submitMovie = (evt) => {
        evt.preventDefault()
        Axios.post('http://localhost:5000/api/movies', newMovie)
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
             <form onSubmit={submitUpdate}>
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
                        type='text'
                        placeholder='Metascore'
                        name='metascore'
                        id='metascore'
                        value={newMovie.metascore}
                        onChange={handleChanges}
                    >
                    </input>
                </label>
                <button>Update</button>
            </form>
        </div>
    )
}

export default AddMovie