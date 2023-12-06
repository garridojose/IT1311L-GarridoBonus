import React, {useState} from 'react';


function Card(props) {
  const [isClicked, setIsClicked] = useState(false);

  const CardClick = () => {
    setIsClicked(!isClicked);
  };

  const card = `card ${isClicked ? 'clicked' : ''}`;

  return (
    <div className={card} onClick={CardClick}>
      <img className="card-image" src={props.pfp}></img>
      <h2>{props.name}</h2>
      <p>{props.id}</p>
      <p>{props.birthday}</p>
      <p>{props.quote}</p>
    </div>
  );
}

export default Card
