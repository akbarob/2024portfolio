"use client";
import ParticleAnimation from "./components/ParticleAnimation";

const Home = () => {
    return (
        <div>
            <ParticleAnimation />
            <div className="absolute w-full h-full">
                {" "}
                <h1 className="text-white">Welcome to Next.js!</h1>
                <h2 className="text-4xl text-amber-900">AKbar</h2>
            </div>
        </div>
    );
};

export default Home;
