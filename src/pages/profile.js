import { ChangeProfile } from '../components/ChangeProfile';
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            <div>
                Profile page of {username}
                <ChangeProfile />
            </div>
        </div>
    );
};