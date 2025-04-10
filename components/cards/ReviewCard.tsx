'use client';

interface ReviewCardProps {
  stars: number; // from 0 to 5
  name: string;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ stars, name, text }) => {
  
  return (
    <div className="bg-[#1C1C1E] text-white rounded-xl shadow-lg p-5 space-y-3 max-w-md w-full">
      {/* Reviewer Name */}
      <h3 className="text-xl font-semibold">{name}</h3>

      {/* Star Rating */}
      <div className="flex items-center space-x-1 text-heroic">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>
            {i < stars ? '★' : '☆'}
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray800">{text}</p>
    </div>
  );
};

export default ReviewCard;
