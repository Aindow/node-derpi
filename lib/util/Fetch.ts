import { User } from '../api/User';
import { Tag } from '../api/Tag';
import * as URLs from '../util/URLs';
import * as Consts from '../util/Consts';

import * as request from 'request';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';

export class Fetch {
	private jsonConvert: JsonConvert;

	constructor() {
		this.jsonConvert = new JsonConvert();
		this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
	}

	public async fetchUser(identifier: string | number): Promise<User> {
		const options = Object.assign({}, Consts.DEFAULT_REQUEST_OPTS, {
			uri: URLs.USER_URL.replace('{}', (identifier as string))
		});

		const json = await this.fetchJSON(options);
		throw new Error('test');
		return this.jsonConvert.deserializeObject(json, User);
	}

	public async fetchTag(identifier: string | number): Promise<Tag> {
		const options = {
			uri: URLs.TAG_URL.replace('{}', (identifier as string))
		};

		const json = await this.fetchJSON(options);
		return this.jsonConvert.deserializeObject(json, Tag);
	}

	private async fetchJSON(options: request.UriOptions): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			const opts = Object.assign({}, Consts.DEFAULT_REQUEST_OPTS, options);

			request.get(opts, (err: any, response: request.Response, body: any) => {
				if (err) {
					return reject(err);
				}

				const status = response.statusCode;
				if (status !== Consts.HTTP_200_OK && status !== Consts.HTTP_301_MOVED_PERMANENTLY) {
					return reject(new Error(`Received status code ${status}`));
				}

				return resolve(body);
			});
		});
	}
}
