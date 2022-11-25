export const getPublicMessages = (req, res) => {
    res.json({
        ok: true,
        msg: "getPublicMessages",
    });
};

export const getPrivateMessages = (req, res) => {
    res.json({
        ok: true,
        msg: "getPrivateMessages",
    });
};
