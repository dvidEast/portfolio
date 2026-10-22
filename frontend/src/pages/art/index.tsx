// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const artworks = [
    {
        title: "The Gaze",
        description: "A quiet study of presence—staring outward, yet deeply inward.",
        imageUrl: "/artwork/eye.jpg",
    },
    {
        title: "A Man Forgotten",
        description: "Character captured through beard, wrinkles, and silence.",
        imageUrl: "/artwork/beard.jpg",
    },
    {
        title: "Framed Growth",
        description: "Boxy edges meet delicate bloom. A portrait of quiet constraint.",
        imageUrl: "/artwork/box.jpg",
    },
    {
        title: "Gesture",
        description: "The tension of gesture—a hand mimicking form and force.",
        imageUrl: "/artwork/gun.jpg",
    // },
    // {
    //     title: "Renewal",
    //     description: "A sketch for a friend—soft light, clean lines, and new beginnings.",
    //     imageUrl: "/artwork/renew.jpg",
    // },
    // {
    //     title: "Flesh and Bone",
    //     description: "More than a skull—memento mori in black and white.",
    //     imageUrl: "/artwork/skull.jpg",
    // },
    {
        title: "Crowded",
        description: "A mind in motion. Chaotic, beautiful, overfull.",
        imageUrl: "/artwork/thoughts.jpg",
    },
];

export default function Art() {
    return (
        <div className="bg-neutral-100 min-h-screen">
            {/* <Navbar /> */}
            <main className="p-6 max-w-6xl mx-auto">
                <Link className="text-black" href='/'>&lt; HOME</Link>
                <h1 className="text-2xl font-semibold tracking-tight text-center mb-14 text-gray-900">
                    ARTWORK
                </h1>
                <div className="grid md:grid-cols-2 gap-12">
                {artworks.map((art, idx) => (
                    <div
                        key={idx}
                        className="rounded-3xl bg-gradient-to-br from-white to-neutral-50 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    >
                    <div className="relative w-full aspect-[4/3] rounded-t-3xl overflow-hidden bg-white">
                        <Image
                            src={art.imageUrl}
                            alt={art.title}
                            layout="fill"
                            objectFit="contain"
                            className="object-contain"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="uppercase text-1xl font-semibold text-gray-900 mb-2 tracking-tight">
                            {art.title}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">{art.description}</p>
                    </div>
                    </div>
                ))}
                </div>
                <footer className="mb-2 mt-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-gray-400 text-sm">© David Lim. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
}
