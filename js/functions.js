// Toggle Content
export const contentToggle = () => {
    let toggleTrigger = document.querySelectorAll('.header__summary');

    toggleTrigger.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            let reveal = item.closest('.summary-list-container').querySelector('.list__summary');
            if (reveal.classList.contains('open')) {
                reveal.classList.remove('open');
            } else {
                reveal.classList.add('open');
            }
        })
    });
}

// Reveal Fields
export const revealField = () => {
    let checkboxes = document.querySelectorAll('[data-link]');

    function myFunction(e) {
        let dataLink = e.dataset.link;
        let dataReveal = document.querySelector(`[data-reveal=${dataLink}]`);
        let fields = dataReveal.querySelectorAll('input, select');
    
        if(e.checked == true){
            dataReveal.classList.add('show');
            fields.forEach(field => {
                field.required = true;
            });
        } else {
            dataReveal.classList.remove('show');  
            fields.forEach(field => {
                field.removeAttribute('required');
            });
        }
    }
    
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
          myFunction(checkbox)
        });
    });
}

// Forms inputs based on select
export const accInputSrc = () => {
    const reveals = document.querySelectorAll('.form-reveal');
    for (let reveal of reveals) {
        let select = reveal.querySelector('select');
        let inputs = reveal.querySelectorAll('input');
        let label = reveal.querySelector('label[for=href-or-button-category]');
        for(let input of inputs) {
            if(input.getAttribute('type') ==='file') {
                input.classList.add('disabled');
                select.addEventListener('change', () => {
                    let selected = select.value;
                    if(selected != '') {
                        input.classList.remove('disabled');
                        let prefix ='';
                        if(input.getAttribute('name') === 'image-source') {
                            prefix = 'image/';
                        }
                        if(input.getAttribute('name') === 'video-source') {
                            prefix = 'video/';
                        }
                        input.setAttribute('accept', prefix + selected);
                    } else {
                        input.classList.add('disabled');
                        input.removeAttribute('accept')
                    }
                });
            }
            if(input.getAttribute('name') === 'href-or-button-category') {
                input.classList.add('disabled');
                    select.addEventListener('change', () => {
                    let selected = select.value;
                    if(selected != '') {
                        input.classList.remove('disabled');
                        if(selected == 'href') {
                            input.setAttribute('type', 'url');
                            label.textContent = 'Link action (Href)';
                        } else {
                            input.setAttribute('type', 'text');
                            label.textContent = 'Category (Primary or Secondary)';
                        }
                    } else {
                        input.classList.add('disabled');
                        input.setAttribute('type', 'text');
                        label.textContent = 'Link action (Href)/Category (Primary or Secondary)'
                    }
                });                
            }
        }
    }
}

// Display File Name for Input Type 'File
export const displayFileName = () => {
    const fileInputs = document.querySelectorAll( '.input-file--field' );
    for(let fileInput of fileInputs) {
        let div = fileInput.nextElementSibling;
        fileInput.addEventListener('change', () => {
            let fileName = '';
            fileName =  fileInput.files[0].name;
            div.textContent = `//.. ${fileName}`;
        });
    }
}

// Get FormData
export const getFormData = () => {
    let btnSave = document.querySelector('.button--submit');
    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        let form = document.querySelector('form');
        let fd = new FormData(form);
        for(let [key, value] of fd.entries()) {
            if(value != '' && value != null && value != undefined) {
                console.log(key, value);
            }
        }
        
    });    
}

