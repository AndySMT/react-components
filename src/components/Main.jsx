import champ from "../data/LoL_Data";
function Main() {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_30.jpg"
          alt="Caitlyn"
        />
        <div className="card-body">
          <h5 className="card-title">Caitlyn</h5>
          <p className="card-text">
            {`Renowned as its finest peacekeeper, Caitlyn is also Piltover's best
            shot at ridding the city of its elusive criminal elements. She is
            often paired with Vi, acting as a cool counterpoint to her partner's
            more impetuous nature. Even though she carries a one-of-a-kind
            hextech rifle, Caitlyn's most powerful weapon is her superior
            intellect, allowing her to lay elaborate traps for any lawbreakers
            foolish enough to operate in the City of Progress.`}
          </p>
          <a href="#" className="btn btn-primary">
            Shoppa lezzo
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
