function studentDetails(i) {
	const classDetails = {
		classTeacher: "Anjani",
		students: [
			{ name: "Anjali", roll: "1" },
			{ name: "Bhavya", roll: "2" },
			{ name: "Neha", roll: "3" },
			{ name: "Ayush", roll: "4" },
			{ name: "Rahul", roll: "5" },
		],
	};
	let arr = [];
	let students = classDetails.students;
	let student1 = students[i];
	if (student1) arr = Object.values(student1);
	else arr.push("Student Not Found!");
	console.log(arr);
}

studentDetails(3);
