import React from "react"
import student from "./student"
import StudentInfo from "./studentInfo"

export default function StuInfo(){
    return student.students.map((studentData  => {
        return <StudentInfo  sData={studentData} />
    }))
}