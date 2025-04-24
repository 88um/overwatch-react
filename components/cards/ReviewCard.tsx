'use client';

interface ReviewCardProps {
  stars: number; // from 0 to 5
  name: string;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ stars, name, text }) => {
  return (
    <div className="bg-[#ff9c00] rounded-xl border-2 border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
      {/* Reviewer Name */}
      <h3 className="text-xl font-bold text-[#0a1428]">{name}</h3>

      {/* Star Rating */}
      <div className="flex items-center my-2 text-[#0a1428]">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-2xl">
            {i < stars ? '★' : '☆'}
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-[#0a1428] mt-3">{text}</p>
    </div>
  );
};

export default ReviewCard;