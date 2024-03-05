import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";
import { useCallback } from "react";

export default function Background() {
    const particlesInit = useCallback(async (main) => {
        await loadFirePreset(main);
    }, []);

    const options = {
        preset: "fire",
    };

    return (
        <Particles id="tsparticles" init={particlesInit} options={options} />
    );
}
