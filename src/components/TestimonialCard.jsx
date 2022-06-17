const TestimonialCard = ({ className }) => {
  return (
    <div className={`${className}__card`}>
      <img
        className={`${className}__card__photo`}
        src="/images/profile.png"
        alt="profile"
      />
      <div className={`${className}__card__name`}>Lydia</div>
      <p className={`${className}__card__caption`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam fermentum,
        sit sed aliquet vitae at consequat. Pulvinar nullam magna consequat
        aliquet gravida. Pulvinar consequat, ut elit tincidunt consectetur urna
        ac viverra dignissim. Imperdiet scelerisque tristique ac accumsan
        faucibus.
      </p>
    </div>
  );
};

export default TestimonialCard;
