import "./App.css";

export default function RepoInfo({ data }) {
  return (
    <div className="col-12 col-md-4 p-3 bg-light" style={{ height: "100vh" }}>
      <div className="avatarDiv">
        <img className="avatar" src={data.owner.avatar_url} alt="" />
        <span className="userName">{data.owner.login ? data.owner.login : 'unknow'}</span>
      </div>
      <h2 className="nameRepo">Repozitory: {data.name}</h2>
      <div className="langStar">
        <span className="language">
          <b>language: {data.language ? data.language : "unknow"}</b>
        </span>
        <span className="star">{data.stargazers_count}</span>
      </div>
      <div className="topicsDiv">
        {data.topics.map((e) => (
          <span key={e} className="topics">
            {e}
          </span>
        ))}
      </div>
      <p className="description">
        <b>Описание:</b> {data.description}
      </p>
      <p className="description">
        <b>Ссылка на GIT:</b>{" "}
        <a
          style={{ color: "black", textDecoration: "none" }}
          href={data.html_url}
          target="_blank"
        >
          {data.html_url}
        </a>
      </p>
    </div>
  );
}
