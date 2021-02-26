import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import {
    createUserRequest,
    deleteUserRequest,
    getUsersRequest,
    usersError,
} from "../actions/users";
import NewUserForm from "./NewUserForm";
import UsersList from "./UsersList";

const App = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsersRequest());
    }, [dispatch]);

    const handleSubmit = ({ firstName, lastName }) => {
        dispatch(createUserRequest({ firstName, lastName }));
    };

    const handleDeleteUserClick = (userId) => {
        dispatch(deleteUserRequest(userId));
    };

    const handleCloseAlert = () => {
        dispatch(usersError({ error: "" }));
    };

    return (
        <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
            <Alert color="danger" isOpen={!!users.error} toggle={handleCloseAlert}>
                {users.error}
            </Alert>
            <NewUserForm onSubmit={handleSubmit} />
            <UsersList users={users.items} onDeleteUser={handleDeleteUserClick} />
        </div>
    );
};

export default App;