// Get Input Data
export const getInputData = () => {
    let btnSave = document.querySelector('.button--save');
    
    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        let form = document.querySelector('form');
        let fd = new FormData(form);
        
        // Case Name
        let caseName = fd.get('case-name');
        if(caseName != '') {
            let span = document.querySelector('.item--name span');
            span.textContent = '';
            span.textContent = caseName;
        }

        // Case Region
        let caseRegion = fd.get('case-region');
        if(caseRegion != '') {
            let span = document.querySelector('.item--region span');
            span.textContent = '';
            span.textContent = caseRegion;
        }

        // Status
        let caseStatus = fd.get('status');
        if(caseStatus != null) {
            let span = document.querySelector('.item--status span');
            span.textContent = '';
            span.textContent = caseStatus;
        }

        // Types
        let caseType = fd.getAll('type');
        if(caseType.length > 0) {
            let span = document.querySelector('.item--type span');
            span.textContent = '';
            let write = caseType.map(item => item).join(', ');
            span.textContent = write;
        }

        // Details
        //// Details Image Case
        const detailList = (() => {
            let span = document.querySelector('.item--details span');
            span.innerHTML = '';

            for(let details of caseType) {
                if(details === 'image') {
                    let ul = document.createElement('ul');
                    ul.classList.add('summary__detail-list', 'summary__detail-list--image');
        
                    let caseImageText = fd.get('image-alt-text');
                    if(caseImageText != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--text');
                        li.textContent = `Image Text: ${caseImageText}`;
                        ul.appendChild(li);   
                    }
        
                    let caseImageFormat = fd.get('image-format');
                    if(caseImageFormat != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--format');
                        li.textContent = `Image Format: ${caseImageFormat}`;
                        ul.appendChild(li);
                    }
        
                    let caseImageSource = fd.get('image-source');
                    if(caseImageSource.name != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--source');
                        li.textContent = `Image Source: ${caseImageSource.name}`;
                        ul.appendChild(li);
                    }
        
                    let caseImageClass = fd.get('image-css-class');
                    if(caseImageClass != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--css-class');
                        li.textContent = `Image CSS Class: ${caseImageClass}`;
                        ul.appendChild(li);
                    }
                    span.appendChild(ul);
                }
                if(details === 'video') {
                    let ul = document.createElement('ul');
                    ul.classList.add('.summary__detail-list', '.summary__detail-list--video');
        
                    let caseVideoText = fd.get('video-alt-text');
                    if(caseVideoText != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--text');
                        li.textContent = `Video Text: ${caseVideoText}`;
                        ul.appendChild(li);   
                    }
        
                    let caseVideoFormat = fd.get('video-format');
                    if(caseVideoFormat != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--format');
                        li.textContent = `Video Format: ${caseVideoFormat}`;
                        ul.appendChild(li);
                    }
        
                    let caseVideoSource = fd.get('video-source');
                    if(caseVideoSource.name != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--source');
                        li.textContent = `Video Source: ${caseVideoSource.name}`;
                        ul.appendChild(li);
                    }

                    let caseVideoClass = fd.get('video-css-class');
                    if(caseVideoClass != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--css-class');
                        li.textContent = `Video CSS Class: ${caseVideoClass}`;
                        ul.appendChild(li);
                    }
                    span.appendChild(ul);
                }
                if(details === 'element') {
                    let ul = document.createElement('ul');
                    ul.classList.add('.summary__detail-list', '.summary__detail-list--element');
        
                    let caseElementText = fd.get('element-alt-text');
                    if(caseElementText != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--text');
                        li.textContent = `Element Text: ${caseElementText}`;
                        ul.appendChild(li);   
                    }
        
                    let caseElementFormat = fd.get('element-type');
                    if(caseElementFormat != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--format');
                        li.textContent = `Element Format: ${caseElementFormat}`;
                        ul.appendChild(li);
                    }
        
                    let caseElementSource = fd.get('href-or-button-category');
                    if(caseElementSource != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--source');
                        li.textContent = `Element Source: ${caseElementSource}`;
                        ul.appendChild(li);
                    }
                    
                    let caseElementClass = fd.get('element-css-class');
                    if(caseElementClass != '') {
                        let li = document.createElement('li');
                        li.classList.add('item', 'item--css-class');
                        li.textContent = `Element CSS Class: ${caseElementClass}`;
                        ul.appendChild(li);
                    }
                    span.appendChild(ul);
                }
            }

        })();
    });
}

// Local Storage of the Submitted Form Data
export const lsFsData = () => {
    let btnSave = document.querySelector('.button--submit');
    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        let form = document.querySelector('form');
        let fd = new FormData(form);
        
        let imageSource = fd.get('image-source');
        fd.append('image-source', imageSource.name);

        let videoSource = fd.get('video-source');
        fd.append('video-source', videoSource.name);

        let types = fd.getAll('type');
        let joinTypes = types.map(item => item).join(', ');
        fd.append('type', joinTypes);

        let fdCase = {};
        fd.forEach(function(value, key){
            fdCase[key] = value;
        });

        let fdArr = localStorage.getItem('fdSavedCases') ? JSON.parse(localStorage.getItem('fdSavedCases')) : [];

        localStorage.setItem('fdSavedCases', JSON.stringify(fdArr));

        fdArr.push(fdCase);
        localStorage.setItem('fdSavedCases', JSON.stringify(fdArr));

        location.reload();

    });
}

// Activate Disabled Link after Form Submit
export const activateLink = () => {
    let ls = localStorage.getItem('fdSavedCases');
    let link = document.querySelector('#menu-item-saved-cases');
    if (ls != null) {
        link.setAttribute('href', 'saved-cases.html');
        link.classList.remove('button--disabled');
    } else {
        link.classList.add('button--disabled');
        link.setAttribute('href', 'javascript:void(0)');
    }
}

