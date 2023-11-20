function getShippingCost(country) {
    switch (getShippingCost) {
        case "China":
            message = `Shipping to China will cost 100 credits`;
            break;
        return  message;

        
        case "Chile":
            message = `Shipping to Chile will cost 250 credits`;
            break;
        return  message;

        
        case "Australia":
            message = `Shipping to Australia will cost 170 credits`;
            break;
        return  message;

        
        
        case "Jamaica":
            message = `Shipping to Jamaica will cost 120 credits`;
            break;
        return  message;

        
        default:
            message = `Sorry, there is no delivery to your country`;
            break;
        
            return  message;


}
}




console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 