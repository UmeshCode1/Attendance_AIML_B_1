import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
  rollNo: string;
  attendance: boolean;
}

const AttendanceApp = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Khushi Kumari", rollNo: "75", attendance: false },
    { id: 2, name: "Kinshuk Verma", rollNo: "76", attendance: false },
    { id: 3, name: "Mahak Agrawal", rollNo: "77", attendance: false },
    { id: 4, name: "Mahak Tiwari", rollNo: "78", attendance: false },
    { id: 5, name: "Mahak Upadhyay", rollNo: "79", attendance: false },
    { id: 6, name: "Manjeerika Kushwaha", rollNo: "80", attendance: false },
    { id: 7, name: "Mann Patidar", rollNo: "81", attendance: false },
    { id: 8, name: "Mohammad Qazim", rollNo: "82", attendance: false },
    { id: 9, name: "Mohit Nagpure", rollNo: "83", attendance: false },
    { id: 10, name: "Mohit Rao", rollNo: "84", attendance: false },
    { id: 11, name: "Mozammil Hussain", rollNo: "85", attendance: false },
    { id: 12, name: "Nandani Sahu", rollNo: "86", attendance: false },
    { id: 13, name: "Navin Kumar", rollNo: "87", attendance: false },
    { id: 14, name: "Nikhil Singh", rollNo: "88", attendance: false },
    { id: 15, name: "Nimisha Kumari", rollNo: "89", attendance: false },
    { id: 16, name: "Nisha Sahu", rollNo: "90", attendance: false },
    { id: 17, name: "Omika Singh", rollNo: "91", attendance: false },
    { id: 18, name: "Parul Ajit", rollNo: "92", attendance: false },
    { id: 19, name: "Pavitra Gaikwad", rollNo: "93", attendance: false },
    { id: 20, name: "Piyush Shrivastava", rollNo: "94", attendance: false },
    { id: 21, name: "Prabhat Raushan", rollNo: "95", attendance: false },
    { id: 22, name: "Prabhat Sharma", rollNo: "96", attendance: false },
    { id: 23, name: "Prakhar Rangrej", rollNo: "97", attendance: false },
    { id: 24, name: "Prakhar Sahu", rollNo: "98", attendance: false },
    { id: 25, name: "Pranjal Gupta", rollNo: "99", attendance: false },
    { id: 26, name: "Prince Kumar", rollNo: "101", attendance: false },
    { id: 27, name: "Pritish Mandal", rollNo: "102", attendance: false },
    { id: 28, name: "Priyanka Rajput", rollNo: "103", attendance: false },
    { id: 29, name: "Priyanshu Raj", rollNo: "104", attendance: false },
    { id: 30, name: "Radheshyam Bathri", rollNo: "105", attendance: false },
    { id: 31, name: "Rahil Dadkhan", rollNo: "106", attendance: false },
    { id: 32, name: "Rani Dogne", rollNo: "107", attendance: false },
    { id: 33, name: "Reshu Singh Chandel", rollNo: "108", attendance: false },
    { id: 34, name: "Ritiksha Keshav Bagde", rollNo: "109", attendance: false },
    { id: 35, name: "Riya Dubey", rollNo: "110", attendance: false },
    { id: 36, name: "Rohit Singh Narwariya", rollNo: "111", attendance: false },
    { id: 37, name: "Sadaf Ali", rollNo: "112", attendance: false },
    { id: 38, name: "Sagar Choubey", rollNo: "113", attendance: false },
    { id: 39, name: "Sakshi Khandait", rollNo: "114", attendance: false },
    { id: 40, name: "Sakshi Uprale", rollNo: "115", attendance: false },
    {
      id: 41,
      name: "Samarth Vishal Retrekar",
      rollNo: "116",
      attendance: false,
    },
    { id: 42, name: "Saniya Khan", rollNo: "117", attendance: false },
    { id: 43, name: "Sankarshan Singhpatel", rollNo: "118", attendance: false },
    { id: 44, name: "Sanskriti Jain", rollNo: "119", attendance: false },
    { id: 45, name: "Sarthak Shrivastava", rollNo: "120", attendance: false },
    { id: 46, name: "Sarthak Verma", rollNo: "121", attendance: false },
    { id: 47, name: "Satyam Dhakad", rollNo: "122", attendance: false },
    {
      id: 48,
      name: "Shantanu Ravindra Soni",
      rollNo: "123",
      attendance: false,
    },
    { id: 49, name: "Shikha Meena", rollNo: "124", attendance: false },
    { id: 50, name: "Shiron John", rollNo: "125", attendance: false },
    { id: 51, name: "Shivam Dubey", rollNo: "126", attendance: false },
    { id: 52, name: "Shivam Jain", rollNo: "127", attendance: false },
    {
      id: 53,
      name: "Shivanshu Singh Parihar",
      rollNo: "129",
      attendance: false,
    },
    { id: 54, name: "Shorya Gupta", rollNo: "130", attendance: false },
    { id: 55, name: "Shreyansh Paliwal", rollNo: "131", attendance: false },
    { id: 56, name: "Siddharth Patel", rollNo: "132", attendance: false },
    { id: 57, name: "Sumit Goswami", rollNo: "133", attendance: false },
    {
      id: 58,
      name: "Sri Sai Harshavardhan Tadi",
      rollNo: "134",
      attendance: false,
    },
    { id: 59, name: "Tanishka Jain", rollNo: "135", attendance: false },
    { id: 60, name: "Tanmay Chourasia", rollNo: "136", attendance: false },
    { id: 61, name: "Tejaswani Agrawal", rollNo: "137", attendance: false },
    { id: 62, name: "Uday Kumrawat", rollNo: "138", attendance: false },
    { id: 63, name: "Umar Khan", rollNo: "139", attendance: false },
    { id: 64, name: "Umesh Patel", rollNo: "140", attendance: false },
    { id: 65, name: "Vipul Rajput", rollNo: "141", attendance: false },
    { id: 66, name: "Vishal Kumar", rollNo: "142", attendance: false },
    { id: 67, name: "Vivek Kadve", rollNo: "143", attendance: false },
    { id: 68, name: "Vivek Kushwah", rollNo: "144", attendance: false },
    { id: 69, name: "Yajush Dubey", rollNo: "145", attendance: false },
    { id: 70, name: "Yashdeep Rathore", rollNo: "146", attendance: false },
  ]);

  const [date, setDate] = useState("2024-01-01");
  const [subject, setSubject] = useState("AI");
  const [extraPresentStudents, setExtraPresentStudents] = useState<string[]>(
    []
  );

  const handleAttendanceChange = (id: number) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, attendance: !student.attendance }
          : student
      )
    );
  };

  const addExtraPresentStudent = () => {
    const name = prompt("Enter student name");
    if (name) {
      setExtraPresentStudents([...extraPresentStudents, name]);
    }
  };

  const removeExtraPresentStudent = (index: number) => {
    setExtraPresentStudents(extraPresentStudents.filter((_, i) => i !== index));
  };

  const exportData = () => {
    const csvContent = `Name,Roll No,Attendance\n${students
      .map(
        (student) =>
          `${student.name},${student.rollNo},${
            student.attendance ? "Present" : "Absent"
          }`
      )
      .join("\n")}\n${extraPresentStudents
      .map((name) => `${name},,Present`)
      .join("\n")}`;
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AIML-B_${date}_${subject}.csv`);
    link.click();
  };

  const presentCount =
    students.filter((student) => student.attendance).length +
    extraPresentStudents.length;
  const absentCount =
    students.length - students.filter((student) => student.attendance).length;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-4xl font-bold text-blue-500">AIML-B Attendance</h1>
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          onClick={exportData}
        >
          Export Data
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <label className="text-lg mr-2">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200"
          />
        </div>
        <div className="flex items-center">
          <label className="text-lg mr-2">Subject:</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200"
          >
            <option value="AI">AI</option>
            <option value="OOPS">OOPS</option>
            <option value="DSA">DSA</option>
            <option value="IPS">IPS</option>
            <option value="TC">TC</option>
            <option value="AI LAB">AI LAB</option>
            <option value="DSA LAB">DSA LAB</option>
            <option value="PYTHON LAB">PYTHON LAB</option>
            <option value="OOPS LAB">OOPS LAB</option>
          </select>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Student Attendance</h2>
      <ul>
        {students.map((student) => (
          <li
            key={student.id}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <div className="flex items-center">
              <span className="text-lg">{student.name}</span>
              <span className="text-lg font-bold ml-2">({student.rollNo})</span>
            </div>
            <button
              className={`px-4 py-2 rounded-lg ${
                student.attendance
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
              onClick={() => handleAttendanceChange(student.id)}
            >
              {student.attendance ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold mb-4">Extra Present Students</h2>
      <ul>
        {extraPresentStudents.map((name, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <span className="text-lg">{name}</span>
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white"
              onClick={() => removeExtraPresentStudent(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="px-4 py-2 rounded-lg bg-green-500 text-white"
        onClick={addExtraPresentStudent}
      >
        Add Extra Present Student
      </button>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <span className="text-lg font-bold">Present:</span>
          <span className="text-lg ml-2">{presentCount}</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-bold">Absent:</span>
          <span className="text-lg ml-2">{absentCount}</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-lg ml-2">
            {students.length + extraPresentStudents.length}
          </span>
        </div>
      </div>
      <p className="text-lg text-gray-500 mt-4 text-center font-bold">
        Developed by{" "}
        <a href="https://github.com/UmeshCode1" target="_blank">
          UmeshCode1
        </a>
      </p>
    </div>
  );
};

export default AttendanceApp;
