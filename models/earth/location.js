function getRenderCoordinates(coordinates){
    const lat = coordinates.latitude;
    const long = coordinates.longitude;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (180 + long) * (Math.PI / 180);
    const x = -(Math.sin(phi) * Math.cos(theta));
    const z = (Math.sin(phi) * Math.sin(theta));
    const y = Math.cos(phi);
    return {x,y,z}
}

export default getRenderCoordinates;
