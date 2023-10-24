import Image from "next/image"
import imageheader from "../../imagens/Imagem header.png"
import logo from "../imagens/logo.png"

function NavBar() {
    return (
        <nav className="flex justify-between text-[#3C0E0E] text-lg font-normal mx-40">
            <ul className="flex items-center gap-6">
                <li><Image src={logo} alt="logo" className="w-36 h-36"/></li>
                <li className="text-[#1A1A1A] text-xl font-medium">Meow café</li>
                <li><a href="">Início</a></li>
                <li><a href="">Produtos</a></li>
                <li><a href="">Sobre</a></li>
            </ul>    
            <div className="flex items-center">
                <ul className="flex items-center gap-3">
                    <li><a href="">Login</a></li>
                    <button className="bg-[#431B1B] text-[#fff] w-32 h-11 rounded-3xl items-center">Delivery</button>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;