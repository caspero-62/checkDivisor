const checkDivisor = (param) => {
    //create an array of the numbers from one to that number
    let list = [];
    let i = 1;

    for (i = 1; i <= Number(param); i++) {
       list.push(i)
    }

    //mapping the newly replaced numbers to a new array
    list2 = list.map(num => {

        //checking divisibility by 2, 3, and 5
        if (Number(num) % 2 === 0 && Number(num) % 3 === 0 && Number(num) % 5 === 0) {
            return num = 'yu-gi-oh'
        } 

        //checking divisibility by 2 and 3
        if (Number(num) % 2 === 0 && Number(num) % 3 === 0) {
            return num = 'yu-gi'
        }

        //checking divisibility by 2 and 5
        if (Number(num) % 2 === 0 && Number(num) % 5 === 0) {
            return num = 'yu-oh'
        }

        //checking divisibility by 3 and 5
        if (Number(num) % 3 === 0 && Number(num) % 5 === 0) {
            return num = 'gi-oh'
        }

        //checking divisibility by 2
        if (Number(num) % 2 === 0) {
            return num = 'yu' 
        }

        //checking divisibility by 3
        if (Number(num) % 3 === 0) {
            return num = 'gi'
        }

        //checking divisibility by 5
        if (Number(num) % 5 === 0) {
            return num = 'oh'
        } 
        
        //leaving it unchanged if divisible by none
        else{
            return num
        }
    });

    return list2;
}

checkDivisor(100);