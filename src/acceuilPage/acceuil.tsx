import React from "react"

function App() {
    return<Acceuil {...acceuilData}/>;
}

export default App;

function Acceuil(props) {
    const {overLaGroup, headerTitre, sousTitre, bouttonChercher, recettesYummy, time, poke1, poke12, poke1Props } = props;

    return(
        <div className="container-center-horizontal">
            <div className="acceuil screen">
                div <div className="overlap-group" style={{backgroundImage: `url(${overLaGroup})`}}>
        <img className="star-1" src="star-1.svg" alt="Star 1" />
        <div className="effect"></div>   
        <div className="content">
            <div className="text">
             <h1 className="header-titre">{headerTitre}</h1>
            <div className="sous-titre">
        {sousTitre}
            </div>



                <</div>         

                </div>
                <img className="boutton-chercher" src={bouttonChercher} alt="boutton chercher"/>
                </div>
                <div className="recettes-yummy">
                    {recettesYummy}
                </div>
                <Poke1 src={poke1Props.src} />
                </div>
                </div>
    );
}

function Poke1(props:{src:string}):JSX.Element {


    return (<img className="poke-1" src={props.src} alt="poke 1" />);
}

const poke1Data = {
    src: "poke-1.png",};

    const acceuilData = {
        overlapGroup: "background.png",
        headerTitre: (
            
            
                "MES RECETTES" 
            
            
        ),
        sousTitre: "Trouve les meilleures recettes",
        bouttonChercher: "boutton-chercher.png",
        recettesYummy: "Recettes Yummy",
        poke1: "combined-shape.svg",
        poke1Props: poke1Data,
    };
