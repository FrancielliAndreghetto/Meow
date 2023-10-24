import Image, { StaticImageData } from 'next/image';
import { ComponentProps } from 'react';
import Logo from "../../public/assets/logo/favicon.png";
import { tv, VariantProps } from 'tailwind-variants';

const cardCoffe = tv({
    base: `flex items-center justify-center flex-col w-[300px] h-[px] p-4 gap-3 border-solid rounded-3xl`,
    variants: {
        Color: {
            default: '#0000',
            red: 'bg-[#000]'
        },
        defaultVariants: {
            Color: 'default',
        },
    },
});

export type CardProps = ComponentProps<'div'> & VariantProps <typeof cardCoffe> & {
    preco: string,
    name: string,
    description: string,
    imageUrl: StaticImageData,
}

function CardCoffe({ preco, name, description, imageUrl, Color, ...rest}: CardProps) {
    return (
        <div className={cardCoffe({ Color })} {...rest}>
            <div className={`flex justify-center items-center`}>
                <Image
                    className={`w-60 h-80 border-solid rounded-3xl`}
                    src={imageUrl}
                    alt=""
                />
            </div>
            <div className={`flex text-center items-center flex-col w-11/12`}>
                <h1 className='text-base font-semibold'>{preco}</h1>
                <h1 className={`font-semibold text-2xl text-[#fff]`}>{name}</h1>
                <h2 className={`text-sm font-normal text-[#fff]`}>{description}</h2>
                <button className='bg-[#fff] text-[#000] text-base font-normal rounded-3xl w-64 h-8'>Delivery</button>
            </div>
        </div>
    )
}

export default CardCoffe;