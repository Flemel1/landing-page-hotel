import Header from "./Header";

const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <img className="banner__image" src="/images/banner.png" alt="banner" />
      <div className="banner__greeting">
        <h1>Reserve Your Hotel Now</h1>
        <h2>Our Recommended Have 200+ Hotel Around the World</h2>
        <h3>Let's Find Your Place To Live For The Holidays</h3>
      </div>
    </div>
  );
};

export default Banner;
