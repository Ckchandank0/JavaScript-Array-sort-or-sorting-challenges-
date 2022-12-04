# JavaScript-Array-sort-or-sorting-challenges-
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Challenges or Questions
_______________________________________________________________________________________________________________________________________________________________________
### 1. Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
Ex:
Input Case 1:  
input: [2,2,2,2,2] 
output:  5
solution : 2+ 2+ 2+ 2+ 2 = 10/5 ==> 2
it contain five 2 element

Input Case 2:  
input: [ 1,3,2,4,5]  
output:  1
solution : 1+ 3+ 2+ 4+ 5 = 15/5 ==> 3
it contain one 3 element


### 2. Given n email addresses of different domains, please send an email to the first address(in alphabetical order) of each domain. Please assume a function sendmail() to send the emails.
(note: give general solution).
Input Array = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'].

Expected Output - Below is the  order of address in which sendmail function is going to send mail.
                                abc@channelier.com
                                abc@yahoo.com
                                abc@gmail.com
                                abc@hotmail.com

### 3.How to sort emails array with JavaScript based on given importance object as number
function emailSort(a, b) {
    const importance = {"gmail.com": 1, "yahoo.com": 2, "rocketmail.com": 3, "ymail.com": 4};

    const importanceOfA = importance[a.split('@')[1]];
    const importanceOfB = importance[b.split('@')[1]];

    if (importanceOfA && !importanceOfB) return -1;
    if (importanceOfB && !importanceOfA) return 1;
    if (importanceOfA && importanceOfB) return importanceOfA - importanceOfB;

    return 0;
}

arra = [
    "juni1@rocketmail.com",
    "juni2@rocketmail.com",
    "juni3@rocketmail.com",
    "juni1@yahoo.com",
    "juni2@yahoo.com",
    "juni3@yahoo.com",
    "juni1@ymail.com",
    "juni3@ymail.com",
    "juni2@ymail.com",
    "juni1@gmail.com",
    "junaid4567@gmail.com",
    "juni4@gmail.com",
]
newArray = arra.sort(emailSort);
console.log(newArray)
//will return
// [ 'juni4@gmail.com', 
//   'junaid4567@gmail.com', 
//   'juni1@gmail.com', 
//   'juni1@yahoo.com', 
//   'juni2@yahoo.com', 
//   'juni3@yahoo.com', 
//   'juni2@rocketmail.com', 
//   'juni3@rocketmail.com', 
//   'juni1@rocketmail.com', 
//   'juni2@ymail.com', 
//   'juni3@ymail.com', 
//   'juni1@ymail.com' ] 


                                
### 4. Find the average of largest and smallest numbers in an unsorted integer array?
Eg. 
Input Case 1:  
input: [1, 4, 3, 2]
output:  2.5
solution : average = (1+4)/2 =>5/2 => 2.5

input: [1, 4, 3, 4]
output:  3
solution : average = (1+4 +4)/3 =>9/3 => 3

### 5.
