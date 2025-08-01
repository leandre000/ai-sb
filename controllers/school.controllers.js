import School from "../models/school.models.js";

export const createSchool = async (req, res) => {
    const { id } = req.user;
    const { name, admin, email, phone } = req.body;
    try {
        const school = new School({ name, admin: admin ? admin : id, email, phone });
        await school.save();
        return res.status(200).json({ message: "School created" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
};

export const updateSchool = async (req, res) => {
    const { id } = req.user;
    const { name, admin, email, phone } = req.body;
    try {
        const school = await School.findOne({ admin : id });
        if(!school) return res.status(404).json({ message : "You don't have any school under your id" });
        school.name = name ? name : school.name;
        school.admin = admin ? admin : school.admin;
        school.email = email ? email : school.email;
        school.phone = phone ? phone : school.phone;
        await school.save();
        return res.status(200).json({ message : "School updated" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Internal server error" })
    }
};

export const getMySchool = async (req, res) => {
    const { id } = req.user;
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Internal server error" })
    }
}