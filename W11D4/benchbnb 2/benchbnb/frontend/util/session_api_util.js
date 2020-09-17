

export const postUser = formUser => (
    $.ajax({
        url: '/api/users',
        method: "POST",
        data: {user: formUser}
    })
);
export const postSession = formUser => (
    $.ajax({
        url: '/api/session',
        method: "POST",
        data: {user: formUser}
    })
);
export const deleteSession = () => (
    $.ajax({
        url: '/api/session',
        method: "DELETE"
    })
);