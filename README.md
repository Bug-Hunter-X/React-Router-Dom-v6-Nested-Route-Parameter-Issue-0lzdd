# React Router Dom v6 Nested Route Parameter Issue

This repository demonstrates a bug encountered when using nested routes and parameters in React Router Dom v6.  The issue manifests as routes failing to render correctly, resulting in a blank page instead of the expected component. The bug is likely related to the way parameters are handled within nested route definitions.

## Bug Description
The application utilizes nested routes, passing parameters between them. However, when navigating to a nested route with parameters, the component for that route fails to render.  This occurs despite the route being properly defined and the parameter being correctly passed.

## Solution
The solution involves carefully reviewing the route definitions, ensuring parameters are correctly handled in nested routes, and confirming correct usage of the 
`useParams()` hook or similar mechanisms to access route parameters within component functions. 