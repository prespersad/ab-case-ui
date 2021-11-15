import { setAttributes } from './helpers.js';
import { tabPaneCreate, createForm, formSectionS1, inputFieldName, selectFieldRegion, regionCreArr, statusRadioButtons, typeCheckboxes, formSectionS2, icDiv, inputFieldIT, selectFieldIF, inputFieldISrc, inputFieldIC, vcDiv, inputFieldVT, selectFieldVF, inputFieldVSrc, inputFieldVC, ecDiv, inputFieldET, selectFieldEF, inputFieldESrc, inputFieldEC, formSectionBR, buttonSave, modal, tabPaneSaved, divFG, selectFieldSCR, regionFiltArr, statusSavCheckboxes, typeSavCheckboxes, buttonSavFilter, divSum, newHeader } from './elements.js';
import { contentToggle, revealField, getInputData, lsFsData, displayModal, displayFileName, activateLink, displayResults, accInputSrc } from './functions.js';

setAttributes();

// PAGE CREATE CASES
if (window.location.pathname == '/index.html') {

    // ELEMENTS
    // Tab Pane: Create Case
    tabPaneCreate.tabPane();

    // Create Form: Creat a new A/B case
    createForm();

    // Section 1: General Form Section
    formSectionS1.section();

    // Section 1L Input Field Name
    inputFieldName.inputField();

    // Section 1: Select Field Region
    selectFieldRegion.selectField();

    // Section 1: Option Fields for the Select Field Region
    regionCreArr();

    // Section 1: Option Field Status
    statusRadioButtons.checkinputs();

    // Section 1: Checkbox Field Type
    typeCheckboxes.checkinputs();

    // Section 2: Form Section Reveal Cases Image, Video and/or Elements
    formSectionS2.section();

    // Section 2: Form Reveal Image Case
    icDiv.div();

    // Section 2: Form Reveal Image Case: Text Input Image Alt Text
    inputFieldIT.inputField();

    // Section 2: Form Reveal Image Case: Select Field Image Format
    selectFieldIF.selectField();

    // Section 2: Form Reveal Image Case: Text Input Image Source
    inputFieldISrc.inputField();

    // Section 2: Form Reveal Image Case: Text Input Image Class
    inputFieldIC.inputField();

    // Section 2: Form Reveal Video Case
    vcDiv.div();

    // Section 2: Form Reveal Video Case: Text Input Video Alt Text
    inputFieldVT.inputField();

    // Section 2: Form Reveal Video Case: Select Field Video Format
    selectFieldVF.selectField();

    // Section 2: Form Reveal Video Case: Text Input Video Source
    inputFieldVSrc.inputField();

    // Section 2: Form Reveal Video Case: Text Input Video Class
    inputFieldVC.inputField();

    // Section 2: Form Reveal Element Case
    ecDiv.div();

    // Section 2: Form Reveal Element Case: Text Input Element Alt Text
    inputFieldET.inputField();

    // Section 2: Form Reveal Element Case: Select Field Element Format
    selectFieldEF.selectField();

    // Section 2: Form Reveal Element Case: Text Input Element Source
    inputFieldESrc.inputField();
 
    // Section 2: Form Reveal Element Case: Text Input Element Class
    inputFieldEC.inputField();

    // Section 3: Button Row
    formSectionBR.section();

    // Section 3: Button Saven
    buttonSave.button();

    // Modal
    modal();

    // FUNCTIONS
    accInputSrc();

    // Display File Name for Input Type 'File
    displayFileName();

    /// Get Input Data
    getInputData();

    /// Local Storage of the Submitted Form Data
    lsFsData();

    /// Reveal Content
    revealField();

    // Display Modal
    displayModal();
}

// Activate Disabled Link after Form Submit
activateLink();

// PAGE SAVED CASES
if (window.location.pathname == '/saved-cases.html') {

    // ELEMENTS
    // Tab Pane: Saved Cases
    tabPaneSaved.tabPane();

    // Saved Cases: Filter group Container
    divFG.div();

    // Saved Cases: Filter element Region (Select)
    selectFieldSCR.selectField();

    // Saved Cases: Option Fields for Filter element Region (Select)
    regionFiltArr();

    // Saved Cases: Filter element Status (Checkboxes)
    statusSavCheckboxes.checkinputs();

    // Saved Cases: Filter element Type (Checkboxes)
    typeSavCheckboxes.checkinputs();

    // Saved Cases: Filter element Button Filter
    buttonSavFilter.button();

    // Saved Cases: Summary of Saved Cases
    divSum.div();

    // Saved Cases: Header
    newHeader.header();

    // FUNCTIONS
    // Display the list with the Saved Cases
    displayResults();

    /// Toggle Content
    contentToggle();

}