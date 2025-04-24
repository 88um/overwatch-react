import { getAllReviews } from "@/actions/reviews";
import ReviewCard from "@/components/cards/ReviewCard";
import ReviewForm from "@/components/forms/ReviewForm";

const ReviewsPage: React.FC = async ({}) => {
  const reviews = await getAllReviews();
  
  return (
    <div className="bg-[#0a1428] min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Review Cards (unchanged) */}
        <div className="grid gap-6 mb-12">
          {reviews.length > 0 ? (
            reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))
          ) : (
            <div className="bg-[#ff9c00] text-[#0a1428] p-6 rounded-xl border-2 border-blue-500/30 text-center">
              No reviews found. Why don't you write one!
            </div>
          )}
        </div>

        {/* Form Section - ONLY these styles changed */}
        <div className="bg-[#ff9c00] rounded-xl border-2 border-blue-500/30 shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#0a1428] mb-6">Submit Your Report</h2>
          <div className="[&_input::placeholder]:text-[#0a1428]/80 [&_textarea::placeholder]:text-[#0a1428]/80 [&_button]:bg-[#00aeef] [&_button:hover]:bg-[#0088cc] [&_button]:text-white">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;