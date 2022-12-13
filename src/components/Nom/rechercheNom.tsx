import { useEffect } from "react"

export function RechercheNom() {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("www.themealdb.com/api/json/v1/1/search.php?f=a");
            const responseJson = await response.json();
            console.log(response.json);

        }
        fetchData();

    }, [] );

    
    return (
        <div>
            <form>
                <input type="text" placeholder="saisir nom" ></input>
                <button type="submit"></button>
            </form>
        </div>
    )
}