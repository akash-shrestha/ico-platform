import data from "@assets/data/statistics2"
import thumb from "@assets/images/project/explore-image.png"
import StatisticsStyleWrapper from "./Statistics.style";

const Statistics = () => {
  return (
    <StatisticsStyleWrapper id="tokenomics">
      <div className="tokenomics_content">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <div className="tokenomics_content_right" >
              <img src={thumb.src} alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tokenomics_content_left">
              <div className="tokenomics_list">
                {data?.map((item, i) => i > 0 && (

                  <div key={i} className="tokenomics_item">
                    <h5 className="tokenomics_item_title">
                      {item.title}
                      <span>{item.value}</span>
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StatisticsStyleWrapper>
  );
};

export default Statistics;
