import { setAttributes } from './helpers.js';
import * as cs from './constructors.js';

setAttributes();

// PAGE CREATE CASE
// Tab Pane: Create Case
export const tabPaneCreate = new cs.TabPane({
    querySelector : '#create-case',
    id : 'pane-create-case',
    title : 'Create a new A/B Case:'
});

// Form
export const createForm = () => {
    let tabPaneCreate = document.querySelector('#pane-create-case');
    let form = document.createElement('form');
    tabPaneCreate.appendChild(form);
}

// Section 1: General Form Section
export const formSectionS1 = new cs.Section({
    className1 : 'form-section',
    classModifier : 'step-1'
});

// Section 1: Input Field Name
export const inputFieldName = new cs.InputField({
    querySelector : '.form-section--step-1',
    tabPaneclassName : 'input-text',
    classModifierLabel : 'label',
    labelFor : 'case-name',
    labelText : 'Name',
    classModifierInput : 'field',
    type : 'text',
    name : 'case-name',
    id : 'case-name',
    placeholder : 'name of this A/B case',
    required : true
});

// Section 1: Select Field Region
export const selectFieldRegion = new cs.SelectField({
    querySelector: '.form-section--step-1',
    className: 'input-select',
    classModifierLabel: 'label',
    labelFor: 'case-region',
    labelText: 'Region',
    classModifierSelect: 'field',
    name: 'case-region',
    id: 'case-region',
    text: 'choose the region to apply',
    required: true
});

// Section 1: Option Fields for the Select Field Region
export const regionCreArr = async () => {
    let qs = document.querySelector('#pane-create-case #case-region');
    let url = './json/regions.json';
    try {
        let res = await fetch(url);
        let data = await res.json();
        data.forEach(item => {
            const option = document.createElement('option');
            option.setAttribute('value', item.code);
            option.textContent = item.name;
            qs.appendChild(option);
        });
    } catch (err) {
        console.error(err);
    }
}

// Section 1: Option Field Status
const statusArr = [
    {
        'labelText' : 'Active',
        'attr' : 'status-active',
        'name' : 'status'
    },
    {
        'labelText' : 'Inactive',
        'attr' : 'status-inactive',
        'name' : 'status'
    }
];
export const statusRadioButtons = new cs.CheckInputs({
    querySelector : '.form-section--step-1',
    className : 'input-check',
    headingText : 'Status:',
    labelText : statusArr,
    type : 'radio',
    classModifierInput : 'field',
    classModifierLabel : 'label',
    required : true
});

// Section 1: Checkbox Field Type
const typeCreArr = [
    {
        'labelText' : 'Image',
        'attr' : 'type-image-create',
        'name' : 'type',
        'dataLink' : 'type-image'
    },
    {
        'labelText' : 'Video',
        'attr' : 'type-video-create',
        'name' : 'type',
        'dataLink' : 'type-video'
    },
    {
        'labelText' : 'Element',
        'attr' : 'type-element-create',
        'name' : 'type',
        'dataLink' : 'type-element'
    }
];
export const typeCheckboxes = new cs.CheckInputs({
    querySelector : '.form-section--step-1',
    className : 'input-check',
    headingText : 'Choose the type:',
    labelText : typeCreArr,
    type : 'checkbox',
    classModifierInput : 'field',
    classModifierLabel : 'label',
    required : true
});

// Section 2: Form Section Reveal Cases Image, Video and/or Elements
export const formSectionS2 = new cs.Section({
    className1 : 'form-section',
    classModifier : 'step-2'
});

// Section 2: Form Reveal Image Case
export const icDiv = new cs.Div({
    querySelector : '.form-section--step-2',
    className : 'form-reveal',
    classNameModifier : 'image-case',
    hTag : 'h3',
    text : 'Image Case:',
    dataReveal : 'type-image'
});

// Section 2: Form Reveal Image Case: Text Input Image Alt Text
export const inputFieldIT = new cs.InputField({
    querySelector : '.form-reveal--image-case', 
    tabPaneclassName : 'input-text', 
    classModifierLabel : 'label', 
    labelFor : 'image-alt-text', 
    labelText : 'Image text', 
    classModifierInput : 'field', 
    type : 'text', 
    name : 'image-alt-text', 
    id : 'image-alt-text', 
    placeholder : 'text to add to alt attribute'
});

