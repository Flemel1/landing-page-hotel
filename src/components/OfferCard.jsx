import { Icon } from '@iconify/react';

const OfferCard = ({ className }) => {
  return (
    <div className={`${className}__card`}>
      <img className={`${className}__card__thumbnail`} src="/images/thumbnail.png" alt="hotel-photo" />
      <div className={`${className}__card__name`}>
          <div className={`${className}__card__name__hotel`}>White Hotel</div>
          <div>Rp. 1.000.000/night</div>
      </div>
      <div className={`${className}__card__location`}>
          <div className={`${className}__card__location__hotel`}>Indonesia</div>
          <div className={`${className}__card__location__rating`}><Icon icon="emojione:star" color="#ff7f22" height="20" />4.5</div>
      </div>
    </div>
  );
};

export default OfferCard;
