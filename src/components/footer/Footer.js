import './Footer.css';
import cafe from './coffee_37dp_E8EAED_FILL0_wght400_GRAD0_opsz40.png'
import celendar from './png (1).png'
import fastfood from './png.png'

export default function Footer() {
return (
    <div>
        <h1>Promating your business and sevices with Propel</h1>
        <p> A responsive, multi-page business template with everything you need propel your
            business</p>
            <div>
                <div>
                    <img src={cafe}></img>
                </div>
                <div>
                <img src={fastfood}></img>
                </div>
                <div>
                <img src={celendar} ></img>
                </div>
            </div>
    </div>
)
}

