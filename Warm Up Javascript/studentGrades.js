function studentGrades(grade) {
	const students = [
		{ name: "Anjali", grade: 96 },
		{ name: "Navdeep", grade: 84 },
		{ name: "Varun", grade: 100 },
		{ name: "Bhavya", grade: 65 },
		{ name: "Shiva", grade: 90 },
	];
	return students.filter((student) => student.grade >= grade);
}

studentGrades(90).forEach((i) => console.log(i));
