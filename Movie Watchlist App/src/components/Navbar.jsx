import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 40px',
            background: 'rgba(15, 15, 26, 0.85)',
            backdropFilter: 'blur(12px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>

           
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '25px'
            }}>
               
                <div style={{
                    color: '#E50914',
                    fontSize: '26px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    MovieVerse🍿
                </div>

              <div style={{ position: 'relative' }}>
                <input 
                        type="text" 
                        placeholder="Search movies, TV shows..."
style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            padding: '8px 16px 8px 36px',
                            borderRadius: '20px',
                            color: 'white',
                            fontSize: '14px',
                            outline: 'none',
                            width: '260px'
                        }}
                    />
<span style={{ 
                        position: 'absolute', 
                        left: '12px', 
                        top: '7px', 
                        color: '#aaa', 
                        fontSize: '14px' 
                    }}>
                        🔍
                    </span>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;