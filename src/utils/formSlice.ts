import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    form: [],
    formFields: [],
  },
  reducers: {
    addnewCreatedForm: (state, action) => {
      state.form.push(action.payload);
    },
    setForms: (state, action) => {
      state.form = action.payload;
    },
    editForm: (state, action) => {
      if (Array.isArray(action.payload)) {
        // Example: when loading form from DB
        state.formFields = action.payload;
      } else {
        // Example: when adding new element from sidebar
        state.formFields.push(action.payload);
      }
    },
    updateFieldLabel: (state, action) => {
      const { groupIndex, fieldIndex, newLabel } = action.payload;
      state.formFields[groupIndex].fields[fieldIndex].label = newLabel;
    },
    deleteFieldFromGroup: (state, action) => {
      const { groupIndex, fieldId } = action.payload;

      // Remove the field from the group
      const updatedFields = state.formFields[groupIndex].fields.filter(
        (field) => field.id !== fieldId
      );

      // If there are still fields, update the group
      if (updatedFields.length > 0) {
        state.formFields[groupIndex].fields = updatedFields;
      } else {
        // Else, remove the entire group
        state.formFields.splice(groupIndex, 1);
      }
    },
    deleteFormGroup: (state, action) => {
      state.formFields.splice(action.payload, 1);
    },
  },
});

export const {
  addnewCreatedForm,
  setForms,
  editForm,
  updateFieldLabel,
  deleteFieldFromGroup,
  deleteFormGroup,
} = formSlice.actions;
export default formSlice.reducer;
