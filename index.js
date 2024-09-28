// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; // Using destructuring to omit the key
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
// Initial Employee Object
console.log('Initial Employee:', employee);

// Test non-destructive update
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'city', 'New York');
console.log('Updated Employee (non-destructive):', updatedEmployee);
console.log('Original Employee after non-destructive update:', employee);

// Test destructive update
const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'city', 'Los Angeles');
console.log('Updated Employee (destructive):', destructivelyUpdatedEmployee);
console.log('Original Employee after destructive update:', employee);

// Test non-destructive delete
const employeeAfterDelete = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log('Employee after non-destructive delete:', employeeAfterDelete);
console.log('Original Employee after non-destructive delete:', employee);

// Test destructive delete
const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log('Employee after destructive delete:', destructivelyDeletedEmployee);
