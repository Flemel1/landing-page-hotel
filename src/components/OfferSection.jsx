import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <div className="offer">
      <h2>Our Offers</h2>
      <div className="offer__grid">
        {[1, 2, 3, 4, 5, 6].map(() => {
          return <OfferCard className={"offer"} />;
        })}
      </div>
    </div>
  );
};

export default OfferSection;
