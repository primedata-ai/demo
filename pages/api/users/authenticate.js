const jwt = require('jsonwebtoken');
import getConfig from 'next/config';
import {v4 as uuidv4} from 'uuid';
import { apiHandler } from 'lib/api-handler';

const { serverRuntimeConfig } = getConfig();

// users in JSON file for simplicity, store in a db for production applications
const users = require('data/users.json');

function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return authenticate();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function authenticate() {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) throw 'Username or password is incorrect';

        // create a jwt token that is valid for 7 days
        const token = jwt.sign({ sub: email }, serverRuntimeConfig.secret, { expiresIn: '7d' });

        // return basic user details and token
        return res.status(200).json({
            ...user,
            password: uuidv4(),
            id: email,
            email: user.email,
            token
        });
    }
}

export default apiHandler(handler);