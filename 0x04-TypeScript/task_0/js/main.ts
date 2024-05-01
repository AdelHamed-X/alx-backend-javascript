export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

const student1: Student = {
    firstName: 'Adel',
    lastName: 'Hamed',
    age: 27,
    location: 'Villa 362, 15 May City, Cairo'
};

const student2: Student = {
    firstName: 'Adel',
    lastName: 'Hamed',
    age: 27,
    location: 'Villa 362, 15 May City, Cairo'
};

const studentList: Array<Student> = [student1, student2];

export const renderTable = (studentList: Array<Student>): void => {
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);

    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');


    for (const student of studentList) {
        const studentRow = document.createElement('tr')
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', studentRow);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentList);
