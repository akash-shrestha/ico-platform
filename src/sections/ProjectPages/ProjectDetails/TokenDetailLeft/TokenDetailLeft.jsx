import titleShape from "@assets/images/project/project-heading-image.png";
import TokenInfoStyleWrapper from "./TokenDetailLeft.style";

const TokenDetailLeft = ({ props }) => {
  const APTDecimal = 100000000;

  return (
    <TokenInfoStyleWrapper>
      <div className="token_info_title">
        <h4>{props.title}</h4>
        <img src={titleShape.src} alt="shape" />
      </div>
      <ul className="token_info_list">
        {/* {tokenInfo?.map((info, i) => (
          <li key={i}>
            <span className="token_info_key">{info.title}</span>
            <span className="token_info_value">{info.text}</span>
          </li>
        ))} */}
        <li>
          <span className="token_info_key">Token Distribution</span>
          <span className="token_info_value">{props.tokenDisributionDate}</span>
        </li>
        <li>
          <span className="token_info_key">Min. Allocation</span>
          <span className="token_info_value">
            {props.min_spend_per_user / APTDecimal} APT
          </span>
        </li>
        <li>
          <span className="token_info_key">Max. Allocation</span>
          <span className="token_info_value">
            {props.max_spend_per_user / APTDecimal} APT
          </span>
        </li>
        <li>
          <span className="token_info_key">Token Price</span>
          <span className="token_info_value">{props.tokenPrice} APT</span>
        </li>
        <li>
          <span className="token_info_key">Access type</span>
          <span className="token_info_value">{props.access}</span>
        </li>
      </ul>
    </TokenInfoStyleWrapper>
  );
};

export default TokenDetailLeft;
