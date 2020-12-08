import {API} from '../../backend'

export const getProducts = async () => {
    return fetch(`${API}product/`, {method: 'GET'})
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))

}