const validateCreatedAt = (req, res, next) => {
    const { createdAt } = req.body.description;

    if(createdAt.length !== 10) {
        return res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
    }

    next();
}

module.exports = validateCreatedAt;