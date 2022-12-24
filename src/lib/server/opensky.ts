// This is a class for defining the functions I need to perform on OpenSky API. It's not a generic implementation.
export class OpenSkyApi {
	username: string;
	password: string;
	_planeNumbers: string[];

	constructor(planeNumbers?: string[], username?: string, password?: string) {
		this.username = username ?? "";
		this.password = password ?? "";
		this._planeNumbers = planeNumbers ?? [];
	}

	set planeNumbers(planeNumbers: string[]) {
		this._planeNumbers = planeNumbers;
	}

	// Must call extended too, because StateResponse expects it
	async getAllStates(): Promise<StateResponse> {
		let ApiURL = "https://opensky-network.org/api/states/all?extended=1";
		if (this.username && this.password) {
			ApiURL = "https://" + this.username + ":" + this.password + "@opensky-network.org/api/states/all?extended=1";
		}
		const response = await fetch(ApiURL);
		try {
			const stateResponse = new StateResponse(await response.json())
			return stateResponse;
		} catch(e) {
			console.log(e);
			throw(e);
		}
	}
}

// MUST have extended in the query, otherwise there will be an error
export class StateResponse {
	time: number;
	states: State[];

	constructor(jsonResponse: any) {
		this.time = 0;
		this.states = [];

		//const parsedJson = JSON.parse(jsonResponse)
		try {
			this.time = jsonResponse.time;
		} catch (e) {
			console.log(e)
			throw (e);
		}

		try {
			const states: Array<any> = jsonResponse.states;
			states.forEach((element: Array<any>) => {
				const state: State = {
					icao24: element[0],
					callsign: element[1],
					originCountry: element[2],
					timePosition: element[3],
					lastContact: element[4],
					longitude: element[5],
					latitude: element[6],
					baroAltitude: element[7],
					onGround: element[8],
					velocity: element[9],
					trueTrack: element[10],
					verticalRate: element[11],
					sensors: element[12],
					geoAltitude: element[13],
					squawk: element[14],
					spi: element[15],
					positionSource: element[16],
					category: element[17]
				};
				this.states.push(state);
			});
		} catch (e) {
			console.log(e);
			throw (e);
		}
	}
}

export interface State {
	icao24: string;
	callsign: string;
	originCountry: string;
	timePosition?: number;
	lastContact: number;
	longitude?: number;
	latitude?: number;
	baroAltitude?: number;
	onGround: boolean;
	velocity?: number;
	trueTrack?: number;
	verticalRate?: number;
	sensors?: number[];
	geoAltitude?: number;
	squawk?: string;
	spi: boolean;
	positionSource: number;
	category?: number;			// only valid if the extended flag is used for the request
}
