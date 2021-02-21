import 'dotenv/config';
import app from '@main/http/app';

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