// Section 2: Form Reveal Image Case: Select Field Image Format
const imageFormatArr = [
    {
        'name' : 'PNG',
        'code' : 'png'
    },
    {
        'name' : 'JPG',
        'code' : 'jpg'
    }
];
export const selectFieldIF = new cs.SelectField({
    querySelector: '.form-reveal--image-case',
    className: 'input-select',
    classModifierLabel: 'label',
    labelFor: 'image-format',
    labelText: 'Format (image format)',
    classModifierSelect: 'field',
    name: 'image-format',
    id: 'image-format',
    text: 'choose',
    optionList: imageFormatArr
});

// Section 2: Form Reveal Image Case: Text Input Image Source
export const inputFieldISrc = new cs.InputField({
    querySelector : '.form-reveal--image-case', 
    tabPaneclassName : 'input-file', 
    classModifierLabel : 'label', 
    labelFor : 'image-source', 
    labelText : 'Image Source', 
    classModifierInput : 'field', 
    type : 'file', 
    name : 'image-source', 
    id : 'image-source', 
    //placeholder : '//..'
});

// Section 2: Form Reveal Image Case: Text Input Image Class
export const inputFieldIC = new cs.InputField({
    querySelector : '.form-reveal--image-case', 
    tabPaneclassName : 'input-text', 
    classModifierLabel : 'label', 
    labelFor : 'image-css-class', 
    labelText : 'Target element (CSS Class)', 
    classModifierInput : 'field', 
    type : 'text', 
    name : 'image-css-class', 
    id : 'image-css-class', 
    placeholder : 'css class of the target element'
});

// Section 2: Form Reveal Video Case
export const vcDiv = new cs.Div({
    querySelector : '.form-section--step-2',
    className : 'form-reveal',
    classNameModifier : 'video-case',
    hTag : 'h3',
    text : 'Video Case:',
    dataReveal : 'type-video' 
});

// Section 2: Form Reveal Video Case: Text Input Video Alt Text
export const inputFieldVT = new cs.InputField({
    querySelector : '.form-reveal--video-case', 
    tabPaneclassName : 'input-text', 
    classModifierLabel : 'label', 
    labelFor : 'video-alt-text', 
    labelText : 'Video text', 
    classModifierInput : 'field', 
    type : 'text', 
    name : 'video-alt-text', 
    id : 'video-alt-text', 
    placeholder : 'text for unsupported browsers'
});

// Section 2: Form Reveal Video Case: Select Field Video Format
export const videoFormatArr = [
    {
        'name' : 'MOV',
        'code' : 'quicktime'
    },
    {
        'name' : 'MP4',
        'code' : 'mp4'
    }
];
export const selectFieldVF = new cs.SelectField({
    querySelector: '.form-reveal--video-case',
    className: 'input-select',
    classModifierLabel: 'label',
    labelFor: 'video-format',
    labelText: 'Format (video format)',
    classModifierSelect: 'field',
    name: 'video-format',
    id: 'video-format',
    text: 'choose',
    optionList: videoFormatArr
});

// Section 2: Form Reveal Video Case: Text Input Video Source
export const inputFieldVSrc = new cs.InputField({
    querySelector : '.form-reveal--video-case', 
    tabPaneclassName : 'input-file', 
    classModifierLabel : 'label', 
    labelFor : 'video-source', 
    labelText : 'Video Source', 
    classModifierInput : 'field', 
    type : 'file', 
    name : 'video-source', 
    id : 'video-source', 
    //placeholder : '//..'
});

// Section 2: Form Reveal Video Case: Text Input Video Class
export const inputFieldVC = new cs.InputField({
    querySelector : '.form-reveal--video-case', 
    tabPaneclassName : 'input-text', 
    classModifierLabel : 'label', 
    labelFor : 'video-css-class', 
    labelText : 'Target element (CSS Class)', 
    classModifierInput : 'field', 
    type : 'text', 
    name : 'video-css-class', 
    id : 'video-css-class', 
    placeholder : 'css class of the target element'
});

