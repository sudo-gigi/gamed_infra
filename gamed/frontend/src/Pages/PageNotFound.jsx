import React from 'react';

const PageNotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#e0f7fa', // Light blue background
            fontFamily: 'Arial, sans-serif',
        }}>
            <h1 style={{
                fontSize: '64px',
                color: '#0d47a1', // Dark blue
                marginBottom: '20px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}>
                404
            </h1>
            <p style={{
                fontSize: '24px',
                color: '#424242',
                marginBottom: '30px',
                textAlign: 'center',
                maxWidth: '80%',
            }}>
                Sorry, the page you are looking for could not be found.
            </p>
            <a
                href="/"
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#64b5f6', // Blue
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '1.2em',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1976d2'; // Darker blue on hover
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#64b5f6'; // Blue on mouse out
                }}
            >
                Back to Home
            </a>
        </div>
    );
};

export default PageNotFound;
