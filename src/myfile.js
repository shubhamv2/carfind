import fs from 'fs/promises';
const filePath = 'public/data.json';
async function addIds() {
    try {
        const jsonData = JSON.parse(await fs.readFile(filePath, 'utf-8'));


        jsonData.data.forEach((obj) => {
            const val = Math.floor(Math.random() * (8 - 5)) + 5;
            let str = "";
            for (let i = 0; i < val - 3; i++) {
                str += Math.floor(Math.random() * 10)
            }
            str = str + "000";

            obj.price = parseInt(str);
        })
        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
        console.log('ids added succesfully')

    }
    catch (error) {
        console.log("error", error);
    }
}
addIds();

