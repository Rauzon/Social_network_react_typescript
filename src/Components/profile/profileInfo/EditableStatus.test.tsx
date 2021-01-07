import React from "react";
import {create} from "react-test-renderer";
import {EditableStatus} from "./EditableStatus";


describe("EditableStatus component", () => {
    test("Should return correct number of span", () => {
        const editableStatus = create(<EditableStatus status={'some status'} userId={'2'} updateStatus={() => {
        }}/>);
        const instance = editableStatus.root;
        const span = instance.findAllByType("span");
        expect(span.length).toBe(2);
    });
    test("Should return correct props value from status", () => {
        const editableStatus = create(<EditableStatus status={'some status'} userId={'2'} updateStatus={() => {
        }}/>);
        const instance = editableStatus.root;
        const span = instance.findAllByType("span");
        expect(span[1].props.children).toBe('some status');
    });
    test("Shouldn't find input", () => {
        const editableStatus = create(<EditableStatus status={'some status'} userId={'2'} updateStatus={() => {
        }}/>);
        const instance = editableStatus.root;
        expect(() => {
            const input = instance.findByType("input");
        }).toThrow();
    });
    test("Should be userId to correct value", () => {
        const editableStatus = create(<EditableStatus status={'some status'} userId={'2'} updateStatus={() => {
        }}/>);
        const instance = editableStatus.root;
        expect(instance.props.userId).toBe('2');
    });
});