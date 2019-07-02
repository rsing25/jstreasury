https://reactjs.org/docs/react-dom.html



The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

render()
hydrate()
unmountComponentAtNode()
findDOMNode()
createPortal()




1- ReactDOM.render() controls the contents of the container node you pass in. 
Any existing DOM elements inside are replaced when first called. 
Later calls use React’s DOM diffing algorithm for efficient updates.

ReactDOM.render() does not modify the container node (only modifies the children of the container). 
It may be possible to insert a component to an existing DOM node without overwriting the existing children.


2- 