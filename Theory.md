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
