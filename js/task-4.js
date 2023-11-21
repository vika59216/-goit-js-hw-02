function getShippingCost(country) {

let message = ``; 
    switch (getShippingCost) {
        case "China":
            price = 100;
          message = `Shipping to ${country} will cost ${price} credits`;
            break;
        

        
        case "Chile":
            message = `Shipping to Chile will cost 250 credits`;
            break;
        
        case 'Chile':
     price = 250;
     message = `Shipping to ${country} will cost ${price} credits`;
       

        
        case "Australia":
            price = 170;
           message = `Shipping to ${country} will cost ${price} credits`;
            break;
        
        
        
        case "Jamaica":
            price = 120;
          message = `Shipping to ${country} will cost ${price} credits`;
            break;
      

        
        default:
            message = `Sorry, there is no delivery to your country`;
            break;
        
         return `Shipping to ${country} will cost ${price} credits`;
        
    }
    
    return message;
   
}




console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 