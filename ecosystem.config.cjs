module.exports = {
	apps: [
		{
			name: 'adv-svkit-sitev4',
			script: 'bun',
			env: {
				NODE_ENV: 'production',
				PORT: 8118,
				ORIGIN: 'http://alexdoesvoices.com',
				ADDRESS_HEADER: 'x-forwarded-for',
				PROTOCOL_HEADER: 'x-forwarded-proto'
			},
		restart_delay: 5000,
		max_memory_restart: '500M'
	  }
	]
};
