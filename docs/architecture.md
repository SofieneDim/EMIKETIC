# Architecture

```
src
|
|___ modules
|   |
|   |___ feature-modules
|   |   |
|   |   |__ components
|   |   |__ api
|   |   |__ store
|   |   |  |__ actions
|   |   |  |__ constants
|   |   |  |__ reducers
|   |   |
|   |   |__ feature-module-container
|   | 
|   |
|   |___ common
|       |
|       |__ api
|       |__ components
|       |__ store 
|       |__ ...
|
|
|___ setup
|   |
|   |___ config
|   |
|   |___ routes
|   |
|   |___ store
|  
|
|__ ui
   |
   |___ ui - components
   |
   |___ common (common styles)
```

## 1. Features modules `src/modules`

Contains:
- Contains all features modules
- Every feature have it's own folders:
    - Api folder for api requests
    - Store: Contains actions, reducers and constants of this feature module
- Contains common folder for common store actions, api, components, auth, Layouts ..
- Each feature module could contains other modules

PS: Keep it simple, no more then four nested forders

```Notes: Try to apply React.lazy() when possible -- Check react code-splitting section```


## 2. Setup `src/setup`

Contains global project configuration:

- Config: for config files like env.js
- Routes: for app routes declarations
- Store: Store creation
- Helpers

## 3. UI `src/ui`

Contains:

- All global and dumb components like buttons, card, inputs
- Common: contain common styles, fonts ...  

