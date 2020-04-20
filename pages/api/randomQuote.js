import AllQuotes from '../../quotes.json'

export default (req, res) => {
    // res.status(200).json({
    //     quote: 'Careful out there!',
    //     author: 'Anonymous'
    // })
    /////////////
    // const quote = quotes[Math.floor(Math.random() * quotes.length)];
    // res.status(200).json(quote);
    /////////////
    const { author } = req.query;
    let quotes = AllQuotes;

    if (author) {
        quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()))
    }
    if (!quotes.length) {
        quotes = AllQuotes.filter(quote => quote.author.toLowerCase() === 'unknown')
    }

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json(quote);
};

