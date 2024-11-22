function printRecords(recordIds) {
	const printRecord = recordIds.map(function studentsId(id) {
		return studentRecords.find(function findRecord(record){
			return record.id === id 
		})
	}).filter(function(record){
		return record != null
	})

	const sortedRecord = printRecord.sort(function sortNames(a,b){
		return a.name.localeCompare(b.name)
	})
	sortedRecord.forEach(function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  });
	return sortedRecord
}

function paidStudentsToEnroll() {
  const paidButNotEnrolled = studentRecords.filter(function paidNotEnrolled(record){
		return record.paid && !currentEnrollment.includes(record.id)
	}).map(function studentsId(recordId){
		return recordId.id
	})
	console.log(paidButNotEnrolled);
	return [...currentEnrollment, ...paidButNotEnrolled];
}

function remindUnpaid(recordIds) {
  // TODO
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment)
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
