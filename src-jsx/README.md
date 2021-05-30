# src-jsx

This folder contains all the un-processed JavaScript files that will make up the client-side application.

This is powered by React translated through Webpack and Babel.

## Usage
cd E:\Code\flask
.\venv\Scripts\activate.bat

Switch directory to E:\Code\flask\src-jsx
Run `npm run build` to process all `.jsx` files and build a `../static/index.js` (the folder which Flask uses for static files).

cd ..
python app.py