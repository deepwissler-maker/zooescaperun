export const GameConfig = {
  CANVAS: {
    WIDTH: 1280,
    HEIGHT: 720,
    TARGET_FPS: 60
  },
  PHYSICS: {
    GRAVITY: 1200,      // Pixels par seconde²
    PROPULSION: -1800,  // Force vers le haut
    MAX_FALL_SPEED: 800,
    SCROLL_SPEED: 350   // Vitesse de défilement du decor
  },
  COLORS: {
    SKY_TOP: '#1e3a8a',
    SKY_BOTTOM: '#3b82f6',
    GROUND: '#15803d',
    WALL: '#374151'
  }
};
