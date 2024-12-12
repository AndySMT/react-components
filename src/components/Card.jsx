function Card({ champs }) {
  return (
    <>
      {champs.map((champ) => (
        <div key={champ.id} className="card">
          <img className="card-img-top" src={champ.img} alt={champ.nome} />
          <div className="card-body">
            <h5 className="card-title">{champ.nome}</h5>
            <p className="card-text">{champ.descrizione}</p>
            <a href="#" className="btn btn-primary">
              Shopa lezzo
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
