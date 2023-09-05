import fb from "../../../assets/icons/fb.png";
import twitter from "../../../assets/icons/twitter.png";
import linkdin from "../../../assets/icons/linkdin.png";

const TeamCard = ({ team }) => {
  const { title, expert, img } = team;
  return (
    <div>
      <div className="mt-20 card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-[20px] font-bold text-center">{title}</h2>
          <p className="text-[15px]">{expert}</p>
          <div className="card-actions justify-center ">
            <img className="w-8" src={fb} alt="" />
            <img className="w-8" src={twitter} alt="" />
            <img className="w-8" src={linkdin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
