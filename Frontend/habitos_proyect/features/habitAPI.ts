export const fecthHabits = async () => {
    const response = await fetch("http://localhost:3001/habits");
    if (!response.ok) {
        throw new Error("Error fetching habits");
    }
    return response.json();
    //const data = await response.json();
    //return data;
};