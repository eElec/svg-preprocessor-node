# SVG Preprocessor

This library is aimed towards preprocessing SVGs to make sure that the styles of different SVGs do not clash with each other.

## Features
- [x] Replace class names with a randomly generated unique class name
- [ ] Replace id with an unique id.

## Installation

```bash
yarn add svg-preprocessor-node

or

npm install svg-preprocessor-node
```

## Usage

```JS
const svgProcessor = require('svg-preprocessor-node');
...
console.log(svgProcessor(svgString))
```

## Example
Input:
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="29.249" height="29.251" viewBox="0 0 29.249 29.251">
  <defs>
    <style>.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.25px;}</style>
  </defs>
  <g transform="translate(-3.375 -3.375)">
    <path class="a" d="M27,15.75V28.688A2.813,2.813,0,0,1,24.187,31.5H7.313A2.813,2.813,0,0,1,4.5,28.688V11.813A2.813,2.813,0,0,1,7.313,9H19.089" />
    <path d="M32.34,3.744a1.129,1.129,0,0,0-1.633-.039l-.87.865a.563.563,0,0,0,0,.8l.8.8a.563.563,0,0,0,.8,0l.848-.844a1.144,1.144,0,0,0,.06-1.574Z" />
    <path d="M28.079,6.328,15.386,19a.633.633,0,0,0-.162.276l-.588,1.749a.275.275,0,0,0,.342.342l1.747-.587A.633.633,0,0,0,17,20.616l12.671-12.7a.633.633,0,0,0,0-.89l-.7-.7a.633.633,0,0,0-.894,0Z" />
  </g>
</svg>
```

Output: 
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="29.249" height="29.251" viewBox="0 0 29.249 29.251">
  <defs>
    <style>.a_krnsdfvq {fill: none; stroke: #000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2.25px;}</style>
  </defs>
  <g transform="translate(-3.375 -3.375)">
    <path class="a_krnsdfvq" d="M27,15.75V28.688A2.813,2.813,0,0,1,24.187,31.5H7.313A2.813,2.813,0,0,1,4.5,28.688V11.813A2.813,2.813,0,0,1,7.313,9H19.089"/>
    <path d="M32.34,3.744a1.129,1.129,0,0,0-1.633-.039l-.87.865a.563.563,0,0,0,0,.8l.8.8a.563.563,0,0,0,.8,0l.848-.844a1.144,1.144,0,0,0,.06-1.574Z"/>
    <path d="M28.079,6.328,15.386,19a.633.633,0,0,0-.162.276l-.588,1.749a.275.275,0,0,0,.342.342l1.747-.587A.633.633,0,0,0,17,20.616l12.671-12.7a.633.633,0,0,0,0-.89l-.7-.7a.633.633,0,0,0-.894,0Z"/>
  </g>
</svg>
```

## License
[MIT](https://choosealicense.com/licenses/mit/)