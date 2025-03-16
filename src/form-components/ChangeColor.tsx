import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    // Current color state
    const [currentColor, colorSetter] = useState<string>("red");

    const COLORS: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((color: string) => {
                return (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="colors"
                        label={color}
                        value={color}
                        checked={currentColor === color}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            colorSetter(event.target.value);
                        }}
                        style={{ backgroundColor: color }}
                    ></Form.Check>
                );
            })}

            <span
                style={{ backgroundColor: currentColor }}
                data-testid="colored-box"
            >
                You have chosen {currentColor}.
            </span>
        </div>
    );
}
