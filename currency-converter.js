//Define app variables
let container, currencyContainer1, currencyContainer2, currencyTitle1, currencyTitle2, currencySymbol1, currencySymbol2, convertCurrencyBtn, input, output
let inputCurrencyValue


//Function to generate a html element
const generateHtml = (el, id, className, html, placeholder) => {
    const elem = document.createElement(el);
    if (id) elem.id = id
    if (className) elem.className = className
    if (html) elem.innerHTML = html
    if (placeholder) elem.placeholder = placeholder
    return elem
}


//Function to generate all the app HTML elements
const generateAppHtml = () => {
    container = generateHtml('div', 'container')
    currencyContainer1 = generateHtml('div', 'currency-container-1')
    currencyContainer2 = generateHtml('div', 'currency-container-2')
    currencyTitle1 = generateHtml('div', 'currency-title-1', null, 'pounds')
    currencyTitle2 = generateHtml('div', 'currency-title-2', null, 'usd')
    input = generateHtml('input', 'currency-text-input', null, null, '100.00')
    currencySymbol1 = generateHtml('div', 'currency-symbol-1', null, '£')
    currencySymbol2 = generateHtml('div', 'currency-symbol-2', null, '$')
    output = generateHtml('div', 'currency-text-output', null, '130.86')
    convertCurrencyBtn = generateHtml('div', 'convert-btn', null,
        `<svg width="47" height="57" viewBox="0 0 47 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.5 5L23.5 52M23.5 52L5 33.5133M23.5 52L42 33.5133" stroke="#0A2E36" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    )
    inputContainer = generateHtml('div', 'input-container')
    outputContainer = generateHtml('div', 'output-container')
}

//Function to show the HTML on the browser page
//here we append all the elements to the container and the container to the app div
const showHtml = () => {

    container.appendChild(convertCurrencyBtn)
    container.appendChild(currencyContainer1)
    currencyContainer1.appendChild(currencyTitle1)
    currencyContainer1.appendChild(inputContainer)
    inputContainer.appendChild(input)
    inputContainer.appendChild(currencySymbol1)
    container.appendChild(currencyContainer2)
    currencyContainer2.appendChild(currencyTitle2)
    currencyContainer2.appendChild(outputContainer)
    outputContainer.appendChild(output)
    outputContainer.appendChild(currencySymbol2)
    document.getElementById('app').appendChild(container)
}

//Function to add all the event listeners we need
//this is a common pattern to use

const addAppListeners = () => {
    input.addEventListener('input', e => {
        inputCurrencyValue = e.target.value
    })


    convertCurrencyBtn.addEventListener('click', e => {
        if (inputCurrencyValue) {

            output.innerHTML = inputCurrencyValue * 1.31
        }
        // input = inputCurrencyValue
    })
}






//Function that renders the converted value on the page




//Here we call all our functions in the right order to generate the app
generateAppHtml()
showHtml()
addAppListeners()
