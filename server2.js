const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('*', (req, res) => {
	res.json({success: true})
})

app.listen(PORT, () => {
  console.log('Server up on port ' + PORT);
})
