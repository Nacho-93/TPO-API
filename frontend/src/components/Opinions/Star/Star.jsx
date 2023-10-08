import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

export function Star() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleStarClick = (currentRating) => {
        setRating(currentRating);
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
                            value={currentRating}
                            onClick={() => handleStarClick(currentRating)}
                        />
                        <FaStar
                            className="star"
                            size={25}
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}
