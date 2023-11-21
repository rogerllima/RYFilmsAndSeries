import api from "../api";


export async function getDetailsAccount() {
    const response = await api.get(`/account/20713839`)

    return response;
}