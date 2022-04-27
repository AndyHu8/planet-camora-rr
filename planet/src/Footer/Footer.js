import "./Footer.css"

export default function Footer() {
    return (
        <div className="footerWrapper">
            <p>Alle Rechte und Bilder gehören <span onClick={() => window.open("https://www.planet-camora.com/", "_blank")}>© PLANET CAMORA 2022</span></p>
        </div>
    )
}