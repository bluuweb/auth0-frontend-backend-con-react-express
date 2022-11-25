import {
    InsufficientScopeError,
    InvalidTokenError,
    UnauthorizedError,
} from "express-oauth2-jwt-bearer";

export const errorHandler = (error, req, res, next) => {
    console.log("ACAAAAAAA!!!", error);
    if (error instanceof InsufficientScopeError) {
        const message = "Permission denied";

        res.status(error.status).json({ ok: false, msg: message });

        return;
    }

    if (error instanceof InvalidTokenError) {
        const message = "Bad credentials";

        res.status(error.status).json({ ok: false, msg: message });

        return;
    }

    if (error instanceof UnauthorizedError) {
        const message = "Requires authentication";

        res.status(error.status).json({ ok: false, msg: message });

        return;
    }

    const status = 500;
    const message = "Internal Server Error";

    res.status(status).json({ ok: false, msg: message });
};
