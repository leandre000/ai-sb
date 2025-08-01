export const getClass = async (req, res) => {
    const { id } = req.user;
    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Internal server error" });
    }
}