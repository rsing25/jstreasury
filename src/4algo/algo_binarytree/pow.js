/* Function to calculate x raised to the power y in O(logn)*/
const power = (x,y)  => { 
    let temp; 
    if( y == 0) 
        return 1; 

    temp = power(x, y/2); 
    
    if (y%2 == 0) 
        return temp*temp; 
    else
        return x*temp*temp; 
} 