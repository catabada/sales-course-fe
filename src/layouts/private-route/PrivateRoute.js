const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    return user ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
        <Redirect to="/login" />
    );
}