import { useSelector } from "react-redux";

export const useAuth = (tokenType) => {
  const { roles, currentLoggedInUserRoleId } = useSelector(
    (state) => state.roles
  );

  // console.log(currentLoggedInUserRoleId, roles);

  const isAuthenticatedUser = (targetRole) => {
    const loggedInUserRole = roles.find((role) => {
      return role._id === currentLoggedInUserRoleId;
    });

    if (
      (loggedInUserRole && loggedInUserRole.code === targetRole) ||
      !!sessionStorage.getItem(tokenType)
    ) {
      return true;
    }

    return false;
  };

  return isAuthenticatedUser;
};
