const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <form action="/" method="POST">
                <label for="username">Name: </label>
                <input type="text" id="username" name="username" />
                <button type="submit">Add</button>
            </form>
        `);
    } else if (url === "/" && method === "POST") {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1] || '';
            const message = username ? `<h1>${decodeURIComponent(username).replace(/\+/g, ' ')}</h1>` : '';
            res.setHeader('Content-Type', 'text/html');
            res.end(`
                ${message}
                <form action="/" method="POST">
                    <label for="username">Name: </label>
                    <input type="text" id="username" name="username" />
                    <button type="submit">Add</button>
                </form>
            `);
        });
    }
});

module.exports = requestHandler