// Section 2: Form Reveal Element Case
export const ecDiv = new cs.Div({
    querySelector : '.form-section--step-2',
    className : 'form-reveal',
    classNameModifier : 'element-case',
    hTag : 'h3',
    text : 'Element Case:',
    dataReveal : 'type-element' 
});

// Section 2: Form Reveal Element Case: Text Input Element Alt Text
export const inputFieldET = new cs.InputField({
    querySelector: '.form-reveal--element-case', 
    tabPaneclassName : 'input-text', 
    classModifierLabel : 'label', 
    labelFor : 'element-alt-text', 
    labelText : 'Element text', 
    classModifierInput : 'field', 
    type : 'text', 
    name: 'element-alt-text', 
    id : 'element-alt-text', 
    placeholder : 'text for unsupported browsers'
});

// Section 2: Form Reveal Element Case: Select Field Element Format
const elementTypeArr = [
    {
        'name' : 'Href',
        'code' : 'href'
    },
    {
        'name' : 'Button Category',
        'code' : 'btn-cat'
    }
];
export const selectFieldEF = new cs.SelectField({
    querySelector: '.form-reveal--element-case',
    className: 'input-select',
    classModifierLabel: 'label',
    labelFor: 'element-type',
    labelText: 'Element (button or link)',
    classModifierSelect: 'field',
    name: 'element-type',
    id: 'element-type',
    text: 'choose',
    optionList: elementTypeArr
});

// Section 2: Form Reveal Element Case: Text Input Element Source
export const inputFieldESrc = new cs.InputField({
    querySelector : '.form-reveal--element-case', 
    tabPaneclassName : 'input-text', 
    classModifierLabel : 'label', 
    labelFor : 'href-or-button-category', 
    labelText : 'Link action(href) / Button category (primary or secondary)', 
    classModifierInput : 'field', 
    type : 'text', 
    name : 'href-or-button-category', 
    id : 'href-or-button-category', 
    //placeholder : ''
});

// Section 2: Form Reveal Element Case: Text Input Element Class
export const inputFieldEC = new cs.InputField({
    querySelector : '.form-reveal--element-case', 
    tabPaneclassName : 'input-text', 
    classModifierLabel : 'label', 
    labelFor : 'element-css-class', 
    labelText : 'Target element (CSS Class)', 
    classModifierInput : 'field', 
    type : 'text', 
    name : 'element-css-class', 
    id : 'element-css-class', 
    placeholder : 'css class of the target element'
});

// Section 3: Button Row
export const formSectionBR = new cs.Section({
    className1 : 'form-section',
    classModifier : 'button-row'
});

// Section 3: Button Save
export const buttonSave = new cs.Button({
    querySelector : '.form-section--button-row', 
    className : 'button-row', 
    classNameModifier : 'save', 
    type : 'button', 
    text : 'Save'
});

export const modal = () => {
    let main = document.querySelector('.main-content');

    //
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal', 'modal--cases-summary');
    modalBody.setAttribute('id', 'modal');
    main.insertAdjacentElement('afterend', modalBody);

    let modalContainer = document.createElement('div');
    modalContainer.classList.add('modal__container');
    modalBody.appendChild(modalContainer);

    let modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    modalContainer.appendChild(modalContent);

    let modalHeading = document.createElement('h2');
    modalHeading.classList.add('heading');
    modalHeading.textContent = 'Summary of the case';
    modalContent.appendChild(modalHeading);

    let sumList = document.createElement('div');
    sumList.classList.add('summary');
    modalContent.appendChild(sumList);

    let ul = document.createElement('ul');
    ul.classList.add('summary__list');
    sumList.appendChild(ul);

    let arr = [
        {
            'liTitle' : 'Name',
            'liClass' : 'name'
        },
        {
            'liTitle' : 'Applicable region',
            'liClass' : 'region'
        },
        {
            'liTitle' : 'Status',
            'liClass' : 'status'
        },
        {
            'liTitle' : 'Type',
            'liClass' : 'type'
        },
        {
            'liTitle' : 'Details of the selectected type',
            'liClass' : 'details'
        }
    ];
    arr.forEach((item) => {
        let li = document.createElement('li');
        li.classList.add('item', `item--${item.liClass}`);
        li.innerHTML = `${item.liTitle}: <span></span>`;
        ul.appendChild(li);
    });

    // Buttons
    let btnRow = document.createElement('div');
    btnRow.classList.add('button-row');
    modalContent.appendChild(btnRow);

    let btnModify = document.createElement('button');
    btnModify.classList.add('button', 'btn', 'btn--default', 'button--modify');
    btnModify.setAttribute('type', 'button');
    btnModify.textContent = 'Modify';
    btnRow.appendChild(btnModify);

    let btnSubmit = document.createElement('button');
    btnSubmit.classList.add('button', 'btn', 'button--submit');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.textContent = 'Submit';
    btnRow.appendChild(btnSubmit);


}

