export const authorizeRole = (...roles) => {
    return async (req, res, next) => {
        if (!req.user) return res.status(401).json({ message: "Authentication required" });
        const userRole = req.user.role.toLowerCase()
        const allowedRoles = roles.map(role => role.toLowerCase());
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: "You don't have permission to perform this action" })
        }
        next();
    };
};