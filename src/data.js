export const API_KEY ='AIzaSyD_GSBiKZ1m9zKlEMHmWOsot3KK-ZXvu6E';


export const value_converter =(value) =>{
    if(value>=1000000)
        {return Math.floor(value/1000000)+ "M"}

    if(value>=1000)
        {return Math.floor(value/1000)+ "k"}
    else{
        return value;
    }
}
