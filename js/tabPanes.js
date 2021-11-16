import * as el  from './elements.js';
import * as fn from './functions.js';

// Create Tab Pane: Create a New A/B Case
export const tpCreate = () => {
    let tcCreate = document.querySelector('#create-case');

    // PAGE CREATE CASES
    if (tcCreate) {

        // ELEMENTS
        // Tab Pane: Create Case
        el.tabPaneCreate.tabPane();

        // Create Form: Creat a new A/B case
        el.createForm();

        // Section 1: General Form Section
        el.formSectionS1.section();

        // Section 1L Input Field Name
        el.inputFieldName.inputField();

        // Section 1: Select Field Region
        el.selectFieldRegion.selectField();

        // Section 1: Option Fields for the Select Field Region
        el.regionCreArr();

        // Section 1: Option Field Status
        el.statusRadioButtons.checkinputs();

        // Section 1: Checkbox Field Type
        el.typeCheckboxes.checkinputs();

        // Section 2: Form Section Reveal Cases Image, Video and/or Elements
        el.formSectionS2.section();

        // Section 2: Form Reveal Image Case
        el.icDiv.div();

        // Section 2: Form Reveal Image Case: Text Input Image Alt Text
        el.inputFieldIT.inputField();

        // Section 2: Form Reveal Image Case: Select Field Image Format
        el.selectFieldIF.selectField();

        // Section 2: Form Reveal Image Case: Text Input Image Source
        el.inputFieldISrc.inputField();

        // Section 2: Form Reveal Image Case: Text Input Image Class
        el.inputFieldIC.inputField();

        // Section 2: Form Reveal Video Case
        el.vcDiv.div();

        // Section 2: Form Reveal Video Case: Text Input Video Alt Text
        el.inputFieldVT.inputField();

        // Section 2: Form Reveal Video Case: Select Field Video Format
        el.selectFieldVF.selectField();

        // Section 2: Form Reveal Video Case: Text Input Video Source
        el.inputFieldVSrc.inputField();

        // Section 2: Form Reveal Video Case: Text Input Video Class
        el.inputFieldVC.inputField();

        // Section 2: Form Reveal Element Case
        el.ecDiv.div();

        // Section 2: Form Reveal Element Case: Text Input Element Alt Text
        el.inputFieldET.inputField();

        // Section 2: Form Reveal Element Case: Select Field Element Format
        el.selectFieldEF.selectField();

        // Section 2: Form Reveal Element Case: Text Input Element Source
        el.inputFieldESrc.inputField();
    
        // Section 2: Form Reveal Element Case: Text Input Element Class
        el.inputFieldEC.inputField();

        // Section 3: Button Row
        el.formSectionBR.section();

        // Section 3: Button Saven
        el.buttonSave.button();

        // Modal
        el.modal();

        // FUNCTIONS
        fn.accInputSrc();

        // Display File Name for Input Type 'File
        fn.displayFileName();

        /// Get Input Data
        fn.getInputData();

        /// Local Storage of the Submitted Form Data
        fn.lsFsData();

        /// Reveal Content
        fn.revealField();

        // Display Modal
        fn.displayModal();
    }

}

// Create Tab Pane: Saved Cases
export const tpSave = () => {
    let tcSaved = document.querySelector('#saved-cases');

    // PAGE SAVED CASES
    if (tcSaved) {

        // ELEMENTS
        // Tab Pane: Saved Cases
        el.tabPaneSaved.tabPane();

        // Saved Cases: Filter group Container
        el.divFG.div();

        // Saved Cases: Filter element Region (Select)
        el.selectFieldSCR.selectField();

        // Saved Cases: Option Fields for Filter element Region (Select)
        el.regionFiltArr();

        // Saved Cases: Filter element Status (Checkboxes)
        el.statusSavCheckboxes.checkinputs();

        // Saved Cases: Filter element Type (Checkboxes)
        el.typeSavCheckboxes.checkinputs();

        // Saved Cases: Filter element Button Filter
        el.buttonSavFilter.button();

        // Saved Cases: Summary of Saved Cases
        el.divSum.div();

        // Saved Cases: Header
        el.newHeader.header();

        // FUNCTIONS
        // Display the list with the Saved Cases
        fn.displayResults();

        /// Toggle Content
        fn.contentToggle();

    }
    
}