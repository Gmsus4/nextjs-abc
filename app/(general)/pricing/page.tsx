import type { Metadata } from "next"; //Escribimos type solo para el tipado

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['Pricing Page', 'Fernando', 'Precios']
};

export default function PricingPage(){
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-5xl">Pricing Page</span>
        </main>
    )
}