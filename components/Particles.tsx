import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { Engine, Container, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

type ParticlesComponentProps = {
  id?: string;
};

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  // Initialize the particles engine
  const particlesInit = async (engine: Engine): Promise<void> => {
    console.log(engine); // Optional: Debug the engine instance
    await loadSlim(engine); // Load slim engine
  };

 
  // Memoized particles options
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#FFF",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#000000",
        },
        links: {
          color: "#3f3f3f53",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={id}
      init={particlesInit}
      // loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
