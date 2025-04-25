const redis = require('redis');

const client = redis.createClient({
  socket: {
    host: 'localhost',
    port: 6379
  }
});

client.on('error', err => console.error('Redis error:', err));
client.connect();

(async () => {
  await client.set('test-key', 'Hello from Redis!');
  const value = await client.get('test-key');
  console.log('Value:', value);
})();
