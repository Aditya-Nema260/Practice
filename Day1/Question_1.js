// 1. Print names of students who scored more than 50

const students = [
  { name: "Alice", marks: 40 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 80 }
];

function print_marks(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i].marks > 50){
            console.log(arr[i].marks)
        }
    }
}

// print_marks(students)


// 2. Use a do...while loop to keep adding 5 to a score until it reaches 100

function addMarks(arr){
    for(let i = 0; i < arr.length; i++){
        do{
            arr[i].marks += 5
        }while(arr[i].marks < 100){
            console.log(`Name - ${arr[i].name} , Marks - ${arr[i].marks}`)
        }
    }
}

addMarks(students)












