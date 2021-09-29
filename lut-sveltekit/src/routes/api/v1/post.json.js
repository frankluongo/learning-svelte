export async function get({ params }) {
	return {
		status: 200,
		body: {
			data: {
				message: 'test',
				params
			}
		}
	};
}
