const jwt = require('jsonwebtoken')

const authMiddleware = async(req, res, next) => {
    const token = req.cookies.token;

    if (!token) return res.status(400).json({ message: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
    } catch (error) {
        res.status(400).json({ message: "Token is not valid" });
    }
}

module.exports = authMiddleware;