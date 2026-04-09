module.exports = {
	apps: [
	  {
		name: 'adv-svkit-sitev4',
		script: 'bun',
		args: 'run /home/arobinson/dev/projects/adv-svkit-sitev4/build/index.js',
		cwd: '/home/arobinson/dev/projects/adv-svkit-sitev4',
		env: {
		  NODE_ENV: 'production',
		  PORT: 7109,
		  HOST: '0.0.0.0', 
		  ORIGIN: 'https://alexdoesvoices.com',
		  ADDRESS_HEADER: 'x-forwarded-for',
		  PROTOCOL_HEADER: 'x-forwarded-proto'
		},
		restart_delay: 5000,
		max_memory_restart: '500M'
	  }
	]
  }