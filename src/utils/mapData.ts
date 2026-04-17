"use client";

// Simple low-poly outline of Australia
export const AUSTRALIA_PATH = "M318,124 L350,85 L420,110 L480,180 L520,280 L480,450 L420,520 L300,550 L180,520 L100,450 L50,320 L80,180 L150,110 Z";

// Accurate Australia path (simplified) as a list of coordinates [x, y]
// Scaled to 0-1 range
export const australiaOutline = [
  [0.822, 0.222], [0.852, 0.252], [0.885, 0.291], [0.932, 0.407], 
  [0.962, 0.521], [0.957, 0.612], [0.915, 0.725], [0.835, 0.821], 
  [0.724, 0.881], [0.601, 0.892], [0.492, 0.901], [0.381, 0.882], 
  [0.282, 0.841], [0.182, 0.761], [0.121, 0.652], [0.082, 0.521], 
  [0.085, 0.382], [0.125, 0.221], [0.211, 0.121], [0.321, 0.081], 
  [0.452, 0.085], [0.582, 0.121], [0.712, 0.152], [0.822, 0.222]
];

// Melbourne: ~37.8° S, 144.9° E
// In our 0-1 coordinate system (where 0,0 is NW and 1,1 is SE roughly)
export const melbourneCoord = { x: 0.81, y: 0.83 };

export function generateMapPoints(count: number) {
  const points: { x: number; y: number; z: number }[] = [];
  
  // Point in polygon check for Australia silhouette
  // We'll use a simplified version: sample randomly and check if inside a basic poly
  const poly = [
    [210, 80], [350, 60], [450, 100], [540, 180], [550, 300], 
    [520, 420], [450, 480], [350, 500], [250, 490], [150, 460], 
    [80, 400], [50, 300], [60, 180], [120, 100]
  ];

  function isInside(x: number, y: number) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1];
        const xj = poly[j][0], yj = poly[j][1];
        const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
  }

  for (let i = 0; i < count; i++) {
    let x = 0, y = 0;
    let found = false;
    let attempts = 0;
    
    while (!found && attempts < 100) {
      x = 50 + Math.random() * 500;
      y = 50 + Math.random() * 450;
      if (isInside(x, y)) {
        found = true;
      }
      attempts++;
    }

    if (found) {
      points.push({
        x: (x - 300) / 100, // Normalize for Three.js space
        y: -(y - 250) / 100,
        z: (Math.random() - 0.5) * 0.5
      });
    }
  }

  return points;
}
