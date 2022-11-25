export const notFoundHandler = (req, res) => {
    const message = "Not Found";

    res.status(404).json({ message });
};
