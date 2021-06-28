module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb+srv://asd:123@mynube.mg7ap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    urlParser: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true

    }

}