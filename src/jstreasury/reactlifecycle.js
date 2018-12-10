/*
where an ideal, or “virtual”, representation of a UI is kept in memory 
and synced with the “real” DOM by a library such as ReactDOM. 
This process is called reconciliation.


https://reactjs.org/docs/react-component.html

1) render() 

The render() method is the only required method in a class component.
When called, it should examine this.props and this.state and return jsx;
render() will not be invoked if shouldComponentUpdate() returns false.

2) constructor()

React constructors are only used for two purposes:
Initializing local state by assigning an object to this.state.
Binding event handler methods to an instance.

You should not call setState() in the constructor().
 Instead, if your component needs to use local state, assign the initial state to this.state directly in the constructor:

constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}

3) componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
you may call setState() immediately in componentDidMount()

4) componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
This is also a good place to do network requests as long as you compare the current props to previous props 
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}


5 componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.

*/
