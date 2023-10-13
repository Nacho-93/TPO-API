import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.css';

export function Star({ value, onChange }) {
    const [hover, setHover] = useState(null);

    const handleStarClick = (currentRating) => {
        onChange(currentRating);
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                    <label key={currentRating}>
                        <input
                            type="radio"
                            name="rating"
                            className="star"
                            value={currentRating}
                            onClick={() => handleStarClick(currentRating)} // Llamar a handleStarClick en el evento onClick
                        />
                        <FaStar
                            className="star"
                            size={25}
                            color={currentRating <= (hover || value) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}


