function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerKmAboveLimit = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPerKmAboveLimit);
        
        if (demeritPoints <= maxDemeritPoints) {
            console.log(`Points: ${demeritPoints}`);
        } else {
            console.log("License suspended");
        }
    }
}

const carSpeed = 70;
calculateDemeritPoints(carSpeed);
