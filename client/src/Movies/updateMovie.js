import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

const initialValue = {
    title: '',
    director: '',
    metascore: '',
}

const UpdateMovie = props => {
    const [form, setForm] = useState(initialValue)
    const {id} = useParams()
    const history = useHistory()

    const handleChanges = evt => {
        setForm({...form, [evt.target.name]: evt.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            console.log(res)
            setForm(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    const submitUpdate = (evt) => {
        evt.preventDefault()
        axios.put(`http://localhost:5000/api/movies/${id}`, form)
        .then(res => {
            console.log(res)
            history.push(`/movies/${id}`)

        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <div>
            <form onSubmit={submitUpdate}>
                <label>
                    <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    id='title'
                    value={form.title}
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
                    value={form.director}
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
                        value={form.metascore}
                        onChange={handleChanges}
                    >
                    </input>
                </label>
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie