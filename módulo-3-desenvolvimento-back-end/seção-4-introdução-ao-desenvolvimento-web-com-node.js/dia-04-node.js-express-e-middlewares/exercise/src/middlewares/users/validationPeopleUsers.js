const validationPeopleUsers = (req, res, next) => {
    const { email, password, firstName, phone } = req.body;

    if(!email || !password || !firstName || !phone) {
        return res.status(400).json({ message: "Campos ausentes!" })
    }

    next();
}

module.exports = validationPeopleUsers;
