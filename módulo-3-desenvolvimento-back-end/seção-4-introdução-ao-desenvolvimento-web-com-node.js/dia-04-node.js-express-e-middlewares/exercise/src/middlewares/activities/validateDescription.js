const validateDescription = (req, res, next) => {
    const { rating, difficulty, createdAt } = req.body.description;

    if(!rating || !difficulty || !createdAt) {
        return res.status(400).json({ message: "É necessário preencher o campo description é completamente" })
    }
 
    next();
}

module.exports = validateDescription;