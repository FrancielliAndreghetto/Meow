import CardCoffe from "./cardcoffe";
import capuccino from "../imagens/image 4.png"

export default function Coffes() {
    return (
        <section>
            <div className="text-[#3C0E0E] flex flex-col justify-center items-center text-center gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl">Cafés</h1>
                    <p className="text-base w-[550px]">Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomeados.</p>
                </div>
                <a className="" href="">Veja todos</a>
            </div>
            <div>
                <CardCoffe Color="default" imageUrl={capuccino} preco="R$ 24,00" name="Capuccino" description="café expresso, leite evaporado, espuma e um toque de caramelo"/>
            </div>
        </section>
    )
}