export class InMemoryDataService {
	createDb() {
		let plans = [
			{
				id: 1,
				name: 'Starter Plan',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum urna quis congue bibendum. Nullam eget rutrum lectus. Curabitur et consequat massa. Curabitur ornare imperdiet velit vel cursus. Nunc quis orci sollicitudin, interdum ligula non, posuere nibh. Donec consequat sapien quis augue mollis fermentum. Aliquam suscipit nisl eu libero tincidunt, sit amet vestibulum odio faucibus. In finibus ipsum velit, vitae congue dui pellentesque at. Integer nisi tellus, faucibus pretium quam et, ultricies tincidunt nunc.'
			},
			{
				id: 2,
				name: 'Income Now',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum urna quis congue bibendum. Nullam eget rutrum lectus. Curabitur et consequat massa. Curabitur ornare imperdiet velit vel cursus. Nunc quis orci sollicitudin, interdum ligula non, posuere nibh. Donec consequat sapien quis augue mollis fermentum. Aliquam suscipit nisl eu libero tincidunt, sit amet vestibulum odio faucibus. In finibus ipsum velit, vitae congue dui pellentesque at. Integer nisi tellus, faucibus pretium quam et, ultricies tincidunt nunc.'
			},
			{
				id: 3,
				name: 'Wealth Protection',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum urna quis congue bibendum. Nullam eget rutrum lectus. Curabitur et consequat massa. Curabitur ornare imperdiet velit vel cursus. Nunc quis orci sollicitudin, interdum ligula non, posuere nibh. Donec consequat sapien quis augue mollis fermentum. Aliquam suscipit nisl eu libero tincidunt, sit amet vestibulum odio faucibus. In finibus ipsum velit, vitae congue dui pellentesque at. Integer nisi tellus, faucibus pretium quam et, ultricies tincidunt nunc.'
			},
			{
				id: 4,
				name: '1031 Exchange',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum urna quis congue bibendum. Nullam eget rutrum lectus. Curabitur et consequat massa. Curabitur ornare imperdiet velit vel cursus. Nunc quis orci sollicitudin, interdum ligula non, posuere nibh. Donec consequat sapien quis augue mollis fermentum. Aliquam suscipit nisl eu libero tincidunt, sit amet vestibulum odio faucibus. In finibus ipsum velit, vitae congue dui pellentesque at. Integer nisi tellus, faucibus pretium quam et, ultricies tincidunt nunc.'
			},
		];
		return {plans};
	}
}