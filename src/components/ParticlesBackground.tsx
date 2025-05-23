
import React, { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import { Particles } from "react-particles";
import { Engine } from "tsparticles-engine";
import { useTheme } from '@/context/ThemeContext';

const ParticlesBackground = () => {
  const { isDarkMode } = useTheme();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              lineLinked: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: isDarkMode ? "#50E3C2" : "#33CCFF",
          },
          links: {
            color: isDarkMode ? "#33CCFF" : "#50E3C2",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
