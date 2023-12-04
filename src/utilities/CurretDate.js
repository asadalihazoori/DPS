export const getCurrentDate = () => {
    const now = new Date();
    const formattedDate = now.toDateString();

    return formattedDate
};