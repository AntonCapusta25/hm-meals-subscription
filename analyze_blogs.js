const fs = require('fs');
const path = require('path');
const { blogData } = require('./src/lib/blogData.js') || require('./src/lib/blogData.ts'); // Wait, we can't easily require TS.