// PAGE SAVED CASES
// Tab Pane: Saved Cases
export const tabPaneSaved = new cs.TabPane({
    querySelector : '#saved-cases',
    id : 'pane-saved-cases',
    title : 'Saved Cases:'
});

// Saved Cases: Filter group Container
export const divFG = new cs.Div({
    querySelector : '#pane-saved-cases',
    className : 'filter-group',
    classNameModifier : 'saved-cases'
});

// Saved Cases: Filter element Region (Select)
export const selectFieldSCR = new cs.SelectField({
    querySelector: '.filter-group',
    className: 'input-select',
    classModifierLabel: 'label',
    labelFor: 'case-region',
    labelText: 'Region',
    classModifierSelect: 'field',
    name: 'case-region',
    id: 'case-region',
    text: 'choose the region to apply'
});

// Saved Cases: Option Fields for Filter element Region (Select)
export const regionFiltArr = async () => {
    let data = JSON.parse(localStorage.getItem('fdSavedCases'));
    let qs = document.querySelector('#pane-saved-cases #case-region');
    if(data != null) {
        let unique = [];
        data.forEach(item => {
            if(item['case-region'] != '') {
                if(unique.indexOf(item['case-region']) < 0) {
                    unique.push(item['case-region']);
                    let option = document.createElement('option');
                    option.setAttribute('value', item['case-region']);
                    option.textContent = item['case-region-name'];
                    qs.appendChild(option);
                } else {
                    return;
                }
            }
        });
    }
}

// Saved Cases: Filter element Status (Checkboxes)
const statusSavArr = [
    {
        'labelText' : 'Active',
        'attr' : 'status-active-saved'
    },
    {
        'labelText' : 'Inactive',
        'attr' : 'status-inactive-saved'
    }
];
export const statusSavCheckboxes = new cs.CheckInputs({
    querySelector : '.filter-group',
    className : 'input-check',
    headingText : 'Status:',
    labelText : statusSavArr,
    type : 'checkbox',
    classModifierInput : 'field',
    classModifierLabel : 'label'
});

// Saved Cases: Filter element Type (Checkboxes)
const typeSavArr = [
    {
        'labelText' : 'Image',
        'attr' : 'type-image-saved'
    },
    {
        'labelText' : 'Video',
        'attr' : 'type-video-saved'
    },
    {
        'labelText' : 'Element',
        'attr' : 'type-element-saved'
    }
];
export const typeSavCheckboxes = new cs.CheckInputs({
    querySelector : '.filter-group',
    className : 'input-check',
    headingText : 'Choose the type:',
    labelText : typeSavArr,
    type : 'checkbox',
    classModifierInput : 'field',
    classModifierLabel : 'label'
});

// Saved Cases: Filter element Button Filter
export const buttonSavFilter = new cs.Button({
    querySelector : '.filter-group', 
    className : 'button-row', 
    classNameModifier : 'filter', 
    type : 'button', 
    text : 'Filter'
});

// Saved Cases: Summary of Saved Cases
export const divSum = new cs.Div({
    querySelector : '#pane-saved-cases',
    className : 'summary',
    classNameModifier : 'saved-cases'
});

// Saved Cases: Header
export const newHeader = new cs.Header({
    querySelector: '.summary',
    className: 'header',
    hTag: 'h2',
    textHeader: 'Summary of saved A/B cases:',
    //textPara: 'Below are the cases which are active for US region and of type Video.'
});

