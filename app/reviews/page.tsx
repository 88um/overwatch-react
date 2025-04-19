import { getAllReviews } from "@/actions/reviews";
import ReviewCard from "@/components/cards/ReviewCard";
import ReviewForm from "@/components/forms/ReviewForm";
import Grid from "@/components/Grid";

const ReviewsPage: React.FC = async ({}) => {
  const reviews = await getAllReviews();
  if (reviews.length == 0) {
    return <div>No reviews found. Why don&apos;t you write one!</div>;
  }
  return (
    <div className="max-w-7xl mx-auto p-8">
      <Grid>
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Grid>
      <ReviewForm />
    </div>
  );
};

export default ReviewsPage;
