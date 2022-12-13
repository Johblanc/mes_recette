


export function NavAccueil(props : {navTo :string, texte:string}) : JSX.Element {
    return (
        <div>
            <a href={`#${props.navTo}`}>
                {props.texte}
            </a>
        </div>
    )
}