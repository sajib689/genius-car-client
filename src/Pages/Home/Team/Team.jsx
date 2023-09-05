
import TeamCard from "./TeamCard";

const Team = () => {
    const data = [
        {
            "title": "Car Engine Plug",
            "expert": "Engine Expert",
            "img": "https://imagizer.imageshack.com/img922/5743/XLS5hA.jpg"
        },
        {
            "title": "Car Engine Plug",
            "expert": "Engine Expert",
            "img": "https://imagizer.imageshack.com/img922/5300/bRypCx.jpg"
        },
        {
            "title": "Car Engine Plug",
            "expert": "Engine Expert",
            "img": "https://imagizer.imageshack.com/img923/5899/N4jWOC.jpg"
        },
    ]
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Team</h3>
        <h2 className="text-5xl">Meet Our Team</h2>
        <p className="mt-3">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
     <div className="grid grid-cols-3 gap-4">
     {
        data.map(team => <TeamCard key={team.title} team={team}></TeamCard>)
     }
     </div>
    </div>
  );
};

export default Team;
