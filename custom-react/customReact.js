
function customRender(reactElement,container){
    /* Method-1
    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute = ('href',reactElement.props.href);
    domElement.setAttribute = ('target',reactElement.props.target);
    container.append(domElement); */

    // Method-2
    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.append(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href:'https//google.com',
        target: '_blank'
    },
    children: 'click me to visit'
};
const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);