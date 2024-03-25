import type { Metadata } from "next"; //Escribimos type solo para el tipado

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Fernando', 'Información']
};

export default function AboutPage(){
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-5xl">About Page</span>
        </main>
    )
}