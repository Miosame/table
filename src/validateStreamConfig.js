import _ from 'lodash';
import schema from './schemas/streamConfig.json';
import tv4 from 'tv4';

/**
 * @typedef {string} cell
 */

/**
 * @typedef {cell[]} validateData~column
 */

/**
 * @param {formatData~config} config
 * @returns {undefined}
 */
export default (config = {}) => {
    let result;

    result = tv4.validateResult(config, schema);

    if (!result.valid) {
        console.log(`config`, config);
        console.log(`error`, {
            message: result.error.message,
            params: result.error.params,
            dataPath: result.error.dataPath,
            schemaPath: result.error.schemaPath
        });

        throw new Error(`Invalid config.`);
    }
};
