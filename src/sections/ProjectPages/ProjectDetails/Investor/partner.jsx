import PartnerStyleWrapper from "./partner.style";
import data from "@assets/data/partner2";

const Partner = () => {
  return (
    <PartnerStyleWrapper>
      <h4 className="widget_title">Investors</h4>
      <div className="partner_logo_list">
        {data?.map((logo, i) => (
          <span key={i} className="partner_logo">
            <img src={logo.src} alt="partner thumb" />
          </span>
        ))}
      </div>
    </PartnerStyleWrapper>
  );
};

export default Partner;
