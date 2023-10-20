module.exports = {
	apps: [
		{
			name: 'kurabun-ec',
			script: './node_modules/.bin/next',
			args: 'start',
			cwd: '/home/ubuntu/kurabun-ec',
			instances: 2,
			watch: false,
			max_memory_restart: '2G',
			exec_mode: 'cluster',
			env: {
				PORT: 4000,
			},
		},
	],
};
