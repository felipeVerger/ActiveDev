export const userQuery = (email) => {
    const query = `*[_type == "user" && email == '${email}']`;
    return query;
};