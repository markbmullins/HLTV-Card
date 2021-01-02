import logo from "./logo.svg";
import "./App.scss";

const Player = ({ url, profile, name }) => {
  return (
    <div className="player-card flex-cl-center">
      <a target="_blank" href={profile}>
        <img src={url} />
      </a>
      <div>{name}</div>
    </div>
  );
};

const Roster = ({ team }) => {
  return (
    <div className="player-imgs flex-rw-center">
      <div className="core flex-rw">
        <div>Core</div>
      </div>
      {team.core.map(({ url, profile, name }) => (
        <Player url={url} profile={profile} name={name} />
      ))}
      {team.rest.map(({ url, profile, name }) => (
        <Player url={url} profile={profile} name={name} />
      ))}
    </div>
  );
};

const TeamCard = ({ position, logoUrl, statsPage }) => {
  return (
    <div className="team-card">
      <a target="_blank" href={statsPage}>
        <div className="box flex-rw">
          <div className="circle flex-rw-center">{position}</div>
          <img src={logoUrl} />
          <h1>Heroic</h1>
        </div>
      </a>
    </div>
  );
};

const Achievements = ({ placings }) => {
  return (
    <div className="achievements flex-cl-center">
      <div>ACHIEVEMENTS (LAN)</div>
      <div className="item flex-rw">
        <img src="https://i.imgur.com/eo6jufJ.png" />
        <div>1st</div>
        <div>{placings.first}</div>
      </div>
      <div className="item flex-rw">
        <img src="https://i.imgur.com/0HpiWyN.png" />
        <div>2nd</div>
        <div>{placings.second}</div>
      </div>
      <div className="item flex-rw">
        <img src="https://i.imgur.com/wSd9GcO.png" />
        <div>3rd-4th</div>
        <div>{placings.third}</div>
      </div>
    </div>
  );
};
const Card = (props) => {
  const team = getTeamInfo();
  return (
    <div className="container flex-rw-center">
      <div className="card">
        <div className="card-info">
          <div className="team">
            <TeamCard position={team.position} logoUrl={team.logoUrl} statsPage={team.statsPage} />
            <Roster team={team} />
          </div>
          <div className="flex-cl prize-achievements">
            <div className="prize-money flex-cl-center">
              <a target="_blank" href="https://www.hltv.org/stats/teams/events/7175/heroic">
                <div>Prize Money</div>
                <div>{team.prizeMoney}</div>
              </a>
            </div>

            <Achievements placings={team.placings} />
          </div>
        </div>
        <div className="graph">
          <img src="https://i.imgur.com/DryrBuN.png" />
        </div>
      </div>
    </div>
  );
};

function getTeamInfo() {
  return {
    placings: {
      first: "2 (0)",
      second: "1 (0)",
      third: "3 (1)",
    },
    prizeMoney: "$389,000",
    position: 6,
    logoUrl:
      "https://img-cdn.hltv.org/teamlogo/ffSPDr5mbWSKI4yruyfVtx.svg?ixlib=java-2.1.0&s=2b0a91cf4a31e6eec7a5928b10465f32",
    statsPage: "https://www.hltv.org/stats/teams/7175/heroic",
    core: [
      {
        name: "cadiaN",
        url:
          "https://img-cdn.hltv.org/playerbodyshot/QQ61eqccSn_egB_OCkOkg9.png?ixlib=java-2.1.0&w=400&s=336a2c5aeffb7fc3f5f4c9af1d9b36fd",
        profile: "https://www.hltv.org/player/7964/cadian",
      },
      {
        name: "b0RUP",
        url:
          "https://img-cdn.hltv.org/playerbodyshot/0V4v2LEeCQKU0E9nE0fZVR.png?ixlib=java-2.1.0&w=400&s=f44ef2bdd60707f4a1f1e652112be1a1",
        profile: "https://www.hltv.org/player/9896/b0rup",
      },
      {
        name: "stavn",
        url:
          "https://img-cdn.hltv.org/playerbodyshot/ebX1nyC7pzo5bLwDtkmabc.png?ixlib=java-2.1.0&w=400&s=b7d89bbe33cc30d2f3444f90a14fdf39",
        profile: "https://www.hltv.org/stats/players/10994/stavn",
      },
    ],
    rest: [
      {
        name: "niko",
        url:
          "https://img-cdn.hltv.org/playerbodyshot/fLtY019120rMGJIZSbuvsX.png?ixlib=java-2.1.0&w=400&s=510b366e38fbef52e43129fedce4d160",
        profile: "https://www.hltv.org/player/10264/niko",
      },
      {
        name: "TeSeS",
        url:
          "https://img-cdn.hltv.org/playerbodyshot/6hSNbL27oIt8TRAcHyd1K7.png?ixlib=java-2.1.0&w=400&s=cdf6a2d8197eedd852924c442b1e172f",
        profile: "https://www.hltv.org/player/12018/teses",
      },
      {
        name: "es3tag",
        url: "https://i.imgur.com/NAFogkx.png",
        profile: "https://www.hltv.org/stats/players/8611/es3tag",
      },
      {
        name: "Snappi",
        url:
          "https://img-cdn.hltv.org/playerbodyshot/1V5mxY04_yjKXg8d3hbM15.png?bg=3e4c54&h=400&ixlib=java-2.1.0&rect=150%2C33%2C400%2C400&w=400&s=089175bbf183db9879057622d1eaa66a",
        profile: "https://www.hltv.org/stats/players/922/snappi",
      },
    ],
  };
}

export default Card;
