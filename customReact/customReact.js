function reactRender(reactElement, maincontainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElement[prop] = reactElement.props[prop];
    }
    maincontainer.appendChild(domElement);
}

const reactElement ={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to go to Google',
}
const mainContainer = document.querySelector('#root');
  reactRender(reactElement, mainContainer);