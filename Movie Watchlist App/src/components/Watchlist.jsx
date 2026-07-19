import React, { useState } from 'react';

const Watchlist = () => {
    const [movies, setMovies] = useState([
    { id: 1, title: 'Avatar', genre: 'Action', Year: 2009, poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80',watched:'false' },
    { id: 2, title: 'Titanic', genre: 'Romance', Year: 1997, poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&q=80',watched:'false' },
    { id: 3, title: 'Star Wars', genre: 'Sci-Fi', Year: 1977, poster: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&q=80',watched:'false' },
    { id: 4, title: 'Inception', genre: 'Sci-Fi', Year: 2010, poster: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&q=80',watched:'false' },
    { id: 5, title: 'The Lion King', genre: 'Animation', Year: 1994, poster: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80',watched:'false' },
    { id: 6, title: 'The Avengers', genre: 'Action', Year: 2012, poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&q=80',watched:'false' }
]);

const toggleWatched=(id)=>{
    setMovies(prevMovies=>prevMovies.map(movie=>movie.id===id ?
         {...movie, watched: movie.watched==='false' ? 'true' : 'false'} : movie))
}


    return (
        <div style={{
            padding: '10px',
           
            margin: '0 auto',
            fontFamily: 'Arial',
            background: 'linear-gradient(to bottom, #0e0d0d, #720802,#000000)',
            textAlign: 'center',
            borderRadius: '10px', 
            color: 'black' 
        }}>
            <h2 style={{
                position:'sticky',
                top:0,
                zIndex:100,
                margin:0,
                padding:'100px 0 200px,0',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
WebkitBackdropFilter: 'blur(10px)'
            }}>🎬 My Movie Watchlist</h2>
            
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
                                height: '200px',
                                objectFit: 'cover'
                            }}
                        />

                        <div style={{ padding: '12px', textAlign: 'left', marginBottom: '40px' }}>
                            <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{movie.title}</h4>
                            <span style={{ fontSize: '13px', color: '#aaa' }}>{movie.Year}</span>
                        </div>

                        <button 
                        onClick={()=>toggleWatched(movie.id)}
                        style={{
                            position: 'absolute',          
                            bottom: '10px',                
                            right: '10px',                
                            padding: '6px 12px',
                            background: movie.watched ?'#ececec':'#720002',       
                            color: 'black',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}>
                            {movie.watched === 'true' ? 'Watched ✅' : 'Watch 🎬'}
                        </button>
                    </li>
                ))} 
            </ul>
        </div>
    );
};

export default Watchlist;