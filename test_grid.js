
const generateThreeYearGrid = () => {
    const weeks = [];
    const today = new Date("2025-12-29T13:08:45+05:30");
    const threeYearsAgo = new Date(today);
    threeYearsAgo.setFullYear(today.getFullYear() - 3);

    console.log("Start Date (3yrs ago):", threeYearsAgo.toISOString());
    console.log("End Date (Today):", today.toISOString());

    let lastDate;

    for (let w = 0; w < 156; w++) {
        for (let d = 0; d < 7; d++) {
            const date = new Date(threeYearsAgo);
            date.setDate(date.getDate() + (w * 7) + d);

            lastDate = date;
        }
    }
    console.log("Last Calculated Date:", lastDate.toISOString());
};

generateThreeYearGrid();
