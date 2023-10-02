
export const RequestHeaders = (formData = false) => {

    // let token =

    return ({
        "Accept": "application/json",
        "Content-Type": "application/json",
        // ...(token && {
        //     Authorization: "Bearer " + token?.access_token
        // }),
        ...(formData && {
            "Content-type": "multipart/form-data",
        })
    })

}