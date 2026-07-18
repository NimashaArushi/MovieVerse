import React, { useState } from 'react';

const Watchlist = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Avatar', genre: 'Action', Year: 2009, poster: 'https://image.tmdb.org/t/p/w500/kyeqW6g6CKBw9NfJgPHIv6Ynh6w.jpg' },
        { id: 2, title: 'Titanic', genre: 'Romance', Year: 1997, poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8wGq86rmm769G7zW.jpg' },
        { id: 3, title: 'Star Wars', genre: 'Sci-Fi', Year: 1977, poster: 'https://image.tmdb.org/t/p/w500/6FfA9g66T696Xg9v936G3Z6Eg63.jpg' }
    ]);

    return (
        <div style={{
            padding: '10px',
            maxWidth: '900px', 
            margin: '0 auto',
            fontFamily: 'Arial',
            background: 'linear-gradient(to bottom, #720802, #ffffff, #720802)',
            textAlign: 'center',
            borderRadius: '10px', 
            color: 'black' 
        }}>
            <h2>🎬 My Movie Watchlist</h2>
            
            <ul style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '20px',
                listStyleType: 'none',
                marginTop: '20px'
            }}>
                {movies.map(movie => (
                    <li key={movie.id}
                        style={{
                            position: 'relative',
                            background: 'rgba(0, 0, 0, 0.7)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                        <img 
                            src={movie.poster} 
                            alt={movie.title}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover'
                            }}
                        />

                        <div style={{ padding: '12px', textAlign: 'left', marginBottom: '40px' }}>
                            <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{movie.title}</h4>
                            <span style={{ fontSize: '13px', color: '#aaa' }}>{movie.Year}</span>
                        </div>

                        <button style={{
                            position: 'absolute',          
                            bottom: '10px',                
                            right: '10px',                
                            padding: '6px 12px',
                            background: '#720802',        
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}>
                            Watch 🎬
                        </button>
                    </li>
                ))} 
            </ul>
        </div>
    );
};

export default Watchlist;