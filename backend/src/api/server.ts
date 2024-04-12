import app from './app.js';
import { MongoDB } from './configs/mongoose.config.js';

const PORT = process.env.PORT || 3000;

MongoDB.connect();

const server = app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
});

export default server;
