
import http from 'http';
import app from './app.js';
import './config/mongoose.js';
import { config } from 'dotenv';


const PORT = process.env.PORT || 3000;
const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
