import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getProtectedResource } from "../services/message.service";

const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const [message, setMessage] = useState("");

    useEffect(() => {
        let isMounted = true;

        const getMessage = async () => {
            const accessToken = await getAccessTokenSilently();
            console.log({ accessToken });
            const { data, error } = await getProtectedResource(accessToken);

            if (!isMounted) {
                return;
            }

            if (data) {
                setMessage(JSON.stringify(data, null, 2));
            }

            if (error) {
                setMessage(JSON.stringify(error, null, 2));
            }
        };

        getMessage();

        return () => {
            isMounted = false;
        };
    }, [getAccessTokenSilently]);

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>Solicitud privada:</p>
                <pre>{message}</pre>
            </div>
        )
    );
};

export default Profile;
