import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // Current option state
    const [currentOption, setOption] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="optionSelector">
                <Form.Label>Select an Option from the Dropdown</Form.Label>
                <Form.Select
                    value={currentOption}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setOption(event.target.value);
                    }}
                >
                    {options.map((option: string) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>

            {currentOption === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
