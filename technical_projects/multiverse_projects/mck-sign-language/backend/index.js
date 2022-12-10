const express = require('express');
const app = express();
var cors = require('cors');
const pool = require('./db');




app.use(express.json());
app.use(cors())


//ROUTES//

//get all alphabets
app.get('/alphabets', async (req, res) => {
	try {
		const AllAlphabets = await pool.query('SELECT * FROM alphabet');

		res.json(AllAlphabets.rows);
	} catch (error) {
		console.error(error.message);
	}
});
// get a alphabet

app.get('/alphabet/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const alphabet = await pool.query(
			'SELECT * FROM alphabet WHERE alphabet_id = $1',
			[id]
		);

		res.json(alphabet.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});




//create a alphabet
app.post('/alphabets', async (req, res) => {
	try {
		const { description } = req.body;
		const newAlphabet = await pool.query(
			'INSERT INTO alphabet (description) VALUES ($1) RETURNING *',
			[description]
		);

		res.json(newAlphabet.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// update a alphabet
app.put('/alphabet/:id', async (req, res) => {
	try {
		const { id } = req.params; // WHERE
		const { description } = req.body; // SET

		const updateAlphabet = await pool.query(
			'UPDATE alphabet SET description= $1 WHERE alphabet_id= $2',
			[description, id]
		);

		res.json('Alphabet was Updated!');
	} catch (error) {
		console.error(error.message);
	}
});

//DELETE a alphabet

app.delete('/alphabet/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const deleteAlphabet = await pool.query(
			'DELETE FROM alphabet WHERE alphabet_id = $1',
			[id]
		);

		res.json('Alphabet was Deleted!!');
	} catch (error) {
		console.error(error.message);
	}
});

app.listen(4000, () => {
	console.log('listening on port 4000');
});
