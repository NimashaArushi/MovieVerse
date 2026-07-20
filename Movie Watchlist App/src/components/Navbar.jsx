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

            {/*  Logo Only */}
            <div style={{ color: '#E50914', fontSize: '26px', fontWeight: 'bold', cursor: 'pointer' }}>
                MovieVerse🍿
            </div>

           
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          
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
                            width: '240px'
                        }}
                    />
                    <span style={{ position: 'absolute', left: '12px', top: '7px', color: '#aaa', fontSize: '14px' }}>
                        🔍
                    </span>
                </div>

                {/* Nav Links */}
                <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0, color: '#ccc', fontSize: '14px', fontWeight: '500' }}>
                    <li style={{ color: 'white', cursor: 'pointer' }}>On Demand</li>
                    <li style={{ cursor: 'pointer' }}>Watchlist</li>
                    <li style={{ cursor: 'pointer' }}>Dashboard</li>
                </ul>
            </div>

            {/* Sign In Button */}
            <div>
                <button style={{
                    background: '#E50914',
                    color: 'white',
                    border: 'none',
                    padding: '8px 18px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    cursor: 'pointer'
                }}>
                    Sign In
                </button>
            </div>

        </nav>
    );
};

export default Navbar;