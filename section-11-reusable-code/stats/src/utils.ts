export const dateStringtoDate = (dateString: string): Date => {
    // 28/10/2018

    //we will split the date into an array that looks like ['28', '10', '2018']. The elements are strings. We would need to then 
    //iterate through the array converting each element to string. To do so, create a map (key value pair) of value strings that will return a number
    // return that number using parse into
    const dateParts = dateString.split('/').map((value: string): number => {        
        return parseInt(value);
    });    
    
    //when creating a new date, it's created as year, month, day. because the month is zero indexed -1 is needed to take 10 and subtract 1 to be october.
    return new Date(dateParts[2], dateParts[1]-1, dateParts[0])
}