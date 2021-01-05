import React from "react";
import {create} from "react-test-renderer";
import {EditableStatus} from "./EditableStatus";


describe("EditableStatus component", () => {
    test("Should return correct value of span", () => {
        const editableStatus = create(<EditableStatus status={'some status'} userId={'2'} updateStatus={() => {
        }}/>);
        const instance = editableStatus.root;
        const span = instance.findAllByType("span");
        expect(span.length).toBe(2);

    });
});