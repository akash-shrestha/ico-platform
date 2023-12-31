import Link from "next/link";
import ProgressBar from "@components/progressBar";
import CardHover from "@components/cardHover";
import ProjectCardStyleWrapper from "./ProjectCard.style";

const ProjectCard = ({
  thumb,
  title,
  price,
  launchedDate,
  totalRised,
  progress,
  coinIcon,
}) => {
  return (
    <ProjectCardStyleWrapper>
      <div className="previous-item hover-shape-border hover-shape-inner">
        <div className="previous-gaming">
          <div className="previous-image">
            <img src={thumb.src} alt="Previous item thumb" />
          </div>
          <div className="previous-price">
            <h4 className="mb-10">
              <Link href="/project/1">
                <a>{title}</a>
              </Link>
            </h4>
            <div className="dsc">PRICE (FSC) = {price} APT</div>
          </div>
        </div>
        <div className="previous-chaining">
          <img src={coinIcon.src} alt="Chain icon" />
          <span>{launchedDate} days ago</span>
        </div>
        <div className="previous-raise">
          <span>
            {totalRised} APT ({progress})
          </span>
          <ProgressBar progress={progress} />
        </div>
        <CardHover />
      </div>
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;
