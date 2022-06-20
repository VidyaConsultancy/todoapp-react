### Routing using react-router-dom
**Router**
BrowserRouter => Router
Routes => here we define routes for our application
Route => to define a route with path and its associated component/element

**Navigation**
NavLink => to
Link => to

### Life Cycle Events/Methods
**Class Components**

- **Mounting**
    - constructor()
    - static getDerivedStateFromProps()
    - render()
    - componentDidMount()
- **Updating**
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
- **Unmounting**
    - componentWillUnmount
    
### Hooks
Hooks are available only for functional components.

- `useState()` to create state ~ `this.state`
- `useRef()` to create ref ~ `createRef`
- `useEffect()` ~ `componentDidMount, componentWillUnmount, componentDidUpdate`
- `useCallback()`
- `useReducer()`

## Redux
Central Store to manage state
**Redux Pattern**
action => dispatch => reducer/state => view => (event => action) => dispatch

**Implementation**
1. Install redux and react reduxt - `npm install redux react-redux`
2. Create a store
3. Link the store with the react app
4. Create reducer(s) with initial state
5. Link reducer(s) with the store
6. Connect components with the store
7. Dispatch action(s)/action creator(s) from the connected components

### Redux Store parts
- **reducer** is a function that get two parameters `state` and `action`. Based on action it manipulates the state and returns the updated state.
- **action** is an object with type and [payload] (optional) properties.

*Note*
Install below developer tools as chrome extension
- React developer tools
- Redux developer tools