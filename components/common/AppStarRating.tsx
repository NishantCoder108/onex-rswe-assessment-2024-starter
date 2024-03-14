import { Star, StarHalf } from "lucide-react";

interface IRating {
    rating: number;
}
const StarRating = ({ rating }: IRating) => {
    const TOTAL_STARS = 5;
    const stars = [];

    for (let i = 0; i < TOTAL_STARS; i++) {
        if (i < Math.floor(rating)) {
            stars.push(
                <Star key={i} fill="#FFB400" width="1rem" strokeWidth={0} />
            );
        } else if (i < rating) {
            stars.push(
                <StarHalf key={i} fill="#FFB400" width="1rem" strokeWidth={0} />
            );
        } else {
            stars.push(
                <Star key={i} fill="#111" strokeWidth={0} width="1rem" />
            );
        }
    }

    return <div className="flex gap-2">{stars}</div>;
};

export default StarRating;
