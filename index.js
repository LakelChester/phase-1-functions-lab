function distanceFromHqInBlocks(pickup) {
    let distanceFromHq = pickup - 42
        if(distanceFromHq < 0){
            return distanceFromHq * -1
        }
    return distanceFromHq
}

function distanceFromHqInFeet(blocks){
   return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, destination){
    let distanceTravelled = (destination - start) * 264
        if (distanceTravelled < 0){
            return distanceTravelled * -1
        }
    return distanceTravelled
}

function calculatesFarePrice(start, destination){
    
    let distanceTravelledPricing = distanceTravelledInFeet(start,destination)
    
    if (distanceTravelledPricing < 400){
        return 'Free sample!'
    
    } else if(distanceTravelledPricing > 400 && distanceTravelledPricing < 2000){
        return (distanceTravelledPricing - 400) * .02
    
    } else if(distanceTravelledPricing > 2000 && distancetravelledPricing < 2500){
        return 'Flat Fee'
    }
        return 'Cannot travel that far'
    
}

