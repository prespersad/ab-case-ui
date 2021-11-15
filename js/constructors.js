import { setAttributes } from './helpers.js';

setAttributes();

// Div Module

export class Div {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.className = obj.className;
        this.classNameModifier = obj.classNameModifier;
        this.hTag = obj.hTag;
        this.text = obj.text;
        this.dataToggle = obj.dataToggle;
        this.dataReveal = obj.dataReveal;
    }

    div() {
        // Select parent node
        const qs = document.querySelector(this.querySelector);

        // Create element: div
        const div = document.createElement('div');
        div.classList.add(this.className, `${this.className}--${this.classNameModifier}`);
        if (this.dataReveal !== undefined) {
            setAttributes(div, {
                'data-toggle': 'reveal',
                'data-reveal' : this.dataReveal
            });
        }
        qs.appendChild(div);

        // Create element: htag
        const heading = document.createElement(this.hTag);
        heading.classList.add('heading');
        heading.textContent = this.text;
        div.appendChild(heading);
    }
}

// Tab Pane Module
export class TabPane {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.id = obj.id;
        this.title = obj.title;
    }

    tabPane() {
        // Select parent node
        const tabContent = document.querySelector(this.querySelector);

        // Create element: div
        const div = document.createElement('div');
        div.classList.add('tab-pane');
        div.setAttribute('id', this.id);
        tabContent.appendChild(div);

        // Create element: H3 
        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        div.appendChild(h3);
    }
}

// Section Module
export class Section {
    constructor(obj) {
        this.className1 = obj.className1;
        this.classModifier = obj.classModifier;
    }

    section() {
        const form = document.querySelector('form');

        // Create element: section
        const section = document.createElement('section');
        section.classList.add(this.className1, `${this.className1}--${this.classModifier}`);
        form.appendChild(section);
    }
}

// Input Field Module
export class InputField {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.className = obj.tabPaneclassName;
        this.classModifierLabel =  obj.classModifierLabel;
        this.labelFor = obj.labelFor;
        this.labelText =  obj.labelText;
        this.classModifierInput =  obj.classModifierInput;
        this.type = obj.type;
        this.name = obj.name;
        this.id = obj.id;
        this.placeholder = obj.placeholder;
    }

    inputField() {
        const qs = document.querySelector(this.querySelector);

        // Div
        const div = document.createElement('div');
        div.classList.add('field-container', `field-container--${this.className}`);
        qs.appendChild(div);

        // Label
        const label = document.createElement('label');
        label.classList.add(this.className, `${this.className}--${this.classModifierLabel}`);
        label.setAttribute('for', this.labelFor);
        label.textContent = this.labelText;
        div.appendChild(label);

        // Input
        const input = document.createElement('input');
        input.classList.add(this.className, `${this.className}--${this.classModifierInput}`)
        setAttributes(input, {
            'type': this.type,
            'name': this.name,
            'id': this.id
            
        });
        if (this.placeholder !== undefined) {
            input.setAttribute('placeholder', this.placeholder);
        }
        div.appendChild(input);

        // Optional div
        if (input.getAttribute('type') === 'file') {
            const divFileName = document.createElement('div');
            divFileName.classList.add('filename');
            divFileName.textContent = '//..';
            div.appendChild(divFileName);
        } else {
            return;
        }
    }
}

// Select Module
export class SelectField {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.className = obj.className;
        this.classModifierLabel = obj.classModifierLabel;
        this.labelFor = obj.labelFor;
        this.labelText = obj.labelText;
        this.classModifierSelect = obj.classModifierSelect;
        this.name = obj.name;
        this.id = obj.id;
        this.text = obj.text;
        this.optionList = obj.optionList;
    }

    selectField() {
        const qs = document.querySelector(this.querySelector);

        // Div
        const div = document.createElement('div');
        div.classList.add('field-container', `field-container--${this.className}`);
        qs.appendChild(div);

        // Label
        const label = document.createElement('label');
        label.classList.add(this.className, `${this.className}--${this.classModifierLabel}`);
        label.setAttribute('for', this.labelFor);
        label.textContent = this.labelText;
        div.appendChild(label);

        // Select
        const select = document.createElement('select');
        select.classList.add(this.className, `${this.className}--${this.classModifierSelect}`);
        setAttributes(select, {
            'name': this.name,
            'id': this.id
        });
        div.appendChild(select);

        // Option Default
        const optionDef = document.createElement('option');
        setAttributes(optionDef, {
            'value': '',
        });
        optionDef.textContent = this.text;
        select.appendChild(optionDef);

        // Options List
        if (this.optionList !== undefined) {
            const arr = this.optionList;
            arr.forEach((item) => {
                const option = document.createElement('option');
                option.setAttribute('value', item.code);
                option.textContent = item.name;
                select.appendChild(option);
            });
        }
    }
    
}

