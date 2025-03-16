import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // Current mode state
    const [isEditMode, setMode] = useState<boolean>(false);

    // User's name state
    const [userName, setUserName] = useState<string>("Your Name");

    // User's student status state
    const [isStudent, setStudent] = useState<string>("student");

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group id="editStudentForm">
                <Form.Switch
                    type="switch"
                    label="Toggle Edit Mode"
                    checked={isEditMode}
                    onChange={() => {
                        setMode(!isEditMode);
                    }}
                ></Form.Switch>
            </Form.Group>

            {isEditMode ?
                <Form.Group>
                    <Form.Label>Edit Student Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setUserName(event.target.value);
                        }}
                    ></Form.Control>

                    <Form.Label>Student Status</Form.Label>
                    <Form.Check
                        inline
                        type="checkbox"
                        name="student"
                        label="Student"
                        value="student"
                        onChange={updateStudent}
                        checked={isStudent === "student"}
                    ></Form.Check>
                    <Form.Check
                        inline
                        type="checkbox"
                        name="student"
                        label="Not a Student"
                        value="not a student"
                        onChange={updateStudent}
                        checked={isStudent !== "student"}
                    ></Form.Check>
                </Form.Group>
            :   <span>
                    {userName} is {isStudent === "student" ? "" : "not"} a
                    student
                </span>
            }
        </div>
    );
}
