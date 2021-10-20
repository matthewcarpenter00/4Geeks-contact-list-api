const URL_API = "https://assets.breatheco.de/apis/fake/contact";
const agenda_slug = "andresgoag";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			getContacts: () => {
				fetch(`${URL_API}/agenda/${agenda_slug}`)
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							return new Error("Error fetching the api");
						}
					})
					.then(data => setStore(data))
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
