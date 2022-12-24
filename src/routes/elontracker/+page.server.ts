import { OpenSkyApi } from '$lib/server/opensky';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async () => {
/* 	const api = new OpenSkyApi()
	const resp = await api.getAllStates()
	return {
		time: resp.time,
		states: resp.states
	} */
	return {};
})