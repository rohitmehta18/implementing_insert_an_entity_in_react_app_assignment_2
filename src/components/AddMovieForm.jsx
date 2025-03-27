import './AddMovieForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddMovieForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        releaseYear: '',
        synopsis: '',
        posterUrl: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        navigate('/');
    };

    return (
        <div className="form-container">
            <h2>Add a New Movie</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Director:</label>
                    <input 
                        type="text" 
                        name="director" 
                        value={formData.director} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Genre:</label>
                    <select 
                        name="genre" 
                        value={formData.genre} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Release Year:</label>
                    <input 
                        type="number" 
                        name="releaseYear" 
                        value={formData.releaseYear} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Synopsis:</label>
                    <textarea 
                        name="synopsis" 
                        value={formData.synopsis} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Poster URL:</label>
                    <input 
                        type="url" 
                        name="posterUrl" 
                        value={formData.posterUrl} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="button-group">
                    <button type="submit">Submit</button>
                    <button 
                        type="button" 
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddMovieForm;
