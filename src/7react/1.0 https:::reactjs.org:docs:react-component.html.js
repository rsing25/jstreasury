https://reactjs.org/docs/react-component.html

React.Component

To define a React component class, you need to extend React.Component:

The Component Lifecycle

=================================================================================================================
Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

1 constructor()
2 static static getDerivedStateFromProps(props, state)
3 render()
4 componentDidMount()



These methods are considered legacy and you should avoid them in new code:
UNSAFE_componentWillMount()


=================================================================================================================


Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

1 static static getDerivedStateFromProps(props, state)
2 shouldComponentUpdate()
3 render()
4 getSnapshotBeforeUpdate(prevProps, prevState)
5 componentDidUpdate()


These methods are considered legacy and you should avoid them in new code:

UNSAFE_componentWillUpdate()
UNSAFE_componentWillReceiveProps()=================================================================================================================


static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }


 componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logComponentStackToMyService(info.componentStack);
  } 