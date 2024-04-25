const authMiddleware = (requiredRole) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Oturum açmış bir kullanıcı gereklidir.' });
        }
        if (requiredRole === 'admin' && !req.user.isAdmin) {
            return res.status(403).json({ message: 'Yalnızca admin kullanıcılar izin verilmiştir.' });
        }
        next();
    };
};

module.exports = authMiddleware;