// Display Modal
export const displayModal = () => {
    // Open Modal
    const modalOpen = (() => {
        const btnSave = document.querySelector('.button--save');
        const modal = document.querySelector('.modal');
        btnSave.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
        });
    })();

    // Close Modal
    const modalClose = (() => {
        const btns = document.querySelectorAll('.button--modify, .button--submit');
        for (let btn of btns) {
            const modal = document.querySelector('.modal');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('show');
            });
        }
        
    })();
}

export const displayResults = () => {
    let data = JSON.parse(localStorage.getItem('fdSavedCases'));
    if(data != null) {
        data.forEach(item => {
            
            let savedCases = document.querySelector('.summary--saved-cases');
            let count = document.querySelectorAll('.summary-list-container').length;
            count = count + 1;

            let sum = document.createElement('div');
            sum.classList.add('summary-list-container', 'summary-list-container--summary');
            savedCases.appendChild(sum); 

            let sumHeader = document.createElement('h3');
            sumHeader.classList.add('heading', 'header__summary');
            sumHeader.textContent = 'A/B Case ' + count ;
            sum.appendChild(sumHeader);

            let ulListSum = document.createElement('ul');
            ulListSum.classList.add('list', 'list__summary')
            sum.appendChild(ulListSum);

            let liItemSum = document.createElement('li');
            liItemSum.classList.add('item', 'item--summary');
            liItemSum.textContent = `Name: ${item['case-name']}`;
            ulListSum.appendChild(liItemSum);

            let liItemName = document.createElement('li');
            liItemName.classList.add('item', 'item--case-name');
            liItemName.textContent = `Applicable region: ${item['case-region']}`;
            ulListSum.appendChild(liItemName);

            let liItemStatus = document.createElement('li');
            liItemStatus.classList.add('item', 'item--status');
            liItemStatus.textContent = `Status: ${item['status']}`;
            ulListSum.appendChild(liItemStatus);

            let liItemType = document.createElement('li');
            liItemType.classList.add('item', 'item--type');
            liItemType.textContent = `Type: ${item['type']}`;
            ulListSum.appendChild(liItemType);

            let liItemDetails = document.createElement('li');
            liItemDetails.classList.add('item', 'item--details');
            liItemDetails.textContent = `Details of the selectected type:`;
            ulListSum.appendChild(liItemDetails);

            let div = document.createElement('div');
            div.classList.add('item--details__list')
            liItemDetails.appendChild(div);

            if (item['type'].includes('image')) {
                let ulSumDetailList = document.createElement('ul');
                ulSumDetailList.classList.add('summary__detail-list', 'summary__detail-list--image');
                div.appendChild(ulSumDetailList)

                let li = document.createElement('li');
                li.classList.add('item', 'item-text');
                li.textContent = `Image Text: ${item['image-alt-text']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-format');
                li.textContent = `Image Format: ${item['image-format']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-source');
                li.textContent = `Image Source: ${item['image-source']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-css-class');
                li.textContent = `Image CSS Class: ${item['image-css-class']}`;
                ulSumDetailList.appendChild(li);
            } else {
                return;
            }

            if (item['type'].includes('video')) {
                let ulSumDetailList = document.createElement('ul');
                ulSumDetailList.classList.add('summary__detail-list', 'summary__detail-list--video');
                div.appendChild(ulSumDetailList)

                let li = document.createElement('li');
                li.classList.add('item', 'item-text');
                li.textContent = `Video Text: ${item['video-alt-text']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-format');
                li.textContent = `Video Format: ${item['video-format']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-source');
                li.textContent = `Video Source: ${item['video-source']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-css-class');
                li.textContent = `Video CSS Class: ${item['video-css-class']}`;
                ulSumDetailList.appendChild(li);
            } else {
                return;
            }

            if (item['type'].includes('element')) {
                let ulSumDetailList = document.createElement('ul');
                ulSumDetailList.classList.add('summary__detail-list', 'summary__detail-list--element');
                div.appendChild(ulSumDetailList)

                let li = document.createElement('li');
                li.classList.add('item', 'item-text');
                li.textContent = `Element Text: ${item['element-alt-text']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-format');
                li.textContent = `Element Type: ${item['element-type']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-source');
                li.textContent = `Element Source: ${item['href-or-button-category']}`;
                ulSumDetailList.appendChild(li);

                li = document.createElement('li');
                li.classList.add('item', 'item-css-class');
                li.textContent = `Element CSS Class: ${item['element-css-class']}`;
                ulSumDetailList.appendChild(li);
            } else {
                return;
            }
        });
    }
}


