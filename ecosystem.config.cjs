module.exports = {
	apps: [
		{
			name: 'adv-svkit-sitev4',
			script: 'build/index.js',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
				ORIGIN: 'http://localhost',
				ADDRESS_HEADER: 'x-forwarded-for',
				PROTOCOL_HEADER: 'x-forwarded-proto'
			}
		}
	]
};
