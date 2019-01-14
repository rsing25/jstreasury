//--->USING JSX COMPONENT that need some kind of build system webpack or babel
const content = 'Hello World'

// IN jsx once you put in curly braces you are in javascript you can use IIEF 

const element = (<div className="container">{ ( ()=> content )() } </div>)