/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let length = students.length 
    while(length > 0){
        if(students[0] === sandwiches[0]){
            students.shift()
            sandwiches.shift()
            countStudents(students,sandwiches)
        }else{
            students.push(students.shift())
        }
        length--
    }

    return students.length
};
