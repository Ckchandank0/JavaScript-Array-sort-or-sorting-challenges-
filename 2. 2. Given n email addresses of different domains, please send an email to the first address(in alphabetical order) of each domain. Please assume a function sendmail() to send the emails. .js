function emailSort(a, b) {
    const importance = {"channelier.com": 1, "yahoo.com": 2, "gmail.com": 3, "hotmail.com": 4};

    const importanceOfA = importance[a.split('@')[1]];
    const importanceOfB = importance[b.split('@')[1]];

    if (importanceOfA && !importanceOfB) return -1;
    if (importanceOfB && !importanceOfA) return 1;
    if (importanceOfA && importanceOfB) return importanceOfA - importanceOfB;

    return 0;
}

arra = [
   'ghi@hotmail.com',
   'def@yahoo.com',
   'ghi@gmail.com',
   'abc@channelier.com',
   'abc@hotmail.com',
   'def@hotmail.com',
   'abc@gmail.com',
   'abc@yahoo.com',
   'def@channelier.com',
   'jkl@hotmail.com',
   'ghi@yahoo.com',
   'def@gmail.com'
]
newArray = arra.sort(emailSort);
console.log(newArray)

//solution
//["abc@channelier.com", "def@channelier.com", "def@yahoo.com", "abc@yahoo.com", "ghi@yahoo.com", "ghi@gmail.com", "abc@gmail.com", "def@gmail.com", "ghi@hotmail.com", "abc@hotmail.com", "def@hotmail.com", "jkl@hotmail.com"]
//
//
//
//
//
//
//
//
//
//