export class CheckInputs {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.className = obj.className;
        this.headingText = obj.headingText;
        this.labelText = obj.labelText;
        this.type = obj.type;
        this.classModifierInput = obj.classModifierInput;
        this.classModifierLabel = obj.classModifierLabel;
    }

    checkinputs() {
        const qs = document.querySelector(this.querySelector);

        // Main Div
        const div = document.createElement('div');
        div.classList.add('field-container', `field-container--${this.className}`);
        qs.appendChild(div);

        // Header
        if (this.headingText !== undefined) {
            const heading3 = document.createElement('h3');
            heading3.classList.add('heading');
            heading3.textContent = this.headingText;
            div.appendChild(heading3);
        }

        // Inputs
        const arr = this.labelText;
        arr.forEach((item) => {
            // Child Div
            const divL2 = document.createElement('div');
            divL2.classList.add(`field-container--${this.type}`);
            div.appendChild(divL2);

            // Input
            const input = document.createElement('input');
            input.classList.add(this.className, `${this.className}--${this.classModifierInput}`)
            setAttributes(input, {
                'type': this.type,
                'name': item.name,
                'id': item.attr,
                'value': item.labelText.toLowerCase()
            });
            if (item.dataLink !== undefined) {
                input.setAttribute('data-link', item.dataLink)
            }
            divL2.appendChild(input);

            // Label
            const label = document.createElement('label');
            label.classList.add(this.className, `${this.className}--${this.classModifierLabel}`);
            label.setAttribute('for', item.attr);
            label.textContent = item.labelText;
            divL2.appendChild(label);
        });
    }
}

// Section Buttons
export class Button {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.className = obj.className;
        this.classNameModifier = obj.classNameModifier;
        this.type = obj.type;
        this.text = obj.text;
    }

    button() {
        const qs = document.querySelector(this.querySelector);

        // Div
        const div = document.createElement('div');
        div.classList.add('field-container', `field-container--${this.className}`);
        qs.appendChild(div);

        const button = document.createElement('button');
        button.classList.add('button', 'btn', `button--${this.classNameModifier}`);
        button.setAttribute('type', this.type);
        button.textContent = this.text;
        div.appendChild(button);
    }
    
}

// Header with optional Subheader
export class Header {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.className = obj.className;
        this.hTag = obj.hTag;
        this.textHeader = obj.textHeader;
        this.textPara = obj.textPara;
    }

    header() {
        const qs = document.querySelector(this.querySelector);

        // Div
        const div = document.createElement('div');
        div.classList.add('field-container', `field-container--${this.className}`);
        qs.appendChild(div);

        // Heading
        const heading = document.createElement(this.hTag);
        heading.classList.add('heading', `header__${this.className}`);
        heading.textContent = this.textHeader;
        div.appendChild(heading);

        // Additional Textblock
        if (this.textPara !== undefined) {
            const para = document.createElement('p');
            para.classList.add('paragraph', `paragraph__${this.className}`);
            para.textContent = this.textPara;
            div.appendChild(para);
        }
    }
    
}

// Summary List
export class SummaryList {
    constructor(obj) {
        this.querySelector = obj.querySelector;
        this.className = obj.className;
        this.hTag = obj.hTag;
        this.textHeader = obj.textHeader;
        this.arrContent = obj.arrContent;
    }

    summaryList() {
        const qs = document.querySelector(this.querySelector);

        // Div
        const div = document.createElement('div');
        div.classList.add('summary-list-container', `summary-list-container--${this.className}`);
        qs.appendChild(div);

        // Heading
        const heading = document.createElement(this.hTag);
        heading.classList.add('heading', `header__${this.className}`);
        heading.textContent = this.textHeader;
        div.appendChild(heading);

        // UL
        const ul = document.createElement('ul');
        ul.classList.add('list', `list__${this.className}`);
        div.appendChild(ul);

        // LI
        const arr = this.arrContent;
        arr.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('item', `item--${this.className}`);
            li.textContent = `${item.liTitle}: ${item.liText}`;
            ul.appendChild(li);
        });
        
    }
}