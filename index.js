function distanceFromHqInBlocks(pickUpLocation) {
    const headquarters = 42
  const distanceInBlocks = Math.abs(pickUpLocation - headquarters)
 return distanceInBlocks
}

distanceFromHqInBlocks('50')

 function    distanceFromHqInFeet(pickUpLocation) {
    const headquarters = 42
    const distanceInFeet = Math.abs(pickUpLocation - headquarters)
 return distanceInFeet * 264
 }
    distanceFromHqInFeet('43')

    function distanceTravelledInFeet(start, destination) {
    
    const numberOfFeetTravelled = Math.abs(destination - start)
    return numberOfFeetTravelled * 264
    }
    distanceTravelledInFeet('34', '38')
        
           
    function calculatesFarePrice(start, destination) {
        const distance = distanceTravelledInFeet(start, destination)
        
        
            if (distance <= 400) {
                return 0; 
            } else if (distance > 400 && distance <= 2000) {
                return (distance - 400) * 0.02; 
            } else if (distance > 2000 && distance <= 2500) {
                return 25; 
            } else {
                return 'cannot travel that far';
            }
     
            
    }
    