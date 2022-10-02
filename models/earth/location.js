function getRenderCoordinates(coordinates){
  const phi = (90 - coordinates.latitude) * (Math.PI / 180);
  const theta = (coordinates.longitude + 180) * (Math.PI / 180);
  const x = -(Math.sin(phi) * Math.cos(theta));
  const z = (Math.sin(phi) * Math.sin(theta));
  const y = Math.cos(phi);
  return {x,y,z}
}

export default getRenderCoordinates;
