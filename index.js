const app = require("express")();
const PORT = 5001;

app.get("/", (req, res) => {
    return res.send({ message: "Hey, there Docker!" });
});

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
});
